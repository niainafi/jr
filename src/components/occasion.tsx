"use client";

{
  /* 
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

*/
}

import Link from "next/link";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://justride.up.railway.app/api/moto-occasion";

export default function Occasion() {
  

  

  return (
    <section
    // className="p-6 md:p-10"
    >
      <h3 className="text-base md:text-xl xl:text-2xl font-bold text-gray-900 mt-5 mb-8 xl:mt-7 xl:mb-10">
        NOS OCCASIONS <span className="text-accent">100% VALIDÉES</span> PAR
        JUST RIDE
      </h3>
      <OccasionData />
      
    </section>
  );
}


function OccasionData(){
  const [ocas, setOcas] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("ocas", ocas);

  useEffect(() => {
    const fetchOcas = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setIsLoading(true);
        setOcas(data);
      } catch (error) {
        console.error("❌ Erreur de chargement :", error);
      }finally {
        setIsLoading(false);
      } 
    };

    fetchOcas();
  }, []);

  if(isLoading) {
    return (
      <div className="text-center text-gray-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {Array.from({ length: 3 }).map((_, index) => (
            <OccasionLoading key={index} />
          ))}
    </div>
    )
  }
  return(
    <>
      {/* Affichage des motos récupérées depuis l'API */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 mt-6">
        {ocas.length > 0 ? (
          ocas.map((moto, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shadow-lg rounded-sm h-[170px] xl:h-[240px]"
            >
              {moto.imageUrl && (
                <Image
                  src={moto.imageUrl}
                  alt={`${moto.marque} - ${moto.modèle}`}
                  width={400}
                  loading="lazy"
                  objectFit="cover"
                  objectPosition="center"
                  height={180} // Hauteur augmentée
                  className="w-full object-cover h-full"
                  // className="w-full h-[400px] sm:h-[400px] object-contain transition-transform duration-300 group-hover:scale-110"
                />
              )}

              <div className="absolute inset-0 bg-yellow-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Contenu qui reste opaque */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-10 mt-5">
                <div className="flex flex-col w-full h-full p-6">
                <h3 className="text-sm lg:text-base font-bold">
                  {moto.marque} {moto.modèle}
                </h3>
                <p className="text-xs lg:text-sm mt-2">
                  <strong>Année :</strong> {moto.annee}
                </p>
                <p className="text-xs lg:text-sm">
                  <strong>Prix :</strong> {moto.prix.toLocaleString("fr-MG")} AR
                </p>
                <p className="text-xs lg:text-sm">
                  <strong>Kilométrage :</strong> {moto.kilometrage} KM
                </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Aucune occasion disponible.
          </p>
        )}
      </div>

      {/* Bouton Voir Plus */}
      {/* <div className="mt-6 flex justify-center md:justify-end">
        <Link
          href="/occasions"
          className="bg-accent text-black font-bold rounded-full px-2 py-1 h-5 flex items-center space-x-2"
        >
          Voir plus »»»
        </Link>
      </div> */}
    </>
  )
}


function OccasionLoading(){
  return (
    <div className="flex flex-col  animate-pulse gap-3">
    <div className="w-full h-44 bg-gray-200"></div>
    
  </div>
  )
}