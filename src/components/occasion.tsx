"use client";

{/* 
import Image from 'next/image';
import { getOcas } from '@/actions/ocas';
const motos = [
  { src: '/images/photos/moto.jpg', alt: 'Moto 1', title: 'ROYAL ENFIELD - CLASSIC 500', description: '20 000 KM\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: '10 000 000 AR' },
  { src: '/images/photos/ride.jpg', alt: 'Moto 2', title: 'HARLEY DAVIDSON', description: '15 000 KM\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', price: '12 500 000 AR' },
  { src: '/images/photos/ride1.jpg', alt: 'Moto 3', title: 'BMW R NINET', description: '10 000 KM\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.', price: '9 800 000 AR' },

 
];

export default async function Occasion() {
  const ocas = await getOcas()
  return (
    <section className="p-6 md:p-10">
       <div>
       {ocas && ocas.length > 0 && (
          ocas.map(((actu : any,index : number) => (
            <div key={index}>
              <h2>{actu.marque} - {actu.modèle}</h2>
              <p><strong>Année :</strong> {actu.année}</p>
              <p><strong>Prix :</strong> {actu.prix} €</p>
              <p><strong>Kilométrage :</strong> {actu.kilométrage} km</p>
              <p><strong>Description :</strong> {actu.description}</p>
            </div>
          )))
        )}
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
        NOS OCCASIONS <span className="text-accent">100% VALIDÉES</span> PAR JUST RIDE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
        {motos.map((moto, index) => (
          <div key={index} className="relative group overflow-hidden shadow-lg rounded-lg">
            <Image
              src={moto.src}
              alt={moto.alt}
              width={400}
              height={300}
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-accent bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white text-center">
              <h3 className="text-lg font-bold">{moto.title}</h3>
              <p className="text-sm mt-2">{moto.description}</p>
              <p className="text-lg font-bold mt-4">{moto.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center md:justify-end">
        <a href="#" className="bg-accent text-black font-bold rounded-full px-6 py-2 flex items-center space-x-2">
          Voir plus »»»
        </a>
      </div>
    </section>
  );
}

*/}

import Link from "next/link";
         
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://justride.up.railway.app/api/moto-occasion"; 


export default function Occasion() {
  const [ocas, setOcas] = useState<any[]>([]); 
  
  console.log("ocas", ocas);

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
                  loading="lazy"
                  height={400} // Hauteur augmentée
                  className="w-full h-96 sm:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"

                />
              )}
              <div className="absolute inset-0 bg-accent bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white text-center">
                <h3 className="text-lg font-bold">{moto.marque} {moto.modèle}</h3>
                <p className="text-sm mt-2"><strong>Année :</strong> {moto.année}</p>
                <p><strong>Prix :</strong> {moto.prix}  AR</p>
                <p className="text-sm"><strong>Kilométrage :</strong> {moto.kilométrage} 20 000 KM</p>
               
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
        <Link href="/occasions" className="bg-accent text-black font-bold rounded-full px-6 py-2 flex items-center space-x-2">
          Voir plus »»»
        </Link>
      </div>
    </section>
  );
}
