 "use client";
{/*
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
        {/* Affichage de l'image principale du produit product.category === "Blouson" ? 500 : 
        <Image
          src={selectedImage} 
          alt={product.name}
          width={300}
          height={300} 
          className="w-[350px] h-[300px] object-contain"
          
          priority
          
        />
        <div className="w-12 h-1 mt-4 bg-accent ml-20"></div>
      </div>
      <h2 className="text-lg font-bold pl-20 mt-3 text-nowrap">{product.name}</h2>

      
    </div>
  );
}
*/}
  

  


{/*
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import emailjs from "@emailjs/browser";

type CardImageProps = {
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
  additionalImages?: string[];
  extraImages?: string[]; // Ajout de extraImages
};

export default function MenuPtiBoutique() {
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() =>{
    console.log("product cd:",products)
  },[products])

  const API_URL = "https://justride.up.railway.app/api/category-product";
  const PRODUCT_URL = "https://justride.up.railway.app/api/product/category";

  const ITEMS_PER_PAGE = 6;

  // État pour les catégories
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

  // Récupérer les produits pour une catégorie spécifique
  const fetchProducts = async (categoryId: string) => {
    try {
      setLoadingProducts(true);
      const { data } = await axios.get(`${PRODUCT_URL}/${categoryId}`);
      const filteredProducts = data.filter((product: any) => product.imageUrl); // Filtrer les produits sans image
      // Ajouter les extraImages au produit
      const updatedProducts = filteredProducts.map((product: any) => ({
        ...product,
        extraImages: product.extraImages || [], // Assure-toi que le champ existe
      }));

      setProducts(updatedProducts); // Utiliser updatedProducts au lieu de filteredProducts
      setSelectedCategory(categoryId);
      setCurrentPage(1); // Reset page when category is changed
    } catch (error) {
      setError("Erreur lors du chargement des produits");
    } finally {
      setLoadingProducts(false);
    }
  };

  // Gestion de la pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Récupérer les produits pour la page actuelle
  const currentProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="mt-5 px-4 sm:px-6 md:px-10 lg:px-24 mb-32">
      {error && <p className="text-red-500 text-center">{error}</p>}
      {loadingCategories && <p className="text-gray-500 text-center">Chargement des catégories...</p>}

      {!loadingCategories && categories.length > 0 && (
        
        <ul className="flex overflow-x-auto justify-center items-center xl:justify-start xl:items-start 2xl:justify-center 2xl:items-center 2xl:px-0  gap-4 sm:gap-6 mt-6 sm:mt-8 sm:pb-0" >
          {categories.map((category) => (
            <li
              key={category._id}
              onClick={() => fetchProducts(category._id)}
              className="text-center text-lg cursor-pointer underline-offset-4 whitespace-nowrap px-3 transition-all duration-300"
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
            {currentProducts.length > 0 && currentProducts.map((product) => (
              <CardImage key={product._id} product={product} />
            ))}
            {currentProducts.length === 0 && (
              <p className="text-gray-500 text-center mt-6"></p>
            )}
          </div>
        </div>
      )}

      {/* Pagination 
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
          disabled={currentPage * ITEMS_PER_PAGE >= products.length}
          className="px-4 py-2 bg-gray-300 rounded-md mx-2"
        >
          Suivant
        </button>
      </div>
    </section>
  );
}

function CardImage({ product }: CardImageProps) {
  const [selectedImage, setSelectedImage] = useState<string>(product.imageUrl);
  const [images, setImages] = useState<string[]>(product.additionalImages || []);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log("Product:", product);

  useEffect(() => {
    if (product.imageUrl) {
      setSelectedImage(product.imageUrl);
    }
    if (product.extraImages && product.extraImages.length > 0) {
      setImages(product.extraImages);
    }
  }, [product.imageUrl, product.extraImages]);

  // const handleImageClick = (imageUrl: string,selectedImage) => {
  //   setSelectedImage(imageUrl);
  // };
  const handleImageClick = (imageUrl: string,curentSelectedImageUrl: string) => {
    
    setSelectedImage(imageUrl); 
    setImages(prev => {
      const newImages = [...prev];
      const index = newImages.indexOf(imageUrl);
      newImages[index] = curentSelectedImageUrl;
      return newImages;
    });
  }
  useEffect(() =>{
    console.log("selecetedimages: ",selectedImage)
    console.log("images",images)
  },[selectedImage,images])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_uynssi5",
        "template_id2orp9",
        {
          to_name: "Just Ride Academy",
          from_email: email,
          message: `Demande de devis pour ${product.name}`,
        },
        "m5HSHEwIFpginPQvC"
      );

      alert("✅ Demande envoyée avec succès !");
      setShowModal(false);
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi :", error);
      alert("❌ Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="border w-full md:w-[300px] pb-4  border-gray-300 rounded-lg flex flex-col items-center">
      <div className="relative w-full group flex justify-center">
        {/*
        <Image
          src={selectedImage}
          alt={product.name}
          width={300}
          height={300}
          className="w-[250px] h-[250px] md:w-[350px] md:h-[300px] object-contain"
          priority
        />
      


        <Image
          src={selectedImage}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-auto md:w-[350px] md:h-[300px] object-contain"
          priority
        />

        <div className="absolute  inset-0 z-0 bg-accent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute p-4 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm">
          {product.description}
          </p>
        </div>
        </div>
        <div className="mt-2 text-center">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <div className="w-12 h-1 mt-2 mx-auto bg-accent"></div>
        </div>
      
 {/*
      <div className="flex justify-between mt-4 space-x-2">
        {images.length > 0 ? (
          images.map((img, index) => (
            <div key={index} className="w-[30%]">
              <Image
                src={img}
                alt={`Image ${index + 1} de ${product.name}`}
                width={50}
                height={50}
                className="w-full h-auto cursor-pointer"
                onClick={() => handleImageClick(img,selectedImage)}
                loading="lazy"
              />
            </div>
          ))
        ) :(
          <div className="min-h-[3.85rem]">

          </div>
        )} 
       
      </div>



        <div className="flex justify-between mt-4 space-x-2">
        {images.length > 0 ? (
          images.map((img, index) => (
            <div key={index} className="w-[30%]">
              <Image
                src={img}
                alt={`Image ${index + 1} de ${product.name}`}
                width={230}  
                height={230} 
                className="w-full h-full object-cover cursor-pointer" 
                onClick={() => handleImageClick(img, selectedImage)}
                loading="lazy"
              />
            </div>
          ))
        ) : (
          <div className="min-h-[3.85rem]"></div>
        )}
      </div>






      {/* Bouton de réservation 
      <button
        className="ml-auto mx-auto border border-accent bg-accent text-white h-10 px-6 rounded-md flex items-center justify-center text-xs mt-4"
        onClick={() => setShowModal(true)}
      >
        <span className="font-bold uppercase">Demander un devis</span>
      </button>

      {/* ✅ Modal de réservation 
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md">
            <h3 className="text-xl font-bold mb-4">Demande de devis pour {product.name}</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 border rounded-md w-full"
              />
              <textarea
                placeholder="Votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="p-2 border rounded-md w-full h-24 resize-none"
              />

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Annuler
                </button>
                <button type="submit" className="px-4 py-2 bg-accent text-white rounded-md">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
*/}



