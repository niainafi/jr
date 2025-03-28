"use client";
{/* SANS API
import Container from "./container";
import Image from "next/image";



const articles = [
  {
    title: 'A LA UNE',
    image: "/images/photos/actu.jpg", 
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    title: "ACTU LOCALE",
    image: "/images/photos/chutes-de-la-lily-ampefy-madagas.jpg", 
    content:
      "Lorem ipsum d dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    title: "ACTU INTERNATIONALE",
    image: "/images/photos/ride.jpg", 
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  
];


export default async function ActualitesReportages() {

  
  return (
    <section className="pb-12 bg-white text-gray-800">
      
   
      <Container className="lg:-mt-24">
      {/* Titre 
      <h2 className="relative  text-2xl md:text-3xl font-bold text-center uppercase mb-12 flex flex-row w-full justify-center gap-1">
        <span>Actualités</span>
        <span className="text-accent absolute">
          <Image 
            src='/images/actualite/and.webp' 
            className="" 
            alt='actualtite &' 
            width={40}
            height={40}
            />
        </span>
        <span>Reportages</span>
      </h2>

      {/* Grid des articles 
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {articles.map((article, index) => (
          <div key={index} className="p-1"> {/* Suppression des ombres et bordures */}
            {/* Image sans bordure ni arrondi 
            <div className="relative w-full h-64">
              <Image
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-full"
                fill
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 font-bold text-lg uppercase">{article.title}</h3>
            <div className="w-16 h-1 bg-accent my-2"></div>
            <p className="text-sm text-gray-600 text-justify text-ellipsis line-clamp-3">{article.content}</p>
            <a href="#" className="mt-4 text-sm font-semibold text-gray-700 hover:text-accent flex justify-end">
              Voir la suite »»»
            </a>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
}
*/}


import Image from "next/image";
import { act, useEffect, useState } from "react";
import axios from "axios";
import Container from "./container";

const API_URL = "https://justride.up.railway.app/api/actus";

export default function ActualitesReportages() {
  

  return (
    <section className="pb-12 bg-white text-gray-800">
      <Container className="xl:-mt-24">
        {/* Titre */}
        <h2 className="relative text-3xl md:text-4xl font-bold text-center uppercase mb-12 flex flex-row justify-center gap-1">
          <span>Actualités</span>
          <span className="relative w-10 h-10">
            {/* <Image src="/images/actualite/and.webp" alt="actualité &" width={40} height={40} /> */}
            -
          </span>
          <span>Reportages</span>
        </h2>
        <ActualitesReportagesData />

       
      </Container>
    </section>
  );
}


