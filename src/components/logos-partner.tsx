{/*  
import React from 'react';

export default function Logos() {
  const logos = [
    { src: "/images/logo/bell-helmets.svg", alt: 'Bell Helmets' },
    { src: "/images/logo/fly-racing.png", alt: 'Fly Racing' },
    { src: "/images/logo/arai-helmet-vector-logo.svg", alt: 'Arai' },
    { src: "/images/logo/belgom.jpg", alt: 'Belgom' },
    { src: "/images/logo/gopro-hero.svg", alt: 'GoPro' }
  ];

  return (
    <>
      <div className="flex justify-center items-center space-x-6 py-6 bg-white gap-10">
        {logos.map((logo, index) => (
          <img key={index} className="w-20 h-auto" src={logo.src} alt={logo.alt} />
        ))}
        <a className="bg-yellow-700 text-black font-bold rounded-r-full px-4 py-2 flex items-center space-x-2">
          <span>Voir plus</span>
          <span className="text-xl">&raquo;&raquo;&raquo;</span>
        </a>
      </div>
      <JustRideAcademy />
      <ChooseAppointment />
    </>
  );
}

function JustRideAcademy() {
  return (
    <div className="relative h-[380] lg:h-[380px]">
      <div className="absolute inset-0 bg-contain bg-center">
            <img src="/images/back/back-academy.png" alt="img-bg" />
      </div>
      <div className='absolute top-1/2 right-0 transform -translate-y-[180%] sm:-translate-y-[35%] -translate-x-1/2 lg:translate-y-[70%] w-[70px] sm:w-[150px] lg:w-[200px]'>
        <img src='/images/logo/js-academy.png' alt='just-ride-academy' />
      </div>
      <div className='absolute top-[41%] left-[34%] transform -translate-x-1/2 -translate-y-[270%] sm:-translate-y-[95%] lg:-translate-y-1/2 max-w-[200px] sm:max-w-[100px] md:max-w-[400px]  lg:max-w-[700px]'>
        <img src='/images/typo-flat/reserveez.png' alt='reserver' className='w-full' />
      </div>
      
    </div>
  );
}


function ChooseAppointment() {
  const appointments = [
    { title: "STAGE PILOTAGE DE MOTO EN CIRCUIT", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", buttonText: "PROGRAMMER" },
    { title: "SESSION MINI SM", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", buttonText: "PROGRAMMER" },
    { title: "STAGE D’APPRENTISSAGE DEBUTANT", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", buttonText: "PROGRAMMER" }
  ];

  return (
    <div className="text-center px-10 pb-8 pt-[180px]">
      <h2 className="text-2xl font-bold">CHOISISSEZ UN RENDEZ-VOUS</h2>
      <div className="flex justify-center items-center space-x-8 mt-6">
        <button className="text-2xl">&lt;</button>
        {appointments.map((appointment, index) => (
          <div key={index} className="text-center max-w-sm p-4">
            <h3 className="font-bold text-lg border-b-2 border-yellow-700 pb-2">{appointment.title}</h3>
            <p className="text-gray-700 my-2">{appointment.description}</p>
            <button className="bg-yellow-700 text-black font-bold px-4 py-2 rounded-lg mt-2">{appointment.buttonText}</button>
          </div>
        ))}
        <button className="text-2xl">&gt;</button>
      </div>
    </div>
  );
}
  */}

  import React from 'react';

export default function Logos() {
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
        <a className="bg-accent text-black font-bold rounded-r-full px-4 py-2 flex items-center space-x-2">
          <span>Voir plus</span>
          <span className="text-xl">&raquo;&raquo;&raquo;</span>
        </a>
      </div>
      <JustRideAcademy />
      <ChooseAppointment />
    </>
  );
}

function JustRideAcademy() {
  return (
    <div className="relative h-[380px] lg:h-[380px] flex justify-center items-center">
      <div className="absolute inset-0 bg-contain bg-center">
        <img src="/images/back/back-academy.png" alt="img-bg" className="w-full h-auto" />
      </div>
      <div className='absolute top-1/2 right-0 transform -translate-y-[180%] sm:-translate-y-[35%] -translate-x-1/2 lg:translate-y-[70%] w-[70px] sm:w-[150px] lg:w-[200px]'>
        <img src='/images/logo/js-academy.png' alt='just-ride-academy' className='w-full' />
      </div>
      <div className='absolute top-[41%] left-[34%] transform -translate-x-1/2 -translate-y-[270%] sm:-translate-y-[95%] lg:-translate-y-1/2 max-w-[200px] sm:max-w-[100px] md:max-w-[400px]  lg:max-w-[700px]'>
        <img src='/images/typo-flat/reserveez.png' alt='reserver' className='w-full' />
      </div>
    </div>
  );
}

function ChooseAppointment() {
  const appointments = [
    { title: "STAGE PILOTAGE DE MOTO EN CIRCUIT", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", buttonText: "PROGRAMMER" },
    { title: "SESSION MINI SM", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", buttonText: "PROGRAMMER" },
    { title: "STAGE D’APPRENTISSAGE DEBUTANT", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", buttonText: "PROGRAMMER" }
  ];

  return (
    <div className="text-center px-4 sm:px-10 pb-8 pt-[100px] sm:pt-[150px] lg:pt-[180px]">
      <h2 className="text-2xl font-bold">CHOISISSEZ UN RENDEZ-VOUS</h2>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
        <button className="text-2xl">&lt;</button>
        {appointments.map((appointment, index) => (
          <div key={index} className="text-center max-w-xs sm:max-w-sm p-4">
            <h3 className="font-bold text-lg border-b-2 border-yellow-700 pb-2">{appointment.title}</h3>
            <p className="text-gray-700 my-2">{appointment.description}</p>
            <button className="bg-yellow-700 text-black font-bold px-4 py-2 rounded-lg mt-2">{appointment.buttonText}</button>
          </div>
        ))}
        <button className="text-2xl">&gt;</button>
      </div>
    </div>
  );
}
