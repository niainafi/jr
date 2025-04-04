 {/*import React from 'react';
import Header from './common/layout/header';

export default function HeroSection() {
  return (
    <div className="relative h-[380px] md:h-[500px] lg:h-[600px] xl:h-[450px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          background: "url(/images/occasion/occasion-head.jpg) no-repeat center center/cover" 
        }}
        
      />
      <div className="absolute inset-0" />

      <Header />

      
    </div>
  );
}
*/}

import React from 'react';
import Header from './common/layout/header';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative h-[380px] md:h-[500px] lg:h-[600px] xl:h-[450px]">
      {/*
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          background: "url(/images/occasion/occasion-head.jpg) no-repeat center center/cover" 
        }}
        
      />*/}


         <Image 
              src="/images/occasion/ocas-head-sans-txt.jpg"
              alt="Background événement"
              className="absolute inset-0 bg-cover bg-center"
              layout="fill" 
              objectFit="cover"
              priority 
            />
      <div className="absolute inset-0 bg-black opacity-50" />

      <Header />
      <div className='absolute  top-[37%] translate-y-4 left-[70%] -translate-x-[35%] w-[45%] sm:w-[45%] md:w-[45%] lg:w-[50%] flex justify-center'>
        <HeroTitle />
      </div>
      

  
    </div>
  );
}
function HeroTitle() {
  return (
      <img src='/images/typo-flat/tampon.svg' width={280} height={30} alt='pour les'/>
    
  );
}
