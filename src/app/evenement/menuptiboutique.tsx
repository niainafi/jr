 "use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import clsx from "clsx";

type CardImageProps = {
    selectedImage?: string;
    product : Product
}

type Product = {
    _id: string;
    name: string;
    imageUrl: string;
    category: string;
    price: number;
    description: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export default function MenuPtiBoutique() {
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const API_URL = "https://justride.up.railway.app/api/category-product";
  const PRODUCT_URL = "https://justride.up.railway.app/api/product/category";



  // État pour l'image sélectionnée

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const { data } = await axios.get(API_URL);
        setCategories(data);
        if (data.length > 0) {
          fetchProducts(data[0]._id);
        }
      } catch (error : any) {
        setError("Erreur lors du chargement des catégories");
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  const fetchProducts = async (categoryId : string) => {
    try {
      setLoadingProducts(true);
      const { data } = await axios.get(`${PRODUCT_URL}/${categoryId}`);
      const filteredProducts = data.filter((product: any) => product.imageUrl); // Filtrer les produits sans image
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
  const currentProducts: any = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
            {currentProducts.length > 0 && (
              currentProducts.map((product : any, index: number) => (
                <CardImage key={index} product={product} />
              ))
            )}
            {currentProducts.length === 0 && (
              <p className="text-gray-500 text-center mt-6">Aucun produit trouvé pour cette catégorie.</p>
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


function CardImage({ product }: CardImageProps) {
  const [selectedImage, setSelectedImage] = useState<string>(product.imageUrl); 
  const [images, setImages] = useState<string[]>(['/images/boutique/casque17.png','/images/boutique/casque12.png','/images/boutique/casque11.png']);

  useEffect(() => {
    if (product.imageUrl) {
      setSelectedImage(product.imageUrl);
    }
  },[product.imageUrl]);
  const handleImageClick = (imageUrl: string,curentSelectedImageUrl: string) => {
    setSelectedImage(imageUrl); 
    setImages(prev => {
      const newImages = [...prev];
      const index = newImages.indexOf(imageUrl);
      newImages[index] = curentSelectedImageUrl;
      return newImages;
    });
  };
  return (
    <div className="flex flex-col items-start">
      <div className="relative w-[300px]">
        {/* Affichage de l'image principale du produit */}
        <Image
          src={selectedImage} 
          alt={product.name}
          width={300}
          height={product.category === "Pantalon" ? 500 : 300}
          className="w-auto h-auto object-contain"
          priority
        />
        <div className="w-12 h-1 mt-4 bg-accent ml-20"></div>
      </div>
      <h2 className="text-lg font-bold pl-20 mt-3 text-nowrap">{product.name}</h2>

      
    </div>
  );
}
 
  

    {/* mety tsisy devis
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import Image from "next/image";
  import clsx from "clsx";
  
  type CardImageProps = {
    selectedImage?: string;
    product: Product;
  };
  
  type Product = {
    _id: string;
    name: string;
    imageUrl: string;
    category: string;
    price: number;
    description: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  export default function MenuPtiBoutique() {
    const [categories, setCategories] = useState<any[]>([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState<null | string>(null);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
  
    const API_URL = "https://justride.up.railway.app/api/category-product";
    const PRODUCT_URL = "https://justride.up.railway.app/api/product/category";
  
    // État pour l'image sélectionnée
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          setLoadingCategories(true);
          const { data } = await axios.get(API_URL);
          setCategories(data);
          if (data.length > 0) {
            fetchProducts(data[0]._id);
          }
        } catch (error: any) {
          setError("Erreur lors du chargement des catégories");
        } finally {
          setLoadingCategories(false);
        }
      };
      fetchCategories();
    }, []);
  
    const fetchProducts = async (categoryId: string) => {
      try {
        setLoadingProducts(true);
        const { data } = await axios.get(`${PRODUCT_URL}/${categoryId}`);
        const filteredProducts = data.filter((product: any) => product.imageUrl); // Filtrer les produits sans image
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
    const currentProducts: any = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
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
              {currentProducts.length > 0 && (
                currentProducts.map((product: any, index: number) => (
                  <CardImage key={index} product={product} />
                ))
              )}
              {currentProducts.length === 0 && (
                <p className="text-gray-500 text-center mt-6">Aucun produit trouvé pour cette catégorie.</p>
              )}
            </div>
          </div>
        )}
  
        {/* Pagination 
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
  
  function CardImage({ product }: CardImageProps) {
    const [selectedImage, setSelectedImage] = useState<string>(product.imageUrl); 
    const [images, setImages] = useState<string[]>(['/images/boutique/casque17.png','/images/boutique/casque12.png','/images/boutique/casque11.png']);
  
    useEffect(() => {
      if (product.imageUrl) {
        setSelectedImage(product.imageUrl);
      }
    }, [product.imageUrl]);
  
    const handleImageClick = (imageUrl: string, currentSelectedImageUrl: string) => {
      setSelectedImage(imageUrl); 
      setImages(prev => {
        const newImages = [...prev];
        const index = newImages.indexOf(imageUrl);
        newImages[index] = currentSelectedImageUrl;
        return newImages;
      });
    };
  
    return (
      <div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center">
        <div className="relative w-[300px]">
          {/* Affichage de l'image principale du produit avec bordure fine 
          <Image
            src={selectedImage} 
            alt={product.name}
            width={300}
            height={product.category === "Pantalon" ? 500 : 300}
            className="w-auto h-auto object-contain"
            priority
          />
          {/* Titre sous l'image 
          <div className="mt-2 text-center">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <div className="w-12 h-1 mt-2 mx-auto bg-accent"></div>
          </div>
        </div>
  
        {/* Petites images sous chaque produit, ajustées à 1/2 de la taille 
        <div className="flex justify-between mt-4 space-x-2">
          {
            images.map(img => (
              <div key={img} className="w-1/3"> {/* Modifier la taille à 1/3 pour trois petites images 
                <Image
                  src={img}
                  alt={product.name}
                  width={50} 
                  height={50} 
                  className="w-full h-auto cursor-pointer"
                  onClick={() => handleImageClick(img, selectedImage)}
                  loading="lazy"
                />
              </div>
              
            ))
          }
        </div>
        
      </div>
    );
  }
  */}




  {/* 
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import clsx from "clsx";
import emailjs from "@emailjs/browser"; // Importation du package mis à jour

type CardImageProps = {
  selectedImage?: string;
  product: Product;
};

type Product = {
  _id: string;
  name: string;
  imageUrl: string;
  category: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export default function MenuPtiBoutique() {
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state pour gérer l'envoi

  const formRef = useRef<HTMLFormElement>(null); // Référence du formulaire

  const API_URL = "https://justride.up.railway.app/api/category-product";
  const PRODUCT_URL = "https://justride.up.railway.app/api/product/category";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const { data } = await axios.get(API_URL);
        setCategories(data);
        if (data.length > 0) {
          fetchProducts(data[0]._id);
        }
      } catch (error: any) {
        setError("Erreur lors du chargement des catégories");
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  const fetchProducts = async (categoryId: string) => {
    try {
      setLoadingProducts(true);
      const { data } = await axios.get(`${PRODUCT_URL}/${categoryId}`);
      const filteredProducts = data.filter((product: any) => product.imageUrl);
      setProducts(filteredProducts);
      setSelectedCategory(categoryId);
      setCurrentPage(1);
    } catch (error) {
      setError("Erreur lors du chargement des produits");
    } finally {
      setLoadingProducts(false);
    }
  };

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts: any = products.slice(indexOfFirstProduct, indexOfLastProduct);

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

  const handleRequestQuote = (product: Product) => {
    setSelectedProduct(product);
    setShowRequestForm(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    const form = formRef.current;
    try {
      await emailjs.sendForm(
        "service_uynssi5", // Remplacez par votre service_id
        "template_id2orp9", // Remplacez par votre template_id
        form,
        "m5HSHEwIFpginPQvC" // Remplacez par votre user_id
      );
      alert("Demande envoyée avec succès !");
      setShowRequestForm(false); // Ferme le formulaire après l'envoi
      setEmail(""); // Reset les champs
      setMessage("");
    } catch (error) {
      alert("Erreur lors de l'envoi de la demande de devis.");
    } finally {
      setLoading(false);
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
                  "font-bold underline decoration-[var(--color-accent)] decoration-2": selectedCategory === category._id,
                  "font-normal no-underline decoration-transparent decoration-0": selectedCategory !== category._id,
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
            {currentProducts.length > 0 && (
              currentProducts.map((product: any, index: number) => (
                <CardImage key={index} product={product} handleRequestQuote={handleRequestQuote} />
              ))
            )}
            {currentProducts.length === 0 && (
              <p className="text-gray-500 text-center mt-6">Aucun produit trouvé pour cette catégorie.</p>
            )}
          </div>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button onClick={prevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">Précédent</button>
          <span>Page {currentPage} sur {totalPages}</span>
          <button onClick={nextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">Suivant</button>
        </div>
      )}

      {/* ✅ Modal de demande de devis 
      {showRequestForm && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md">
            <h3 className="text-xl font-bold mb-4">Demander un devis pour {selectedProduct.name}</h3>
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 justify-between">
              {/* Formulaire 
              <form ref={formRef} onSubmit={handleFormSubmit} className="flex-1 space-y-4">
                <input type="text" name="from_name" placeholder="Votre nom" required className="w-full p-3 border rounded-lg" />
                <input type="email" name="from_email" placeholder="Votre email" required className="w-full p-3 border rounded-lg" />
                <input type="text" name="subject" placeholder="Sujet" required className="w-full p-3 border rounded-lg" />
                <textarea name="message" placeholder="Votre message" required className="w-full p-3 border rounded-lg h-32 resize-none" />

                <div className="w-full flex justify-end">
                  <button type="submit" className="mt-4 bg-accent text-white py-3 px-6 rounded-lg hover:bg-opacity-80" disabled={loading}>
                    {loading ? "Envoi..." : "ENVOYER"}
                  </button>
                </div>
                {message && <p className="text-center text-gray-600 mt-4">{message}</p>}
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function CardImage({ product, handleRequestQuote }: CardImageProps & { handleRequestQuote: (product: Product) => void }) {
  const [selectedImage, setSelectedImage] = useState<string>(product.imageUrl);
  const [images, setImages] = useState<string[]>(['/images/boutique/casque17.png', '/images/boutique/casque12.png', '/images/boutique/casque11.png']);

  useEffect(() => {
    if (product.imageUrl) {
      setSelectedImage(product.imageUrl);
    }
  }, [product.imageUrl]);

  return (
    <div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition duration-300">
      <div className="relative w-full h-60">
        <Image src={selectedImage} alt={product.name} layout="fill" objectFit="contain" className="rounded-md" />
      </div>
      <h3 className="font-semibold text-xl my-2">{product.name}</h3>

      {/* Affichage des 3 petites images 
      <div className="flex justify-center space-x-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="w-16 h-16 rounded-lg overflow-hidden cursor-pointer">
            <Image src={image} alt={`product-image-${index}`} layout="responsive" width={64} height={64} objectFit="cover" />
          </div>
        ))}
      </div>

      <button
        onClick={() => handleRequestQuote(product)}
        className="mt-4 px-3 py-1 bg-accent text-white rounded-md hover:bg-opacity-80"
      >
        Demander un devis
      </button>
    </div>
  );
}

*/}

