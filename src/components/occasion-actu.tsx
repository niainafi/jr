'use client';
{/*
import Image from 'next/image';

const articles = [
  { src: '/images/photos/moto.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/ride.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/ride1.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/img-gopro.png', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/img-gant.png', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/img-casque-1.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/moto.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/ride.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/ride1.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
];

export default function MotocrossNews() {
  return (
    <section className="p-6 md:p-10">
      {/* Navigation 
      <div className="text-center mb-6">
        <span className="text-gray-500">Actualités Internationales | </span>
        <span className="text-accent font-bold">Actualités Locales</span>
      </div>

      {/* Grille d'articles 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {articles.map((article, index) => (
          <div key={index} className="relative group overflow-hidden shadow-lg rounded-lg">
            {/* Image avec effet de zoom 
            <Image
              src={article.src}
              alt={article.title}
              width={400}
              height={300}
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Superposition jaune au hover 
            <div className="absolute inset-0 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
            {/* Texte en bas 
            <div className="absolute bottom-0 bg-accent bg-opacity-70 text-white p-3 text-center w-full font-bold">
              {article.title}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination 
      <div className="flex justify-center mt-6 space-x-2 text-accent font-bold">
        <span className="cursor-pointer">1</span>
        <span className="cursor-pointer">2</span>
        <span className="cursor-pointer">3</span>
        <span>...</span>
        <span className="cursor-pointer">10</span>
      </div>
    </section>
  );
}
*/}


{/*
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

const API_URL = "https://justride.up.railway.app/api/category-actus";
const PRODUCT_URL = "https://justride.up.railway.app/api/actus/category";

export default function MotocrossNews() {
  const [categories, setCategories] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const articlesPerPage = 9;
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const { data } = await axios.get(API_URL);
      setCategories(data);
      if (data.length > 0) {
        fetchArticles(data[0]._id);
      }
    } catch (error) {
      setError("Erreur lors du chargement des catégories");
    }
  }, []);

  const fetchArticles = async (categoryId: any) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${PRODUCT_URL}/${categoryId}`);
      // Trier les articles par date décroissante
      const sortedArticles = data.sort((a: any, b: any) => (new Date(b.date) as any) - (new Date(a.date) as any));
      setArticles(sortedArticles);
      setSelectedCategory(categoryId);
    } catch (error) {
      setError("Erreur lors du chargement des actualités");
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <section className="mx-auto pt-5 mb-5">
      <Container>
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        {/* Liste des catégories 
        <ul className="flex overflow-x-auto sm:justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 sm:pb-0">
          {categories.map((category) => (
            <li
              key={category._id}
              onClick={() => fetchArticles(category._id)}
              className={`cursor-pointer px-3 text-lg font-normal ${selectedCategory === category._id ? 'font-bold underline text-accent' : ''}`}
            >
              {category.name}
            </li>
          ))}
        </ul>

        {/* Grille des articles 
        {loading ? (
          <p className="text-gray-500 text-center mt-6">Chargement des actualités...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 my-16">
            {articles.length > 0 ? (
              articles.map((article) => (
                <CardArticle key={article._id} article={article} />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">Aucune actualité disponible</p>
            )}
          </div>
          
        )}
      </Container>
    </section>
  );
}

function CardArticle({ article }: any) {
  return (
    <Link href={`/actualites/${article._id}`} className="block">
      <div className="relative h-[23rem] group overflow-hidden shadow-sm rounded-sm transition-transform duration-200 cursor-pointer">
        {article.imageUne && (
          <Image
            src={article.imageUne}
            alt={article.title}
            fill
            className="w-full h-full sm:h-64 object-cover"
          />
        )}
        <div className="absolute inset-0 bg-accent opacity-80 transition-transform duration-300 ease-out translate-y-[70%] group-hover:translate-y-0" />
        <div className="absolute bottom-0 w-full text-center text-white p-3 font-bold text-lg transition-all duration-300 ease-out group-hover:bottom-1/2 group-hover:translate-y-1/2">
          {article.title}
       
          {article.date}
        </div>
      </div>
    </Link>
  );
}*/}

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

  // Charger les catégories une seule fois au montage du composant
  useEffect(() => {
    fetchCategories();
  }, []);

  // Fonction pour récupérer les catégories depuis l'API
  const fetchCategories = useCallback(async () => {
    try {
      const { data } = await axios.get(API_URL);
      setCategories(data);
      // Charger directement les articles de la première catégorie
      if (data.length > 0) {
        fetchArticles(data[0]._id);
      }
    } catch (error) {
      setError("Erreur lors du chargement des catégories");
    }
  }, []);

  // Fonction pour récupérer les articles d'une catégorie spécifique
  const fetchArticles = async (categoryId: any) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${PRODUCT_URL}/${categoryId}`);

      // Trier les articles par date décroissante (du plus récent au plus ancien)
      const sortedArticles = data.sort(
        (a: any, b: any) => (new Date(b.date) as any) - (new Date(a.date) as any)
      );

      setArticles(sortedArticles);
      setSelectedCategory(categoryId);
    } catch (error) {
      setError("Erreur lors du chargement des actualités");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto pt-5 mb-5">
      <Container>
        {/* Affichage des erreurs s'il y en a */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Liste des catégories cliquables */}
        <ul className="flex overflow-x-auto sm:justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 sm:pb-0">
          {categories.map((category) => (
            <li
              key={category._id}
              onClick={() => fetchArticles(category._id)}
              className={`cursor-pointer px-3 text-lg font-normal ${
                selectedCategory === category._id ? 'font-bold underline text-accent' : ''
              }`}
            >
              {category.name}
            </li>
          ))}
        </ul>

        {/* Affichage des articles sous forme de cartes */}
        {loading ? (
          <p className="text-gray-500 text-center mt-6">Chargement des actualités...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 my-16">
            {articles.length > 0 ? (
              articles.map((article) => (
                <CardArticle key={article._id} article={article} />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">Aucune actualité disponible</p>
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

  // Fonction pour limiter la description à 10 mots après suppression des balises HTML
  const truncateDescription = (description: string) => {
    const cleanText = stripHtmlTags(description); // Nettoie la description
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
        <div className="absolute top-3 left-3 bg-accent bg-opacity-60 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md backdrop-blur-sm z-10">
          {formattedDate}
        </div>

        {/* 🖼️ Affichage de l'image principale de l'article */}
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
          {/* 🔹 Titre de l'article (visible uniquement au hover) */}
          <h3 className="text-lg">{article.title}</h3>

          {/* ✍️ Description affichée au survol, limitée à 10 mots */}
          <p className="text-sm mt-2 hidden group-hover:block">
            {truncateDescription(article.description)}
            <Link href={`/actualites/${article._id}`} className="text-white-300 ml-2">
              Lire la suite
            </Link>
          </p>
        </div>
      </div>
    </Link>
  );
}
