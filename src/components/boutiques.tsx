"use client";

import clsx from "clsx";
// import Image from "next/image";
import React, { useState } from "react";
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

const filters = [
  { id: 1, name: "Casque" },
  { id: 2, name: "Blouson" },
  { id: 3, name: "Gants" },
  { id: 4, name: "Pantalon" },
  { id: 5, name: "Chaussures" },
  { id: 6, name: "Dorsale" },
  { id: 7, name: "Accessoire" },
  { id: 8, name: "Technologie" },
] as const;

type Filter = (typeof filters)[number];

export default function Boutiques() {
  const [activeFilter, setActiveFilter] = useState<Filter>(filters[0]);

  const handleFilterClick = (filter: Filter) => {
    setActiveFilter(filter);
  };

  return (
    <Container>
      <h1 className="uppercase text-3xl sm:text-4xl font-bold text-center">
        Boutiques
      </h1>

      {/* Filtres avec scroll sur mobile */}
      <div>
        <ul className="flex overflow-x-auto gap-4 sm:gap-3 mt-6 sm:mt-8 pb-2 sm:pb-0">
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
        </ul>

        {/* Grid responsive */}

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-auto">
          {/* Colonne 1 */}
          <div className="flex flex-col gap-4">
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

          {/* Colonne 2 */}
          <div>
            <div className="w-full h-full relative overflow-hidden">
              <img
                src="/images/photos/img-casque-3.jpg"
                alt="Casque"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Colonne 3 */}
          <div className="flex flex-col gap-4">
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
            {/* Colonne 4 */}
          
          <aside className="w-full h-full relative overflow-hidden">
            <SwipperSlide images={imagePub} />
          </aside>
        </div>
      </div>
    </Container>
  );
}
