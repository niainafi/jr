"use client";

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";

const API_URL = "https://justride.up.railway.app/api/category-event";
const PRODUCT_URL = "https://justride.up.railway.app/api/event/category";

export default function OccasionEvent() {
  const [categories, setCategories] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Encapsuler fetchArticles dans useCallback pour éviter les récréations inutiles
  const fetchArticles = useCallback(async (categoryId: any) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${PRODUCT_URL}/${categoryId}`);
      const sortedArticles = data.sort((a: any, b: any) => (new Date(b.date) as any) - (new Date(a.date) as any));
      setArticles(sortedArticles);
      setSelectedCategory(categoryId);
    } catch (error) {
      setError("Erreur lors du chargement des événements");
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ Encapsuler fetchCategories et inclure fetchArticles dans ses dépendances
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
  }, [fetchArticles]); // ✅ Correction ici

  // ✅ Ajout de fetchCategories comme dépendance de useEffect
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]); // ✅ Correction ici

  return (
    <section className="mx-auto">
      <Container className="mt-2">
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        {/* Liste des catégories */}
        <ul className="flex overflow-x-auto sm:justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 sm:pb-0">
          {categories.map((category: any) => (
            <li
              key={category._id}
              onClick={() => fetchArticles(category._id)}
              className={`cursor-pointer px-3 text-lg font-normal ${selectedCategory === category._id ? 'font-bold underline text-accent' : ''}`}
            >
              {category.name}
            </li>
          ))}
        </ul>

        {/* Grille des articles */}
        {loading ? (
          <p className="text-gray-500 text-center mt-6">Chargement des événements...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 my-16">
            {articles.length > 0 ? (
              articles.map((article: any) => (
                <CardArticle key={article._id} article={article} />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">Aucun événement disponible</p>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}

// 📌 Composant pour une carte d'article
function CardArticle({ article }: any) {
  return (
    <Link href={`/evenement/${article._id}`} className="block">
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
        </div>
      </div>
    </Link>
  );
}


