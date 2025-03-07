import React from 'react';

export default function LogoBoutiquePartener() {
  const logos = [
    { src: "/images/logo/bell-helmets.svg", alt: 'Bell Helmets' },
    { src: "/images/logo/fly-racing.png", alt: 'Fly Racing' },
    { src: "/images/logo/arai-helmet-vector-logo.svg", alt: 'Arai' },
    { src: "/images/logo/belgom.jpg", alt: 'Belgom' },
    { src: "/images/logo/gopro-hero.svg", alt: 'GoPro' }
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




