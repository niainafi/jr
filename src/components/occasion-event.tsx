"use client";
{/*TALOHA 
import Image from 'next/image';

import Container from './container';
type Artcle = {
  src: string;
  title: string;
};
const articles : Artcle[] = [
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

export default function OccasionEvent() {
  return (
    <section className="mx-auto pt-5 mb-5">
      <Container>
      {/* Navigation 
      <div className="text-center mb-6">
        <span className="text-gray-500">Ride | </span>
        <span className="text-accent font-bold"> Événement </span>
        <span className="text-gray-500">| Autre</span>
      </div>

      {/* Grille d'articles 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 my-16">
      {articles.map((article, index) => (
        <CardArticle key={index} article={article} />
      ))}
    </div>
    </Container>
    </section>
  );
}

function CardArticle({article}: {article : Artcle}) {
  return(
    <div
          className="relative h-[23rem] group overflow-hidden shadow-sm rounded-sm  transition-transform duration-200 "
        >
          {/* Image avec effet de zoom 
          <Image
            src={article.src}
            alt={article.title}
            fill
            className="w-full h-full sm:h-64 object-cover"
          />

          {/* Effet de fond qui monte 
          <div className="absolute inset-0 bg-accent opacity-80 transition-transform duration-300 ease-out translate-y-[70%] group-hover:translate-y-0" />

          {/* Texte en bas au début qui monte au centre 
          <div className="absolute bottom-0 w-full  text-center text-white p-3 font-bold text-lg transition-all duration-300 ease-out  group-hover:bottom-1/2 group-hover:translate-y-1/2">
            {article.title}
          </div>
        </div>
  )
}
*/}

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
    <section className="mx-auto pt-5 mb-5">
      <Container>
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
