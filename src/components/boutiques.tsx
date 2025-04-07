"use client";
 {/* 
// import clsx from "clsx";
// import Image from "next/image";
import React from "react";
import SwipperSlide from "./ui/swipper";
import Container from "./container";

const imagePub = [
  {
    src: "/images/pub/faux-pub-1.webp",
    alt : 'publicité pour le casque',
  },
  {
    src: "/images/pub/faux-pub-3.webp",
    alt : 'publicité pour le casque',
  },
  {
    src: "/images/pub/faux-pub-1.webp",
    alt : 'publicité pour le casque',
  },
]

// const filters = [
//   { id: 1, name: "Casque" },
//   { id: 2, name: "Blouson" },
//   { id: 3, name: "Gants" },
//   { id: 4, name: "Pantalon" },
//   { id: 5, name: "Chaussures" },
//   { id: 6, name: "Dorsale" },
//   { id: 7, name: "Accessoire" },
//   { id: 8, name: "Technologie" },
// ] as const;

// type Filter = (typeof filters)[number];

export default function Boutiques() {
  // const [activeFilter, setActiveFilter] = useState<Filter>(filters[0]);

  // const handleFilterClick = (filter: Filter) => {
  //   setActiveFilter(filter);
  // };

  return (
    <>
      {/* <h2 className="uppercase text-3xl md:text-4xl font-bold text-center">
        Boutiques
      </h2> */}

      {/* Filtres avec scroll sur mobile 
      <div>
        {/* <ul className="flex overflow-x-auto gap-4 sm:gap-3 mt-6 sm:mt-8 pb-2 sm:pb-0">
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
        </ul> */}

        {/* Grid responsive 

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 h-auto">
          {/* Colonne 1 
          <div className="flex flex-col gap-2 h-[320px] xl:h-[340px]">
            <div className="h-52 relative overflow-hidden">
              <img
                src="/images/photos/img-casque-1.jpg"
                alt="Casque"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-52 relative overflow-hidden">
              <img
                src="/images/photos/img-casque-2.jpg"
                alt="Casque"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Colonne 2 
          <div className="h-[320px] xl:h-[340px]">
            <div className="w-full h-full relative overflow-hidden">
              <img
                src="/images/photos/img-casque-3.jpg"
                alt="Casque"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Colonne 3 
          <div className="flex flex-col gap-2 h-[320px] xl:h-[340px]">
            <div className="h-52 relative overflow-hidden">
              <img
                src="/images/photos/img-casque-1.jpg"
                alt="Casque"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-52 relative overflow-hidden">
              <img
                src="/images/photos/img-gant.png"
                alt="Gant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
            {/* Colonne 4
          
          <aside className="w-full h-full relative overflow-hidden">
            <SwipperSlide images={imagePub} />
          </aside>
        </div>
      </div>
    </>
  );
}
 */}


 // import clsx from "clsx";
// import Image from "next/image";
import React from "react";
// import SwipperSlide from "./ui/swipper";
// import Container from "./container";
import Image from 'next/image';
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

const imagePub = [
  {
    src: "/images/pub/faux-pub-1.webp",
    alt : 'publicité pour le casque',
  },
  {
    src: "/images/pub/faux-pub-3.webp",
    alt : 'publicité pour le casque',
  },
  {
    src: "/images/pub/faux-pub-1.webp",
    alt : 'publicité pour le casque',
  },
]

// const filters = [
//   { id: 1, name: "Casque" },
//   { id: 2, name: "Blouson" },
//   { id: 3, name: "Gants" },
//   { id: 4, name: "Pantalon" },
//   { id: 5, name: "Chaussures" },
//   { id: 6, name: "Dorsale" },
//   { id: 7, name: "Accessoire" },
//   { id: 8, name: "Technologie" },
// ] as const;

// type Filter = (typeof filters)[number];

export default function Boutiques() {
  // const [activeFilter, setActiveFilter] = useState<Filter>(filters[0]);

  // const handleFilterClick = (filter: Filter) => {
  //   setActiveFilter(filter);
  // };

  return (
    <>
      {/* <h2 className="uppercase text-3xl md:text-4xl font-bold text-center">
        Boutiques
      </h2> */}

      {/* Filtres avec scroll sur mobile */}
      <div>
        {/* <ul className="flex overflow-x-auto gap-4 sm:gap-3 mt-6 sm:mt-8 pb-2 sm:pb-0">
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
        </ul> */}

        {/* Grid responsive */}

        <div className="grid grid-cols-2 sm:grid-cols-4  gap-2 h-auto">
          {/* Colonne 1 */}
          <div className="hidden  sm:flex flex-col gap-2 h-[250px] lg:h-[270px] xl:h-[280px] 2xl:h-[340px]">
            <div className="h-52  relative overflow-hidden">
              {/*<img
                src="/images/photos/img-casque-1.jpg"
                alt="Casque"
                className="w-full h-full object-cover"
              />
              */}
              <Image
                src="/images/photos/img-casque-1.jpg"
                alt="Casque"
                width={500}        
                height={700}       
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-52 relative overflow-hidden">
              {/*
              <img
                src="/images/photos/img-casque-2.jpg"
                alt="Casque"
                className="w-full h-full object-cover"
              />
              */}
              <Image
                src="/images/actualite/casquette.jpg"
                alt="Casque"
                width={500}        
                height={700}       
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="hidden sm:block h-[250px] lg:h-[270px] xl:h-[280px] 2xl:h-[340px]">
            <div className="w-full h-full relative overflow-hidden">
              {/*
              <img
                src="/images/photos/img-casque-3.jpg"
                alt="Casque"
                className="w-full h-full object-cover"
              />
              */}
              <Image
                src="/images/photos/img-casque-3.jpg"
                alt="Casque"
                width={500}        
                height={700}       
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Colonne 3 */}
          <div className="flex flex-col gap-2 h-[250px] lg:h-[270px] xl:h-[280px] 2xl:h-[340px]">
            <div className="h-52 relative overflow-hidden">
              {/*
              <img
                src="/images/photos/img-casque-1.jpg"
                alt="Casque"
                className="w-full h-full object-cover"
              />
              */}
               <Image
                src="/images/actualite/boutique-3.jpg"
                alt="Casque"
                width={500}        
                height={700}       
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-52 relative overflow-hidden">
              {/*
              <img
                src="/images/photos/img-gant.png"
                alt="Gant"
                className="w-full h-full object-cover"
              />
              */}
              <Image
                src="/images/actualite/boutique-2.jpg"
                alt="Casque"
                width={500}        
                height={700}       
                className="w-full h-full object-cover"
              />
            </div>
          </div>
            {/* Colonne 4 */}
          
          {/* <aside className="w-full h-full relative overflow-hidden">
            <SwipperSlide images={imagePub} />
          </aside> */}
          <div className="h-[250px] lg:h-[270px] xl:h-[280px] 2xl:h-[340px] relative overflow-hidden">
              <Image
                src="/images/photos/img-casque-1.jpg"
                alt="Casque"
                width={500}        
                height={700}       
                className="w-full h-full object-cover"
              />
             <Link 
              href="/boutique"
              className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 group"
            >
              {/* Texte en haut, icône en bas */}
              <span className="uppercase font-bold text-white text-sm sm:text-base px-2 text-center max-w-[85vw] mb-4">
                Entrer dans notre univers
              </span>
              
              {/* Icône centrée en dessous */}
              <FaPlus className="text-white w-12 h-12 sm:w-[100px] sm:h-[100px] transition-transform group-hover:scale-110" />
            </Link>
            </div>
        </div>
      </div>
    </>
  );
}
