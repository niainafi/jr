"use client"; // 🔥 Assure que ce composant fonctionne côté client
{/*
import React from 'react';

export default function LogoBoutiquePartener() {
  const logos = [
    { src: "/images/logo/logospartener/RFX.webp", alt: 'RFX' },
    { src: "/images/logo/logospartener/AGV.png", alt: 'AGV' },
    { src: "/images/logo/arai-helmet-vector-logo.svg", alt: 'helmet' },
    { src: "/images/logo/logospartener/bmc-air-filters.png", alt: 'bmc' },
    { src: "/images/logo/logospartener/Belgom.png", alt: 'Belgom' },
    { src: "/images/logo/logospartener/novic.png", alt: 'novic' },
    { src: "/images/logo/logospartener/oakley.png", alt: 'oakley' },
    { src: "/images/logo/logospartener/Oxford_Logo.png", alt: 'Oxford' },
    { src: "/images/logo/logospartener/RST.png", alt: 'RST' },
    { src: "/images/logo/logospartener/ufoplast.png", alt: 'ufoplast' },
    { src: "/images/logo/fly-racing.png", alt: 'Fly Racing' },
    { src: "/images/logo/logospartener/Lightech.png", alt: 'Lightech' },
    { src: "/images/logo/logospartener/Quad Lock.PNG", alt: 'Quad Lock' }
    
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-6 py-6 bg-white">
        {logos.map((logo, index) => (
          <img key={index} className="w-16 sm:w-20 md:w-24 h-auto" src={logo.src} alt={logo.alt} />
        ))}
        
      </div>

    </>
  );
}
*/}



import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function LogoBoutiquePartener() {
  const logos = [
    { src: "/images/logo/logospartener/RFX.webp", alt: "RFX" },
    { src: "/images/logo/logospartener/AGV copie.png", alt: "AGV" },
    { src: "/images/logo/arai-helmet-vector-logo.svg", alt: "helmet" },
    { src: "/images/logo/logospartener/bmc-air-filters.png", alt: "bmc" },
    { src: "/images/logo/logospartener/Belgom.png", alt: "Belgom" },
    { src: "/images/logo/logospartener/novic.png", alt: "novic" },
    { src: "/images/logo/logospartener/Oakley_logo.svg", alt: "oakley" },
    { src: "/images/logo/logospartener/Oxford_Logo.png", alt: "Oxford" },
    { src: "/images/logo/logospartener/rst-moto-logo-vector.svg", alt: "RST" },
    { src: "/images/logo/logospartener/ufoplast.png", alt: "ufoplast" },
    { src: "/images/logo/fly-racing.png", alt: "Fly Racing" },
    { src: "/images/logo/logospartener/Lightech.png", alt: "Lightech" },
    { src: "/images/logo/logospartener/Quad Lock.PNG", alt: "Quad Lock" },
    { src: "/images/logo/logospartener/tucano.png", alt: "tucano" },
  ];

  return (
    <div className="bg-white py-6">
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-6 flex items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120} // Taille de base pour desktop
              height={80}
              className="h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[120px]" // Responsive
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
