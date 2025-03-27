// import React from 'react';
// import Header from './common/layout/header';

// export default function HeroSectionactu() {
//   return (
//     <div className="relative h-[380px] md:h-[500px] lg:h-[600px] xl:h-[450px]">
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ 
//           background: "url(/images/actualite/head-actu-sans-texte.jpg) no-repeat center center/cover" 
//         }}
        
//       />
//       <div className="absolute inset-0 bg-black opacity-50" />

//       <Header />

//       <div className="relative flex w-full items-center justify-center h-full z-1 bottom-14">
       
//       </div>
//     </div>
//   );
// }
import React from 'react';
import Header from './common/layout/header';
import Image from 'next/image';

export default function HeroSectionOcas() {
  return (
    <div className="relative h-[380px] md:h-[500px] lg:h-[550px] xl:h-[450px]">
      {/* <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          background: "url(/images/evenement/acc.jpg) no-repeat center center/cover" 
        }}
        
      /> */}
      <Image 
        src="/images/actualite/head-actu-sans-texte.jpg"
        alt="Background événement"
        className="absolute inset-0 bg-cover bg-center"
        layout="fill" 
        objectFit="cover"
        priority // Charge en priorité pour le LCP
      />
      <div className="absolute inset-0 bg-black opacity-50" />

      <Header />

      <div className="relative flex w-full items-center justify-end h-full z-1 bottom-14">
        <div className='w-[70%] sm:w-[80%] md:w-[70%] lg:w-[50%] flex justify-center'>
        <HeroTitle />
        </div>
      </div>
    </div>
  );
}

function HeroTitle() {
  return (
      <img src='/images/actualite/texte actu.png' width={450} height={50} alt='pour les'/>
    
  );
}

