// "use client";

// import Image from "next/image";

// const arrivals = [
//   {
//     id: 1,
//     image: "/images/boutique/fly2.jpg",
//     alt: "Collection 2K25",
//   },
//   {
//     id: 2,
//     image: "/images/boutique/casque fly-8.jpg",
//     alt: "Casque Fly Racing",
//   },
//   {
//     id: 3,
//     image: "/images/boutique/Fly 3.jpg",
//     alt: "Tenues Fly 2026",
//   },
// ];

// export default function Arrivage() {
//   return (
//     <section className="bg-accent py-12">
//       <div className="container mx-auto px-4">
//         {/* Titre centré */}
//         <h2 className="text-center text-white text-3xl font-bold uppercase mb-8">Arrivage</h2>

//         {/* Grille de 3 colonnes */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
//           {arrivals.map((item) => (
//             <div key={item.id} className="shadow-lg overflow-hidden flex justify-center">
//               <Image
//                 src={item.image}
//                 alt={item.alt}
//                 width={480} // Taille ajustée
//                 height={350} // Hauteur ajustée pour rester proportionnelle
//                 className="w-[500px] h-auto object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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
  {
    id: 4,
    image: "/images/boutique/casque11.png",
    alt: "Tenues Fly 2026",
  },
];

export default function Arrivage() {
  return (
    <section className="bg-accent py-12">
      <div className="container mx-auto px-4">
        {/* Titre centré */}
        <h2 className="text-center text-black text-3xl font-bold uppercase mb-8">Arrivage</h2>

        {/* Carrousel */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {arrivals.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div className="shadow-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={480}
                  height={350}
                  className="w-[500px] h-auto object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}