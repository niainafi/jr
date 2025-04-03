"use client";
import React from 'react';
import Header from './common/layout/header';
import Image from 'next/image';

export default function HeroSectionOcas() {
  return (
    <div className="relative h-[380px] md:h-[500px] lg:h-[600px] xl:h-[450px]">
      {/* <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          background: "url(/images/evenement/acc.jpg) no-repeat center center/cover" 
        }}
        
      /> */}
      <Image 
        src="/images/evenement/acc1.webp"
        alt="Background événement"
        className="absolute inset-0 bg-cover bg-center"
        layout="fill" 
        objectFit="cover"
        priority 
      />
      <div className="absolute inset-0 bg-black opacity-50" />

      <Header />

      
        <div className='absolute top-1/2 translate-y-4 left-1/2 -translate-x-[43%] w-[70%] sm:w-[80%] md:w-[70%] lg:w-[50%] flex justify-center'>
        <HeroTitle />
        </div>
    </div>
  );
}

function HeroTitle() {
  return (
      <img src='/images/typo-flat/pour-les.png' width={450} height={50} alt='pour les'/>
    
  );
}

