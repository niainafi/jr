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
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

const API_URL = "https://justride.up.railway.app/api/category-actus";
const PRODUCT_URL = "https://justride.up.railway.app/api/actus/category";

export default function MotocrossNews() {
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setCategories(data);
      if (data.length > 0) {
        fetchArticles(data[0]._id);
      }
    } catch (error) {
      setError("Erreur lors du chargement des catégories");
    }
  };

  const fetchArticles = async (categoryId) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${PRODUCT_URL}/${categoryId}`);
      setArticles(data);
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
       
        {/* Catégories 
        {error && <p className="text-red-500 text-center">{error}</p>}
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

        {/* Grille d'articles 
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

function CardArticle({ article }) {
  return (
    <Link href={`/actualites/${article._id}`} passHref>
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
*/}


import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

const API_URL = "https://justride.up.railway.app/api/category-actus";
const PRODUCT_URL = "https://justride.up.railway.app/api/actus/category";

export default function MotocrossNews() {
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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

  const fetchArticles = async (categoryId) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${PRODUCT_URL}/${categoryId}`);
      const sortedArticles = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setArticles(sortedArticles);
      setSelectedCategory(categoryId);
      setCurrentPage(1); // Reset pagination when category changes
    } catch (error) {
      setError("Erreur lors du chargement des actualités");
    } finally {
      setLoading(false);
    }
  };

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <section className="mx-auto pt-5 mb-5">
      <Container>
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        {/* Liste des catégories */}
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

        {/* Grille des articles */}
        {loading ? (
          <p className="text-gray-500 text-center mt-6">Chargement des actualités...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 my-16">
              {currentArticles.length > 0 ? (
                currentArticles.map((article) => (
                  <CardArticle key={article._id} article={article} />
                ))
              ) : (
                <p className="text-gray-500 text-center col-span-full">Aucune actualité disponible</p>
              )}
            </div>
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6 space-x-4">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                  Précédent
                </button>
                <span className="text-lg font-semibold">{currentPage} / {totalPages}</span>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                  Suivant
                </button>
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
}

function CardArticle({ article }) {
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
        </div>
      </div>
    </Link>
  );
}