{/*

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import emailjs from "@emailjs/browser";

type CardImageProps = {
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
  additionalImages?: string[];
  extraImages?: string[]; // Ajout de extraImages
  date?: string;
};

export default function MenuPtiBoutique() {
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() =>{
    console.log("product cd:",products)
  },[products])

  const API_URL = "https://justride.up.railway.app/api/category-product";
  const PRODUCT_URL = "https://justride.up.railway.app/api/product/category";

  const ITEMS_PER_PAGE = 6;




  
  // État pour les catégories
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

  // Récupérer les produits pour une catégorie spécifique
  const fetchProducts = async (categoryId: string) => {
    try {
      setLoadingProducts(true);
      const { data } = await axios.get(`${PRODUCT_URL}/${categoryId}`);
      console.log("Data reçue:", data); // Vérification de la structure des données

      const filteredProducts = data.filter((product: any) => product.imageUrl); // Filtrer les produits sans image
      // Ajouter les extraImages au produit
      const updatedProducts = filteredProducts.map((product: any) => ({
        ...product,
        extraImages: product.extraImages || [], // Assure-toi que le champ existe
      }));

   

      const sortedProducts = updatedProducts.sort((a: any, b: any) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA; // Tri décroissant par date
      });



      setProducts(updatedProducts); // Utiliser updatedProducts au lieu de filteredProducts
      setSelectedCategory(categoryId);
      setCurrentPage(1); // Reset page when category is changed
    } catch (error) {
      setError("Erreur lors du chargement des produits");
    } finally {
      setLoadingProducts(false);
    }
  };

  // Gestion de la pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Récupérer les produits pour la page actuelle
  const currentProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="mt-5 px-4 sm:px-6 md:px-10 lg:px-24 mb-32">
      {error && <p className="text-red-500 text-center">{error}</p>}
      {loadingCategories && <p className="text-gray-500 text-center">Chargement des catégories...</p>}

      {!loadingCategories && categories.length > 0 && (
        
        <ul className="flex overflow-x-auto justify-center items-center xl:justify-start xl:items-start 2xl:justify-center 2xl:items-center 2xl:px-0  gap-4 sm:gap-6 mt-6 sm:mt-8 sm:pb-0" >
          {categories.map((category) => (
            <li
              key={category._id}
              onClick={() => fetchProducts(category._id)}
              className="text-center text-lg cursor-pointer underline-offset-4 whitespace-nowrap px-3 transition-all duration-300"
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
            {currentProducts.length > 0 && currentProducts.map((product) => (
              <CardImage key={product._id} product={product} />
            ))}
            {currentProducts.length === 0 && (
              <p className="text-gray-500 text-center mt-6"></p>
            )}
          </div>
        </div>
      )}

      {/* Pagination 
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
          disabled={currentPage * ITEMS_PER_PAGE >= products.length}
          className="px-4 py-2 bg-gray-300 rounded-md mx-2"
        >
          Suivant
        </button>
      </div>
    </section>
  );
}

function CardImage({ product }: CardImageProps) {
  const [selectedImage, setSelectedImage] = useState<string>(product.imageUrl);
  const [images, setImages] = useState<string[]>(product.additionalImages || []);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log("Product:", product);

  useEffect(() => {
    if (product.imageUrl) {
      setSelectedImage(product.imageUrl);
    }
    if (product.extraImages && product.extraImages.length > 0) {
      setImages(product.extraImages);
    }
  }, [product.imageUrl, product.extraImages]);

  // const handleImageClick = (imageUrl: string,selectedImage) => {
  //   setSelectedImage(imageUrl);
  // };
  const handleImageClick = (imageUrl: string,curentSelectedImageUrl: string) => {
    
    setSelectedImage(imageUrl); 
    setImages(prev => {
      const newImages = [...prev];
      const index = newImages.indexOf(imageUrl);
      newImages[index] = curentSelectedImageUrl;
      return newImages;
    });
  }
  useEffect(() =>{
    console.log("selecetedimages: ",selectedImage)
    console.log("images",images)
  },[selectedImage,images])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_uynssi5",
        "template_id2orp9",
        {
          to_name: "Just Ride Academy",
          from_email: email,
          message: `Demande de devis pour ${product.name}`,
        },
        "m5HSHEwIFpginPQvC"
      );

      alert("✅ Demande envoyée avec succès !");
      setShowModal(false);
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi :", error);
      alert("❌ Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="border w-full md:w-[300px] pb-4  border-gray-300 rounded-lg flex flex-col items-center">
      <div className="relative w-full group flex justify-center">
        {/*
        <Image
          src={selectedImage}
          alt={product.name}
          width={300}
          height={300}
          className="w-[250px] h-[250px] md:w-[350px] md:h-[300px] object-contain"
          priority
        />
     


        <Image
          src={selectedImage}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-auto md:w-[350px] md:h-[300px] object-contain"
          priority
        />

        <div className="absolute  inset-0 z-0 bg-accent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute p-4 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm">
          {product.description}
          </p>
        </div>
        </div>
        <div className="mt-2 text-center">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <div className="w-12 h-1 mt-2 mx-auto bg-accent"></div>
        </div>
      
 {/*
      <div className="flex justify-between mt-4 space-x-2">
        {images.length > 0 ? (
          images.map((img, index) => (
            <div key={index} className="w-[30%]">
              <Image
                src={img}
                alt={`Image ${index + 1} de ${product.name}`}
                width={50}
                height={50}
                className="w-full h-auto cursor-pointer"
                onClick={() => handleImageClick(img,selectedImage)}
                loading="lazy"
              />
            </div>
          ))
        ) :(
          <div className="min-h-[3.85rem]">

          </div>
        )} 
       
      </div>



        <div className="flex justify-between mt-4 space-x-2">
        {images.length > 0 ? (
          images.map((img, index) => (
            <div key={index} className="w-[30%]">
              <Image
                src={img}
                alt={`Image ${index + 1} de ${product.name}`}
                width={230}  
                height={230} 
                className="w-full h-full object-cover cursor-pointer" 
                onClick={() => handleImageClick(img, selectedImage)}
                loading="lazy"
              />
            </div>
          ))
        ) : (
          <div className="min-h-[3.85rem]"></div>
        )}
      </div>






      {/* Bouton de réservation
      <button
        className="ml-auto mx-auto border border-accent bg-accent text-white h-10 px-6 rounded-md flex items-center justify-center text-xs mt-4"
        onClick={() => setShowModal(true)}
      >
        <span className="font-bold uppercase">Demander un devis</span>
      </button>

      {/* ✅ Modal de réservation 
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md">
            <h3 className="text-xl font-bold mb-4">Demande de devis pour {product.name}</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 border rounded-md w-full"
              />
              <textarea
                placeholder="Votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="p-2 border rounded-md w-full h-24 resize-none"
              />

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Annuler
                </button>
                <button type="submit" className="px-4 py-2 bg-accent text-white rounded-md">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}*/}













