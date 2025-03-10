"use client";      
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://justride.up.railway.app/api/moto-occasion"; 


export default function Occasion() {
  const [ocas, setOcas] = useState<any[]>([]); // Initialisation du state

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

  return (
    <section className="p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
        NOS OCCASIONS <span className="text-accent">100% VALIDÉES</span> PAR JUST RIDE
      </h2>

      {/* Affichage des motos récupérées depuis l'API */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
        {ocas.length > 0 ? (
          ocas.map((moto, index) => (
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
                <p><strong>Prix :</strong> {moto.prix}  AR</p>
                <p className="text-sm"><strong>Kilométrage :</strong> {moto.kilométrage} 20 000 KM</p>
                <p className="text-sm"><strong>Description :</strong> {moto.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="text-lg font-bold mt-4">
                 
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Aucune occasion disponible.</p>
        )}
      </div>

      {/* Bouton Voir Plus */}
      <div className="mt-6 flex justify-center md:justify-end">
        <a href="#" className="bg-accent text-black font-bold rounded-full px-6 py-2 flex items-center space-x-2">
          Voir plus »»»
        </a>
      </div>
    </section>
  );
}
