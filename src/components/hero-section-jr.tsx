import React from 'react';
import Header from './common/layout/header';

export default function HeroSectionjr() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{ 
          backgroundImage: "url(/images/just-rent/liberte-avec-text.jpg)",
          backgroundSize: "110%", // Zoom arrière pour mieux ajuster
          backgroundPosition: "center bottom", // Remonte l’image
        }}
      />
      
      {/* Overlay pour éclaircir l’image */}
      <div className="absolute inset-0 bg-white opacity-50 mix-blend-soft-light" />

      <Header />

      <div className="relative flex w-full items-center justify-center h-full z-10">
        {/* Contenu supplémentaire ici */}
      </div>
    </div>
  );
}
