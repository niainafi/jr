import React from 'react';
import Header from './common/layout/header';

export default function HeroSectionactu() {
  return (
    <div className="relative h-[380px] md:h-[500px] lg:h-[600px] xl:h-[450px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          background: "url(/images/actualite/head-actu-sans-texte.jpg) no-repeat center center/cover" 
        }}
        
      />
      <div className="absolute inset-0 bg-black opacity-50" />

      <Header />

      <div className="relative flex w-full items-center justify-center h-full z-1 bottom-14">
       
      </div>
    </div>
  );
}

