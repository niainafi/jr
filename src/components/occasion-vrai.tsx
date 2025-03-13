"use client";
{/* 6photo afficher avec pagination */}
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://justride.up.railway.app/api/moto-occasion"; 
const ITEMS_PER_PAGE = 6; // 6 motos par page

export default function Occasion() {
  const [ocas, setOcas] = useState<any[]>([]); // Initialisation du state
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchOcas = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setOcas(data);
      } catch (error) {
        console.error("❌ Erreur de chargement :", error);
      }
    };

    fetchOcas();
  }, []);
 // Gestion de la pagination
 const totalPages = Math.ceil(ocas.length / ITEMS_PER_PAGE);
 const currentOcas = ocas.slice(
   (currentPage - 1) * ITEMS_PER_PAGE, 
   currentPage * ITEMS_PER_PAGE
 );

  return (
    <section className="p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
        NOS OCCASIONS <span className="text-accent">100% VALIDÉES</span> PAR JUST RIDE
      </h2>

      {/* Affichage des motos récupérées depuis l'API */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
      {currentOcas.length > 0 ? (
          currentOcas.map((moto, index) => (
            <div key={index} className="relative group overflow-hidden shadow-lg rounded-lg">
              {moto.imageUrl && (
                <Image
                  src={moto.imageUrl}
                  alt={`${moto.marque} - ${moto.modèle}`}
                  width={400}
                  height={400} // Hauteur augmentée
                  className="w-full h-96 sm:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"

                />
              )}
              <div className="absolute inset-0 bg-accent bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white text-center">
                <h3 className="text-lg font-bold">{moto.marque} {moto.modèle}ROYAL ENFIELD - CLASSIC 500</h3>
                <p className="text-sm mt-2"><strong>Année :</strong> {moto.année} 2019</p>
                <p><strong>Prix :</strong> {Number(moto.prix).toLocaleString("mg-MG")} Ar</p>
                <p className="text-sm"><strong>Kilométrage :</strong> {moto.kilométrage} 20 000 KM</p>
                <p className="text-sm"><strong>Description :</strong> {moto.description}</p>
                <p className="text-lg font-bold mt-4">
                 
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Aucune occasion disponible.</p>
        )}
      </div>
        {/* PAGINATION */}

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          {/* Bouton "Précédent"*/}
          <button 
            className={`px-4 py-2 text-sm font-bold rounded-md ${
              currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-accent text-black"
            }`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ← Précédent
          </button>

          {/* Numéros des pages */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 text-sm font-bold rounded-md ${
                currentPage === i + 1 ? "bg-black text-white" : "bg-gray-200 text-black"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          {/* Bouton "Suivant" */}
          <button 
            className={`px-4 py-2 text-sm font-bold rounded-md ${
              currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-accent text-black"
            }`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Suivant →
          </button>
        </div>
      )}
      
    </section>
  );
}


       {/*  
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://justride.up.railway.app/api/moto-occasion"; 
const ITEMS_PER_PAGE = 6; // 6 motos par page

export default function Occasion() {
  const [ocas, setOcas] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchOcas = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setOcas(data);
      } catch (error) {
        console.error("❌ Erreur de chargement :", error);
      }
    };

    fetchOcas();
  }, []);

  // Gestion de la pagination
  const totalPages = Math.ceil(ocas.length / ITEMS_PER_PAGE);
  const currentOcas = ocas.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, 
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
        NOS OCCASIONS <span className="text-accent">100% VALIDÉES</span> PAR JUST RIDE
      </h2>

      {/* Affichage des motos récupérées depuis l'API 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
        {currentOcas.length > 0 ? (
          currentOcas.map((moto, index) => (
            <div key={index} className="relative group overflow-hidden shadow-lg rounded-lg">
              {moto.imageUrl && (
                <Image
                  src={moto.imageUrl}
                  alt={`${moto.marque} - ${moto.modèle}`}
                  width={400}
                  height={400}
                  className="w-full h-96 sm:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              )}
              
              <div className="absolute inset-0 bg-accent bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white text-center">
                <h3 className="text-lg font-bold">{moto.marque} {moto.modèle}</h3>
                <p className="text-sm mt-2"><strong>Année :</strong> {moto.année}</p>
                <p><strong>Prix :</strong> {moto.prix} AR</p>
                <p className="text-sm"><strong>Kilométrage :</strong> {moto.kilométrage} KM</p>
                <p className="text-sm"><strong>Description :</strong> {moto.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Aucune occasion disponible.</p>
        )}
      </div>

      {/* PAGINATION 
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          {/* Bouton "Précédent"
          <button 
            className={`px-4 py-2 text-sm font-bold rounded-md ${
              currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-accent text-black"
            }`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ← Précédent
          </button>

          {/* Numéros des pages 
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 text-sm font-bold rounded-md ${
                currentPage === i + 1 ? "bg-black text-white" : "bg-gray-200 text-black"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          {/* Bouton "Suivant" 
          <button 
            className={`px-4 py-2 text-sm font-bold rounded-md ${
              currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-accent text-black"
            }`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Suivant →
          </button>
        </div>
      )}
    </section>
  );
}
*/}
