
"use client";

import clsx from "clsx";
import React, { useState } from "react";

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

export default function MenuPtiBoutique() {
  const [activeFilter, setActiveFilter] = useState<Filter>(filters[0]);

  const handleFilterClick = (filter: Filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="mt-5 px-4 sm:px-6 md:px-10 lg:px-24 mb-32">

      {/* Filtres avec scroll sur mobile */}
      <ul className="flex overflow-x-auto sm:justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 sm:pb-0">
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
    </section>
  );
}