import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import emailjs from "@emailjs/browser";

type CardImageProps = {
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
  additionalImages?: string[];
  extraImages?: string[];
  date?: string; // Ajout du champ date
};

export default function MenuPtiBoutique() {
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log("product cd:", products);
  }, [products]);

  const API_URL = "https://justride.up.railway.app/api/category-product";
  const PRODUCT_URL = "https://justride.up.railway.app/api/product/category";

  const ITEMS_PER_PAGE = 6;

  // État pour les catégories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const { data } = await axios.get(API_URL);
        // Tri des catégories par date (du plus récent au plus ancien)
        const sortedCategories = data.sort((a: any, b: any) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        });
        setCategories(sortedCategories);
        if (sortedCategories.length > 0) {
          fetchProducts(sortedCategories[0]._id);
        }
      } catch (error: any) {
        setError("Erreur lors du chargement des catégories");
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  // Récupérer les produits pour une catégorie spécifique
  const fetchProducts = async (categoryId: string) => {
    try {
      setLoadingProducts(true);
      const { data } = await axios.get(`${PRODUCT_URL}/${categoryId}`);
      console.log("Data reçue:", data);

      const filteredProducts = data.filter((product: any) => product.imageUrl);
      const updatedProducts = filteredProducts.map((product: any) => ({
        ...product,
        extraImages: product.extraImages || [],
      }));

      // Tri des produits par date (du plus récent au plus ancien)
      const sortedProducts = updatedProducts.sort((a: Product, b: Product) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA;
      });

      setProducts(sortedProducts);
      setSelectedCategory(categoryId);
      setCurrentPage(1);
    } catch (error) {
      setError("Erreur lors du chargement des produits");
    } finally {
      setLoadingProducts(false);
    }
  };

  // Gestion de la pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Récupérer les produits pour la page actuelle
  const currentProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="mt-5 px-4 sm:px-6 md:px-10 lg:px-24 mb-32">
      {error && <p className="text-red-500 text-center">{error}</p>}
      {loadingCategories && (
        <p className="text-gray-500 text-center">Chargement des catégories...</p>
      )}

      {!loadingCategories && categories.length > 0 && (
        <ul className="flex overflow-x-auto justify-center items-center xl:justify-start xl:items-start 2xl:justify-center 2xl:items-center 2xl:px-0 gap-4 sm:gap-6 mt-6 sm:mt-8 sm:pb-0">
          {categories.map((category) => (
            <li
              key={category._id}
              onClick={() => fetchProducts(category._id)}
              className={`text-center text-lg cursor-pointer underline-offset-4 whitespace-nowrap px-3 transition-all duration-300 ${
                selectedCategory === category._id ? "font-bold underline" : ""
              }`}
            >
              {category.name}
            </li>
          ))}
        </ul>
      )}

      {loadingProducts && (
        <p className="text-gray-500 text-center mt-6">Chargement des produits...</p>
      )}

      {!loadingProducts && (
        <div className="flex justify-center items-start min-h-screen mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12 w-full max-w-screen-xl">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <CardImage key={product._id} product={product} />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-3">
                Aucun produit disponible dans cette catégorie.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Pagination */}
      {products.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded-md mx-2 disabled:opacity-50"
          >
            Précédent
          </button>
          <span className="px-4 py-2">
            Page {currentPage} sur {Math.ceil(products.length / ITEMS_PER_PAGE)}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage * ITEMS_PER_PAGE >= products.length}
            className="px-4 py-2 bg-gray-300 rounded-md mx-2 disabled:opacity-50"
          >
            Suivant
          </button>
        </div>
      )}
    </section>
  );
}

