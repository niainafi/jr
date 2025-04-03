"use client";
 {/*
import Image from "next/image";
import { act, useEffect, useState } from "react";
import axios from "axios";
import Container from "./container";


const API_URL = "https://justride.up.railway.app/api/actus";

export default function ActualitesReportages() {
  

  return (
    <section className="pb-12 bg-white text-gray-800">
      <Container className="xl:-mt-24">
        {/* Titre 
        <h2 className="relative text-3xl md:text-4xl font-bold text-center uppercase mb-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-1">
            <span>Actualités</span>
            <span className="relative w-10 h-10 hidden md:block">-</span>
            <span>Reportages</span>
          </div>
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

       {/* Section À la Une 
       {actusALaUne.length > 0 && (
          <div className="mb-8 min-h-52">
            
            <h3 className="text-xl font-bold uppercase mb-4">À la Une</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {actusALaUne.map((actu, index) => (
                <div key={index} className="p-1">
                  <a href={`/actualites/${actu._id}`} className="block">
                  <div className="relative w-full h-64">

                    {/* Ajout de la date en haut à gauche 
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
                   <h3 className="mt-4 font-bold text-lg uppercase hover:text-accent">{actu.imageUne}</h3>
                   
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

        {/* Section Actus Locales & Internationales côte à côte 
        {(actusInternationales.length > 0 || actusLocales.length > 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Actus Internationales - Limité à 2 articles 
            {actusInternationales.slice(0, 2 ).map((actu, index) => (
              <div key={index} className="p-1 text-center">

          <a href={`/actualites/${actu._id}`} className="block">
                <div className="relative w-full h-64">
                  {/* Ajout de la date sur l'image  mety
    <div className="absolute top-2 left-2 bg-accent bg-opacity-70 text-white text-xs px-2 py-1 rounded-br-lg z-10">
      {new Date(actu.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
    </div>

                  {/* Badge de catégorie en bas à droite 
                  <div className="absolute bottom-2 right-2 bg-accent bg-opacity-70 text-white text-xs px-2 py-1 rounded-tl-lg z-10">
                      Actus Internationale
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

            {/* Actus Locales - Limité à 1 article 
            {actusLocales.slice(0, 1).map((actu, index) => (
              
              <div key={index} className="p-1 text-center">
                <a href={`/actualites/${actu._id}`} className="block">
                <div className="relative w-full h-64">
            {/* Ajout de la date sur l'image  mety
            <div className="absolute top-2 left-2 bg-accent bg-opacity-70 text-white text-xs px-2 py-1 rounded-br-lg z-10">
              {new Date(actu.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
            </div>


            {/* Badge de catégorie en bas à droite 
              <div className="absolute bottom-2 right-2 bg-red-600 bg-opacity-70 text-white text-xs px-2 py-1 rounded-tl-lg z-10">
                    Actus Locale
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
*/}

 
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "./container";
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

const API_URL = "https://justride.up.railway.app/api/actus";
const A_LA_UNE_URL = "https://justride.up.railway.app/api/actus?alaune=true";

const formatDateCorrectly = (dateString: string) => {
  const date = new Date(dateString);
  const adjustedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  return format(adjustedDate, 'dd MMMM yyyy', { locale: fr });
};

export default function ActualitesReportages() {
  return (
    <section className="pb-12 bg-white text-gray-800">
      <Container className="xl:-mt-24">
        <h2 className="relative text-3xl md:text-4xl font-bold text-center uppercase mb-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-1">
            <span>Actualités</span>
            <span className="relative w-10 h-10 hidden md:block">-</span>
            <span>Reportages</span>
          </div>
        </h2>
        <ActualitesReportagesData />
      </Container>
    </section>
  );
}

function ActualitesReportagesData() {
  const [actusALaUne, setActusALaUne] = useState<any[]>([]);
  const [actusInternationales, setActusInternationales] = useState<any[]>([]);
  const [actusLocales, setActusLocales] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchActus = async () => {
      try {
        const [aLaUneResponse, allActusResponse] = await Promise.all([
          axios.get(A_LA_UNE_URL),
          axios.get(API_URL)
        ]);

        setActusALaUne(aLaUneResponse.data);

        const sortedData = allActusResponse.data.sort((a: any, b: any) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime();
        });

        const aLaUneIds = aLaUneResponse.data.map((actu: any) => actu._id);
        const filteredData = sortedData.filter((actu: any) => !aLaUneIds.includes(actu._id));

        setActusInternationales(filteredData.filter((actu: any) => actu.category?.name === "Actus Internationale"));
        setActusLocales(filteredData.filter((actu: any) => actu.category?.name === "Actus Locale"));
      } catch (error) {
        console.error("❌ Erreur de chargement :", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchActus();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <ActualitesReportageLoading key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">Erreur de chargement des actualités.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Colonne 1 - À la Une */}
      <div className="space-y-8">
        <h3 className="text-xl font-bold uppercase"></h3>
        {actusALaUne.map((actu) => (
          <ArticleCard 
            key={actu._id}
            actu={actu}
            badgeText={
              actu.category?.name === "Actus Locale" 
                ? "À LA UNE : ACTUS LOCALES" 
                : "À LA UNE : ACTUS INTERNATIONALES"
            }
            badgeColor={actu.category?.name === "Actus Locale" ? "bg-red-600" : "bg-accent"}
          />
        ))}
      </div>

      {/* Colonne 2 - Actus Internationales */}
      <div className="space-y-8">
        <h3 className="text-xl font-bold uppercase"></h3>
        {actusInternationales.slice(0, 1).map((actu) => (
          <ArticleCard
            key={actu._id}
            actu={actu}
            badgeText="ACTUS INTERNATIONALES"
            badgeColor="bg-accent"
          />
        ))}
      </div>

      {/* Colonne 3 - Actus Locales */}
      <div className="space-y-8">
        <h3 className="text-xl font-bold uppercase"></h3>
        {actusLocales.slice(0, 1).map((actu) => (
          <ArticleCard
            key={actu._id}
            actu={actu}
            badgeText="ACTUS LOCALES"
            badgeColor="bg-red-600"
          />
        ))}
      </div>
    </div>
  );
}

function ArticleCard({ actu, badgeText, badgeColor }: { 
  actu: any, 
  badgeText: string, 
  badgeColor: string
}) {
  return (
    <div className="p-1 mb-8">
      <a href={`/actualites/${actu._id}`} className="block">
        <div className="relative w-full h-64">
          <div className="absolute top-2 left-2 bg-accent bg-opacity-70 text-white text-xs px-2 py-1 rounded-br-lg z-10">
            {formatDateCorrectly(actu.date)}
          </div>
          <div className={`absolute bottom-2 right-2 ${badgeColor} bg-opacity-70 text-white text-xs px-2 py-1 rounded-tl-lg z-10`}>
            {badgeText}
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
      <div className={`w-16 h-1 ${badgeColor} my-2`}></div>
      <div
        className="text-sm text-gray-600 text-justify text-ellipsis line-clamp-3"
        dangerouslySetInnerHTML={{ __html: actu.description }}
      />
      <a href={`/actualites/${actu._id}`} className="mt-4 text-sm font-semibold text-gray-700 hover:text-accent flex justify-items-start">
        Lire la suite »»»
      </a>
    </div>
  );
}

function ActualitesReportageLoading() {
  return (
    <div className="flex flex-col animate-pulse gap-3">
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
  );
}