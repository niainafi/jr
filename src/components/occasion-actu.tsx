"use client";

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

// URL des API pour récupérer les catégories et les articles
const API_URL = "https://justride.up.railway.app/api/category-actus";
const PRODUCT_URL = "https://justride.up.railway.app/api/actus/category";

export default function MotocrossNews() {
  // États pour stocker les catégories, les articles et gérer l'affichage
  const [categories, setCategories] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 États pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  // Fonction pour récupérer les articles d'une catégorie spécifique
  const fetchArticles = useCallback(async (categoryId: any) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${PRODUCT_URL}/${categoryId}`);

      // Trier les articles par date décroissante (du plus récent au plus ancien)
      const sortedArticles = data.sort(
        (a: any, b: any) =>
          (new Date(b.date) as any) - (new Date(a.date) as any)
      );

      setArticles(sortedArticles);
      setSelectedCategory(categoryId);
    } catch (error) {
      setError("Erreur lors du chargement des actualités");
    } finally {
      setLoading(false);
    }
  }, []); // ✅ Aucune dépendance ici

  // Fonction pour récupérer les catégories depuis l'API
  const fetchCategories = useCallback(async () => {
    try {
      const { data } = await axios.get(API_URL);
      setCategories(data);
      // Modification des noms des catégories avec un "s" au pluriel
      const updatedCategories = data.map((category: any) => {
        if (category.name === "Actus Internationale") {
          category.name = "Actus Internationales";
        }
        if (category.name === "Actus Locale") {
          category.name = "Actus Locales";
        }
        return category;
      });

      setCategories(updatedCategories);

      // Charger directement les articles de la première catégorie
      if (data.length > 0) {
        fetchArticles(data[0]._id);
      }
    } catch (error) {
      setError("Erreur lors du chargement des catégories");
    }
  }, [fetchArticles]); // ✅ Correction ici : fetchArticles ajouté comme dépendance

  // Charger les catégories une seule fois au montage du composant
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]); // ✅ fetchCategories est maintenant bien pris en compte

  // 🔹 Calcul des articles à afficher sur la page actuelle
  const currentArticles = articles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  // 🔹 Gestion de la pagination
  // const nextPage = () => {
  //   if (currentPage < Math.ceil(articles.length / articlesPerPage)) {
  //     setCurrentPage((prev) => prev + 1);
  //   }
  // };

  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage((prev) => prev - 1);
  //   }
  // };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="mx-auto mb-5">
      <Container className="mt-10">
        {/* Affichage des erreurs s'il y en a */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Liste des catégories cliquables */}
        <ul className="flex overflow-x-auto sm:justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 sm:pb-0 relative z-[2]">
          {categories.map((category) => (
            <li
              key={category._id}
              onClick={() => fetchArticles(category._id)}
              className={`cursor-pointer px-3 text-lg font-normal ${
                selectedCategory === category._id
                  ? "font-bold underline text-accent"
                  : ""
              }`}
            >
              {category.name}
            </li>
          ))}
        </ul>

        {/* Affichage des articles sous forme de cartes */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full my-14">
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <ArticleLoading key={index} />
            ))}
          </div> 
        ) : (
          <div className="my-14 min-h-[10vh]">
            {articles.length > 0 ? (
              <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2">
                {currentArticles.map((article) => (
                <CardArticle key={article._id} article={article} />
              ))}
              </div>
              <div className="flex justify-center mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 rounded-md mx-2"
              >
                Précédent
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage * ITEMS_PER_PAGE >= articles.length}
                className="px-4 py-2 bg-gray-300 rounded-md mx-2"
              >
                Suivant
              </button>
            </div>
              </>
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                Aucune actualité disponible
              </p>
            )}
            
          </div>
        )}
      </Container>
    </section>
  );
}



// Composant pour afficher une carte d'article
function CardArticle({ article }: any) {
  // Formater la date en français (ex: "12 mars 2025")
  const formattedDate = new Date(article.date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Fonction pour supprimer les balises HTML d'une chaîne de texte
  const stripHtmlTags = (html: string) => {
    return html.replace(/<\/?[^>]+(>|$)/g, ""); // Supprime toutes les balises HTML
  };

  // Fonction pour limiter la description à 30 mots après suppression des balises HTML
  const truncateDescription = (description: string) => {
    const cleanText = stripHtmlTags(description);
    const words = cleanText.split(" ");
    if (words.length > 30) {
      return words.slice(0, 30).join(" ") + "...";
    }
    return cleanText;
  };

  return (
    <Link href={`/actualites/${article._id}`} className="block">
      <div className="relative h-[23rem] group overflow-hidden shadow-sm rounded-sm transition-transform duration-200 cursor-pointer">
        {/* 📌 Affichage de la date en haut à gauche SUR l’image */}
        <div className="absolute top-3 left-3 bg-accent bg-opacity-60 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md backdrop-blur-sm z-[2]">
          {formattedDate}
        </div>

        {/* Affichage de l'image principale de l'article */}
        {article.imageUne && (
          <Image
            src={article.imageUne}
            alt={article.title}
            fill
            className="w-full h-full sm:h-64 object-cover"
          />
        )}

        {/* Effet d'opacité et affichage du contenu au survol */}
        <div className="absolute inset-0 bg-accent opacity-80 transition-transform duration-300 ease-out translate-y-[70%] group-hover:translate-y-0" />

        {/* 🎯 Titre + description affichés UNIQUEMENT au survol */}
        <div className="absolute bottom-0 w-full text-center text-white p-3 font-bold text-lg transition-all duration-300 ease-out group-hover:bottom-1/2 group-hover:translate-y-1/2">
          <h3 className="text-lg">{article.title}</h3>
          <p className="text-sm mt-2 hidden group-hover:block">
            {truncateDescription(article.description)}
            {/* <Link href={`/actualites/${article._id}`} className="text-white-300 ml-2">
              Lire la suite
            </Link> */}
          </p>
        </div>
      </div>
    </Link>
  );
}
// Composant de chargement pour les articles
function ArticleLoading() {
  return (
    <div className="flex flex-col animate-pulse gap-3">
      <div className="w-full h-64 bg-gray-200 rounded-sm"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-6 rounded bg-gray-200 w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 rounded bg-gray-200"></div>
          <div className="h-4 rounded bg-gray-200"></div>
          <div className="h-4 rounded bg-gray-200 w-5/6"></div>
        </div>
      </div>
    </div>
  );
}