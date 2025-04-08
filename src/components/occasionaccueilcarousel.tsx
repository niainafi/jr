"use client";
 {/*import Link from "next/link";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://justride.up.railway.app/api/moto-occasion";

export default function OccasionAccueilCarousel() {
  return (
    <section
    // className="p-6 md:p-10"
    >
         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mt-5">
        NOS OCCASIONS <span className="text-accent">100% VALIDÉES</span> PAR JUST RIDE
      </h2>
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
      {/* Affichage des motos récupérées depuis l'API   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 mt-6">
        {ocas.length > 0 ? (
          ocas.map((moto, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shadow-lg rounded-sm h-[500px] xl:h-[400px]"
            >
              {moto.imageUrl && (
                <Image
                  src={moto.imageUrl}
                  alt={`${moto.marque} - ${moto.modèle}`}
                  width={400}
                  loading="lazy"
                  height={600}
                  className="w-full object-cover h-full"
                  // className="w-full h-[400px] sm:h-[400px] object-contain transition-transform duration-300 group-hover:scale-110"
                />
              )}

              <div className="absolute inset-0 bg-yellow-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Contenu qui reste opaque   
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
  <strong>Kilométrage :</strong> {new Intl.NumberFormat('fr-FR', { useGrouping: true }).format(moto.kilometrage)} KM
</p>

                {/* Affichage du statut Vendu/Disponible   
                <p className="mt-3 flex justify-center items-center space-x-2">
                    <span className="text-red-500 font-bold">
                      {moto.vendu ? "" : ""}
                    </span>
                    {moto.vendu ? (
                      <Image
                        src="/images/boutique/vendu.png"
                        alt="Vendu"
                        width={100} // Adjust the size as needed
                        height={100} // Adjust the size as needed
                        className="inline-block ml-2"
                      />
                    ) : (
                      <Image
                        src="/images/boutique/dispo.png"
                        alt="Disponible"
                        width={0} // Adjust the size as needed
                        height={0} // Adjust the size as needed
                        className="inline-block ml-2"
                      />
                    )}
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
*/}
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import '@/styles/swipper.css'; // Si tu as un fichier personnalisé pour Swiper

const API_URL = "https://justride.up.railway.app/api/moto-occasion";

export default function OccasionAccueilCarousel() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mt-5">
        NOS OCCASIONS <span className="text-accent">100% VALIDÉES</span> PAR JUST RIDE
      </h2>
      <OccasionData />
    </section>
  );
}

function OccasionData() {
  const [ocas, setOcas] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOcas = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setIsLoading(true);
        setOcas(data);
      } catch (error) {
        console.error("❌ Erreur de chargement :", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOcas();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center text-gray-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <OccasionLoading key={index} />
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Affichage des motos récupérées depuis l'API */}
      <div className="sm:hidden">
        {/* Version mobile : Carousel */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {ocas.map((moto, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden shadow-lg rounded-sm h-[500px] xl:h-[400px]">
                {moto.imageUrl && (
                  <Image
                    src={moto.imageUrl}
                    alt={`${moto.marque} - ${moto.modèle}`}
                    width={400}
                    loading="lazy"
                    height={600}
                    className="w-full object-cover h-full"
                  />
                )}
                <div className="absolute inset-0 bg-yellow-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                      <strong>Kilométrage :</strong> {new Intl.NumberFormat('fr-FR', { useGrouping: true }).format(moto.kilometrage)} KM
                    </p>
                  </div>
                </div>
                {/* Affichage du statut Vendu */}
                <div className="absolute inset-0 flex justify-center items-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {moto.vendu && (
                    <p className="text-red-500 font-bold">
                      <Image
                        src="/images/boutique/vendu.png"
                        alt="Vendu"
                        width={100}
                        height={100}
                        className="inline-block ml-2"
                      />
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 mt-6">
        {/* Version desktop : Grille */}
        {ocas.map((moto, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-lg rounded-sm h-[500px] xl:h-[400px]"
          >
            {moto.imageUrl && (
              <Image
                src={moto.imageUrl}
                alt={`${moto.marque} - ${moto.modèle}`}
                width={400}
                loading="lazy"
                height={600}
                className="w-full object-cover h-full"
              />
            )}
            <div className="absolute inset-0 bg-yellow-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  <strong>Kilométrage :</strong> {new Intl.NumberFormat('fr-FR', { useGrouping: true }).format(moto.kilometrage)} KM
                </p>
              </div>
            </div>
            {/* Affichage du statut Vendu seulement */}
            <div className="absolute inset-0 flex justify-center items-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {moto.vendu && (
                <p className="text-red-500 font-bold">
                  <Image
                    src="/images/boutique/vendu.png"
                    alt="Vendu"
                    width={100}
                    height={100}
                    className="inline-block ml-2"
                  />
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function OccasionLoading() {
  return (
    <div className="flex flex-col animate-pulse gap-3">
      <div className="w-full h-44 bg-gray-200"></div>
    </div>
  );
}