function CardImage({ product }: CardImageProps) {
  const [selectedImage, setSelectedImage] = useState<string>(product.imageUrl);
  const [images, setImages] = useState<string[]>(product.additionalImages || []);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (product.imageUrl) {
      setSelectedImage(product.imageUrl);
    }
    if (product.extraImages && product.extraImages.length > 0) {
      setImages(product.extraImages);
    }
  }, [product.imageUrl, product.extraImages]);

  const handleImageClick = (imageUrl: string, currentSelectedImageUrl: string) => {
    setSelectedImage(imageUrl);
    setImages((prev) => {
      const newImages = [...prev];
      const index = newImages.indexOf(imageUrl);
      newImages[index] = currentSelectedImageUrl;
      return newImages;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_uynssi5",
        "template_id2orp9",
        {
          to_name: "Just Ride Academy",
          from_email: email,
          message: `Demande de devis pour ${product.name}`,
        },
        "m5HSHEwIFpginPQvC"
      );

      alert("✅ Demande envoyée avec succès !");
      setShowModal(false);
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi :", error);
      alert("❌ Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="border w-full md:w-[300px] pb-4 border-gray-300 rounded-lg flex flex-col items-center">
      <div className="relative w-full group flex justify-center">
        <Image
          src={selectedImage}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-auto md:w-[350px] md:h-[300px] object-contain"
          priority
        />

        <div className="absolute inset-0 z-0 bg-accent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute p-4 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm">{product.description}</p>
        </div>
      </div>
      <div className="mt-2 text-center">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <div className="w-12 h-1 mt-2 mx-auto bg-accent"></div>
      </div>

      <div className="flex justify-between mt-4 space-x-2">
        {images.length > 0 ? (
          images.map((img, index) => (
            <div key={index} className="w-[30%]">
              <Image
                src={img}
                alt={`Image ${index + 1} de ${product.name}`}
                width={230}
                height={230}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => handleImageClick(img, selectedImage)}
                loading="lazy"
              />
            </div>
          ))
        ) : (
          <div className="min-h-[3.85rem]"></div>
        )}
      </div>

      <button
        className="ml-auto mx-auto border border-accent bg-accent text-white h-10 px-6 rounded-md flex items-center justify-center text-xs mt-4"
        onClick={() => setShowModal(true)}
      >
        <span className="font-bold uppercase">Demander un devis</span>
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md">
            <h3 className="text-xl font-bold mb-4">
              Demande de devis pour {product.name}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 border rounded-md w-full"
              />
              <textarea
                placeholder="Votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="p-2 border rounded-md w-full h-24 resize-none"
              />

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-accent text-white rounded-md"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}












  