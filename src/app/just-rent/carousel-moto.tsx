"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icônes pour les flèches

const data = [
  { id: 1, name: "HIMALAYAN 450", description: "L'Aventure Sans Limites à Madagascar !", img: "/images/just-rent/classic500.png" },
  { id: 2, name: "MOTO 2", description: "Une autre moto puissante pour vos aventures.", img: "/images/just-rent/classic500.png" },
  { id: 3, name: "MOTO 3", description: "Un choix idéal pour les amateurs de sensations fortes.", img: "/images/just-rent/classic500.png" },
];

export function MotoCarousel() {
  const [current, setCurrent] = React.useState(0);
  const currentItem = data[current];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className="relative mx-auto max-w-4xl text-center">
      {/* Image principale */}
      <div className="relative">
        <Image
          src="/images/just-rent/moto7.png"
          alt={currentItem.name}
          width={800}
          height={500}
          className="w-full h-auto object-cover"
        />
       
        
        {/* Boutons de navigation */}
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Informations dynamiques */}
      <div className="bg-[#B29028] text-white p-6 mt-4">
        <h2 className="text-2xl font-bold">{currentItem.name}</h2>
        <p className="mt-2">{currentItem.description}</p>
      </div>

      {/* Indicateurs de navigation (miniatures) */}
      <div className="flex justify-center mt-4 space-x-4">
        {data.map((item, index) => (
          <Image
            key={item.id}
            src={item.img}
            alt={item.name}
            width={100}
            height={60}
            className={`cursor-pointer rounded ${index === current ? "border-4 border-yellow-500" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
