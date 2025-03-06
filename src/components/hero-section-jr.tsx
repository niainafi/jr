import React from 'react';
import Header from './common/layout/header';

export default function HeroSectionjr() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[50vh]  md:h-[40vh] lg:h-[70vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-right lg:bg-center"
        style={{ 
          backgroundImage: "url(/images/just-rent/liberte-avec-text.jpg)",
          // backgroundSize: "cover", // Zoom arrière pour mieux ajuster
           // Remonte l’image
          //  backgroundPosition: "center 75%", // Remonte encore plus l’image

        }}
      />
      
      {/* Overlay pour éclaircir l’image */}
      <div className="absolute inset-0 bg-white opacity-5 mix-blend-soft-light" />

      <Header />

      <div className="relative flex w-full items-center justify-center h-full z-10">
        {/* Contenu supplémentaire ici */}
      </div>
    </section>
  );
}



