import React from 'react';
import Header from './common/layout/header';

export default function HeroSectionjr() {
  return (
    <div className="relative h-[380px] md:h-[500px] lg:h-[600px] xl:h-[450px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          background: "url(/images/just-rent/liberte-avec-text.jpg) no-repeat center center/cover" 
        }}
        
      />
      <div className="absolute inset-0 bg-black opacity-50" />

      <Header />

      <div className="relative flex w-full items-center justify-center h-full z-1 bottom-14">
        {/* <div className='w-[70%] sm:w-[80%] md:w-[70%] lg:w-[50%] flex justify-center'>
        <HeroTitle />
        </div> */}
      </div>
    </div>
  );
}

// function HeroTitle() {
//   return (
//       <img src='/images/typo-flat/pour-les.png' width={450} height={50} alt='pour les'/>
    
//   );
// }

