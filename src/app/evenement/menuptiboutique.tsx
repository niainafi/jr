 "use client";

 {/* sans api
"use client";

import clsx from "clsx";
import React, { useState } from "react";

const filters = [
  { id: 1, name: "Casque" },
  { id: 2, name: "Blouson" },
  { id: 3, name: "Gants" },
  { id: 4, name: "Pantalon" },
  { id: 5, name: "Chaussures" },
  { id: 6, name: "Dorsale" },
  { id: 7, name: "Accessoire" },
  { id: 8, name: "Technologie" },
] as const;

type Filter = (typeof filters)[number];

export default function MenuPtiBoutique() {
  const [activeFilter, setActiveFilter] = useState<Filter>(filters[0]);

  const handleFilterClick = (filter: Filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="mt-5 px-4 sm:px-6 md:px-10 lg:px-24 mb-32">

      {/* Filtres avec scroll sur mobile 
      <ul className="flex overflow-x-auto sm:justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 sm:pb-0">
        {filters.map((filter, index) => (
          <li
            key={index}
            onClick={() => handleFilterClick(filter)}
            className={clsx(
              "text-center text-lg cursor-pointer underline-offset-4 whitespace-nowrap px-3",
              {
                "font-bold underline decoration-[var(--color-accent)] decoration-2":
                  activeFilter.id === filter.id,
                "font-normal no-underline decoration-transparent decoration-0":
                  activeFilter.id !== filter.id,
              }
            )}
          >
            {filter.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
*/}


 {/*
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import clsx from "clsx";

export default function MenuPtiBoutique() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "https://justride.up.railway.app/api/category-product";
  const PRODUCT_URL = "https://justride.up.railway.app/api/product/category";

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoadingCategories(true);
      const { data } = await axios.get(API_URL);
      setCategories(data);
      if (data.length > 0) {
        fetchProducts(data[0]._id);
      }
    } catch (error) {
      setError("Erreur lors du chargement des catégories");
    } finally {
      setLoadingCategories(false);
    }
  };

  const fetchProducts = async (categoryId) => {
    try {
      setLoadingProducts(true);
      const { data } = await axios.get(`${PRODUCT_URL}/${categoryId}`);
      setProducts(data);
      setSelectedCategory(categoryId);
    } catch (error) {
      setError("Erreur lors du chargement des produits");
    } finally {
      setLoadingProducts(false);
    }
  };

  return (
    <section className="mt-5 px-4 sm:px-6 md:px-10 lg:px-24 mb-32">
      {error && <p className="text-red-500 text-center">{error}</p>}
      {loadingCategories && <p className="text-gray-500 text-center">Chargement des catégories...</p>}

      {!loadingCategories && categories.length > 0 && (
        <ul className="flex overflow-x-auto sm:justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 sm:pb-0">
          {categories.map((category, index) => (
            <li
              key={category._id || `category-${index}`}
              onClick={() => fetchProducts(category._id)}
              className={clsx(
                "text-center text-lg cursor-pointer underline-offset-4 whitespace-nowrap px-3 transition-all duration-300",
                {
                  "font-bold underline decoration-[var(--color-accent)] decoration-2":
                    selectedCategory === category._id,
                  "font-normal no-underline decoration-transparent decoration-0":
                    selectedCategory !== category._id,
                }
              )}
            >
              {category.name}
            </li>
          ))}
        </ul>
      )}

      {loadingProducts && <p className="text-gray-500 text-center mt-6">Chargement des produits...</p>}

      {!loadingProducts && (
        <div className="flex justify-center items-start min-h-screen mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12 w-full max-w-screen-xl">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div key={product.id || `product-${index}`} className="flex flex-col items-start">
                  <div className="relative w-[300px]">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={300}
                      height={product.category === "Pantalon" ? 500 : 300} //si pantalon hauteur = 500
                      className="w-auto h-auto"
                      priority
                    />
                    <div className="w-12 h-1 mt-4 bg-accent ml-20"></div>
                  </div>
                  <h2 className="text-lg font-bold pl-20 mt-3">{product.name}</h2>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">Aucun produit disponible</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
*/}

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import clsx from "clsx";

export default function MenuPtiBoutique() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 1;

  const API_URL = "https://justride.up.railway.app/api/category-product";
  const PRODUCT_URL = "https://justride.up.railway.app/api/product/category";

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoadingCategories(true);
      const { data } = await axios.get(API_URL);
      setCategories(data);
      if (data.length > 0) {
        fetchProducts(data[0]._id);
      }
    } catch (error) {
      setError("Erreur lors du chargement des catégories");
    } finally {
      setLoadingCategories(false);
    }
  };

  const fetchProducts = async (categoryId) => {
    try {
      setLoadingProducts(true);
      const { data } = await axios.get(`${PRODUCT_URL}/${categoryId}`);
      const filteredProducts = data.filter(product => product.imageUrl); // Filtrer les produits sans image
      setProducts(filteredProducts);
      setSelectedCategory(categoryId);
      setCurrentPage(1); // Réinitialiser la pagination
    } catch (error) {
      setError("Erreur lors du chargement des produits");
    } finally {
      setLoadingProducts(false);
    }
  };

  // Pagination
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <section className="mt-5 px-4 sm:px-6 md:px-10 lg:px-24 mb-32">
      {error && <p className="text-red-500 text-center">{error}</p>}
      {loadingCategories && <p className="text-gray-500 text-center">Chargement des catégories...</p>}

      {!loadingCategories && categories.length > 0 && (
        <ul className="flex overflow-x-auto sm:justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 sm:pb-0">
          {categories.map((category, index) => (
            <li
              key={category._id || `category-${index}`}
              onClick={() => fetchProducts(category._id)}
              className={clsx(
                "text-center text-lg cursor-pointer underline-offset-4 whitespace-nowrap px-3 transition-all duration-300",
                {
                  "font-bold underline decoration-[var(--color-accent)] decoration-2":
                    selectedCategory === category._id,
                  "font-normal no-underline decoration-transparent decoration-0":
                    selectedCategory !== category._id,
                }
              )}
            >
              {category.name}
            </li>
          ))}
        </ul>
      )}

      {loadingProducts && <p className="text-gray-500 text-center mt-6">Chargement des produits...</p>}

      {!loadingProducts && (
        <div className="flex justify-center items-start min-h-screen mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12 w-full max-w-screen-xl">
            {currentProducts.length > 0 ? (
              currentProducts.map((product, index) => (
                <div key={product.id || `product-${index}`} className="flex flex-col items-start">
                  <div className="relative w-[300px]">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={300}
                      height={product.category === "Pantalon" ? 500 : 300}
                      className="w-auto h-auto"
                      priority
                    />
                    <div className="w-12 h-1 mt-4 bg-accent ml-20"></div>
                  </div>
                  <h2 className="text-lg font-bold pl-20 mt-3">{product.name}</h2>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">Aucun produit disponible</p>
            )}
          </div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button onClick={prevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">Précédent</button>
          <span>Page {currentPage} sur {totalPages}</span>
          <button onClick={nextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">Suivant</button>
        </div>
      )}
    </section>
  );
}
