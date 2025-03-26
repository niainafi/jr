
import React from 'react';

const ScreenSize = () => {
    const isDev = process.env.NODE_ENV === 'development' 
    if(!isDev){
        return null
    }
  return (
    <div className="p-4 text-white bg-black fixed bottom-3 rounded-lg right-3 z-[1000]">
    <h1 className="text-base font-bold">
      {/* Affiche "Mobile" pour les tailles d'écran par défaut */}
      <span className="block sm:hidden">Mobile</span>

      {/* Affiche "sm" pour les écrans d'au moins 640px */}
      <span className="hidden sm:block md:hidden">sm (640px)</span>

      {/* Affiche "md" pour les écrans d'au moins 768px */}
      <span className="hidden md:block lg:hidden">md (768px)</span>

      {/* Affiche "lg" pour les écrans d'au moins 1024px */}
      <span className="hidden lg:block xl:hidden">lg (1024px)</span>

      {/* Affiche "xl" pour les écrans d'au moins 1280px */}
      <span className="hidden xl:block 2xl:hidden">xl (1280px)</span>

      {/* Affiche "2xl" pour les écrans d'au moins 1536px */}
      <span className="hidden 2xl:block">2xl (1536px)</span>
    </h1>
  </div>
  );
};

export default ScreenSize;