function ActualitesReportagesData(){
  const [actusALaUne, setActusALaUne] = useState<any[]>([]);
  const [actusInternationales, setActusInternationales] = useState<any[]>([]);
  const [actusLocales, setActusLocales] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchActus = async () => {
      try {
        const { data } = await axios.get(API_URL);
         // Trier les actualités par date, du plus récent au plus ancien
         const sortedData = data.sort((a: any, b: any) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime(); // Tri décroissant (récent en premier)
        });

        const aLaUne = data.filter((actu: any) => actu.category?.name === "A LA UNE");
        const internationales = data.filter((actu: any) => actu.category?.name === "Actus Internationale");
        const locales = data.filter((actu: any) => actu.category?.name === "Actus Locale");

        setActusALaUne(aLaUne);
        setActusInternationales(internationales);
        setActusLocales(locales);
      } catch (error) {
        console.error("❌ Erreur de chargement :", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchActus();
  }, []);

  console.log('loafff',loading)

  if(loading){
    return(
      <div className="text-center text-gray-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {Array.from({ length: 3 }).map((_, index) => (
            <ActualitesReportageLoading key={index} />
          ))}
    </div>
    )
  }

  if(error){
    return(
      <p className="text-center text-red-500">Erreur de chargement des actualités.</p>
    )
  }

  return(
    <>

       {/* Section À la Une */}
       {actusALaUne.length > 0 && (
          <div className="mb-8 min-h-52">
            
            <h3 className="text-xl font-bold uppercase mb-4">À la Une</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {actusALaUne.map((actu, index) => (
                <div key={index} className="p-1">
                  <a href={`/actualites/${actu._id}`} className="block">
                  <div className="relative w-full h-64">

                    {/* Ajout de la date en haut à gauche */}
                    <div className="absolute top-0 left-0 bg-accent bg-opacity-60 text-white text-xs px-2 py-1 rounded-br-lg">
                      {new Date(actu.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
                    </div>
                    {actu.imageUne && (
                      <Image
                        src={actu.imageUne}
                        alt={actu.title}
                        className="object-cover w-full h-full"
                        fill
                        loading="lazy"
                      />
                    )}
                  </div>
                  </a>
                  <a href={`/actualites/${actu._id}`} className="block">
                   <h3 className="mt-4 font-bold text-lg uppercase hover:text-accent">{actu.title}</h3>
                   </a>
                  <div className="w-16 h-1 bg-accent my-2"></div>
                  <div
                    className="text-sm text-gray-600 text-justify text-ellipsis line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: actu.description }}
                  />
                  <a href={`/actualites/${actu._id}`} className="mt-4 text-sm font-semibold text-gray-700 hover:text-accent flex justify-items-start">
                    Lire la suite »»»
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section Actus Locales & Internationales côte à côte */}
        {(actusInternationales.length > 0 || actusLocales.length > 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Actus Internationales - Limité à 2 articles */}
            {actusInternationales.slice(0, 2).map((actu, index) => (
              <div key={index} className="p-1 text-center">

          <a href={`/actualites/${actu._id}`} className="block">
                <div className="relative w-full h-64">
                  {/* Ajout de la date sur l'image  mety*/}
    <div className="absolute top-2 left-2 bg-accent bg-opacity-70 text-white text-xs px-2 py-1 rounded-br-lg z-10">
      {new Date(actu.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
    </div>
                  {actu.imageUne && (
                    <Image
                      src={actu.imageUne}
                      alt={actu.title}
                      className="object-cover w-full h-full"
                      fill
                      loading="lazy"
                    />
                  )}
                </div>
                </a>
                <a href={`/actualites/${actu._id}`} className="block">
                  <h3 className="mt-4 font-bold text-lg uppercase hover:text-accent">{actu.title}</h3>
                </a>
                  <div className="w-16 h-1 bg-accent my-2 mx-auto"></div>
                <div
                  className="text-sm text-gray-600 text-justify text-ellipsis line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: actu.description }}
                />
                <a href={`/actualites/${actu._id}`} className="mt-4 text-sm font-semibold text-gray-700 hover:text-accent flex justify-items-start">
                    Lire la suite »»»
                  </a>
              </div>
            ))}

            {/* Actus Locales - Limité à 1 article */}
            {actusLocales.slice(0, 1).map((actu, index) => (
              
              <div key={index} className="p-1 text-center">
                <a href={`/actualites/${actu._id}`} className="block">
                <div className="relative w-full h-64">
            {/* Ajout de la date sur l'image  mety*/}
          <div className="absolute top-2 left-2 bg-accent bg-opacity-70 text-white text-xs px-2 py-1 rounded-br-lg z-10">
            {new Date(actu.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
          </div>
                  {actu.imageUne && (
                    <Image
                      src={actu.imageUne}
                      alt={actu.title}
                      className="object-cover w-full h-full"
                      fill
                      loading="lazy"
                    />
                  )}
                </div>
                </a>
                <a href={`/actualites/${actu._id}`} className="block">
                  <h3 className="mt-4 font-bold text-lg uppercase hover:text-accent">{actu.title}</h3>
                </a>
                <div className="w-16 h-1 bg-accent my-2 mx-auto"></div>
                <div
                  className="text-sm text-gray-600 text-justify text-ellipsis line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: actu.description }}
                />
                <a href={`/actualites/${actu._id}`} className="mt-4 text-sm font-semibold text-gray-700 hover:text-accent flex justify-items-start">
                    Lire la suite »»»
                  </a>
              </div>
            ))}
          </div>
        )}
    </>
  )

}
function ActualitesReportageLoading(){
  return (
    <div className="flex flex-col  animate-pulse gap-3">
    <div className="w-full h-44 bg-gray-200"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-5 rounded bg-gray-200"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-2 rounded bg-gray-200"></div>
          <div className="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div className="h-2 rounded bg-gray-200"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 h-2 rounded bg-gray-200"></div>
          <div className="col-span-2 h-2 rounded bg-gray-200"></div>
        </div>
        <div className="h-2 rounded bg-gray-200 w-[30%]"></div>
      </div>
    </div>
  </div>
  )
}