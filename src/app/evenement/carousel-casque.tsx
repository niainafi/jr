"use client";

import Image from "next/image";

const arrivals = [
  {
    id: 1,
    image: "/images/boutique/fly2.jpg",
    alt: "Collection 2K25",
  },
  {
    id: 2,
    image: "/images/boutique/casque fly-8.jpg",
    alt: "Casque Fly Racing",
  },
  {
    id: 3,
    image: "/images/boutique/Fly 3.jpg",
    alt: "Tenues Fly 2026",
  },
];

export default function Arrivage() {
  return (
    <section className="bg-accent py-12">
      <div className="container mx-auto px-4">
        {/* Titre centré */}
        <h2 className="text-center text-white text-3xl font-bold uppercase mb-8">Arrivage</h2>

        {/* Grille de 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {arrivals.map((item) => (
            <div key={item.id} className="shadow-lg overflow-hidden flex justify-center">
              <Image
                src={item.image}
                alt={item.alt}
                width={300} // Taille ajustée
                height={350} // Hauteur ajustée pour rester proportionnelle
                className="max-w-[300px] h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

