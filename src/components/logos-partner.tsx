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
            <button className="bg-accent text-black font-bold px-4 py-2 rounded-lg mt-2">{appointment.buttonText}</button>
          </div>
        ))}
        <button className="text-2xl">&gt;</button>
      </div>
    </div>
  );
}
  */}

  import React from 'react';
import Container from './container';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

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
      <div className="gap-6 py-6 bg-white">
        <Container className='mt-0 flex items-center'>
        <div className="w-full flex flex-wrap justify-center items-center gap-x-8">
        {logos.map((logo, index) => (
          <img key={index} className="w-16 sm:w-20 md:w-24 h-auto" src={logo.src} alt={logo.alt} />
        ))}
        </div>
        <Link href={'/boutique'} className="bg-accent text-black font-bold rounded-r-full pl-2 h-5 flex items-center space-x-2">
          <span className='text-nowrap'>Voir plus</span>
          <span className="text-xl">&raquo;&raquo;&raquo;</span>
        </Link>
        </Container>
      </div>
      <JustRideAcademy />
      <ChooseAppointment />
    </>
  );
}

function JustRideAcademy() {
  return (
    <div className="relative h-[120] sm:h-[120px] lg:h-[380px] flex justify-center items-center">
      <div className="absolute inset-0 bg-contain bg-center w-full h-full">
        <Image 
          width={1000} 
          height={400} 
          src="/images/back/back-academy.png" 
          alt="img-bg" 
          className="w-full h-auto"
          sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 75vw, 
         50vw" 
         layout="responsive" 
          />
      </div>
      <div className='absolute top-1/2 right-0 transform translate-y-[20%] sm:translate-y-[45%] -translate-x-1/2 lg:translate-y-[20%] w-[70px] sm:w-[150px] lg:w-[200px]'>
        <Image 
          width={200}
          height={200}
          src='/images/logo/js-academy.png' 
          alt='just-ride-academy' 
          className='w-full' 
          />
      </div>
      <div className='absolute top-[41%] left-[34%] transform -translate-x-1/2 -translate-y-[40%] sm:translate-y-[35%] lg:-translate-y-1/2 max-w-[200px] sm:max-w-[100px] md:max-w-[400px]  lg:max-w-[700px]'>
        <Image 
          width={400}
          height={200}
          src='/images/typo-flat/reserveez.png' 
          alt='reserver' 
          className='w-full' 
          />
      </div>
    </div>
  );
}

function ChooseAppointment() {
  const appointments = [
    { title: "STAGE PILOTAGE DE MOTO EN CIRCUIT", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", buttonText: "PROGRAMMER" },
    { title: "SESSION MINI SM", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", buttonText: "PROGRAMMER" },
    { title: "STAGE D’APPRENTISSAGE DEBUTANT", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", buttonText: "PROGRAMMER" },
    { title: "STAGE D’APPRENTISSAGE DEBUTANT", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", buttonText: "PROGRAMMER" }
  ];

  return (
    <section className="text-center px-4 sm:px-10 pb-8 pt-[10px] sm:pt-[10px] lg:pt-[0px]">
      <Container className='sm:mt-40'>
      <h2 className="text-2xl font-bold">CHOISISSEZ UN RENDEZ-VOUS</h2>
      {/* <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
        <button className="text-2xl">&lt;</button>
        {appointments.map((appointment, index) => (
          <div key={index} className="text-center max-w-xs sm:max-w-sm p-4">
            <h3 className="font-bold text-lg border-b-2 border-accent pb-2">{appointment.title}</h3>
            <p className="text-gray-700 my-2">{appointment.description}</p>
            <button className="bg-accent text-black font-bold px-4 py-2 rounded-lg mt-2">{appointment.buttonText}</button>
          </div>
        ))}
        <button className="text-2xl">&gt;</button>
      </div> */}
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mt-4"
    >
      <CarouselContent className="-ml-1">
        {appointments.map((appointment, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-5 flex flex-col rounded-lg gap-4 h-full text-sm">
              <h3 className="h-9 mt-4 flex flex-col justify-start">
                <span className="text-md text-start font-bold mb-2">{appointment.title}</span>
                <span className="border-b-4 border-accent h-1 w-10 block" />
              </h3>
              <div className="text-gray-700 mb-2  leading-relaxed">
                <p className="text-md w-full text-start">{appointment.description}</p>
                <div className='flex justify-end mr-8'>
                <Link 
                  className="mt-2 text-xs flex gap-2 bg-accent font-bold rounded-md text-black px-1" 
                  href={'/contactez-nous'}
                  >
                  Programmer
                </Link>
                </div>
              </div>
            
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious
          previewArrow={
            <div className="w-8 h-8 bg-black clip-path-triangle-left" />
          }
      />
      <CarouselNext
          nextArrow={
            <div className="w-8 h-8 bg-black clip-path-triangle-right" />
          }
      />
    </Carousel>
      </Container>
    </section>
  );
}
