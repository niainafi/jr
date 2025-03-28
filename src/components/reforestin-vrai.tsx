"use client"
  {/* import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const events = [
 

  {
    image: "/images/evenement/BADASS.jpg",
    title: "évènement BADASS",
    description: 
    <div className="flex flex-col gap-3">
      <p>{`On se bouge`}</p>
      <p>{`Ultra excité d'accueillir cette Édition 2 de GASY METALHEAD SHOW !!!`}</p>
      <p><span>{`Certain aussi que ce line-up de dingue fera trembler la fosse du Local Coffee-Bar-Cult avec l'arrivée du groupe mauricien`}</span> <span className="text-blue-700">Ryōshi</span> . Ils se partageront la scène avec bien sur<span/><span className="text-blue-800"> LohArano | GREY | WEST Bullet </span> </p>
      <p>{`Du rock et du métal pour lancer les hostilités`} </p> 
      <p>{`Rendez-vous en Avril !`}</p>

    </div>

  },
  {
    image: "/images/evenement/DGR.jpg",
    title: "DGR",
    description:
      "Cette année, nous célébrons une décennie de soutien au cancer de la prostate et à la santé mentale des hommes avec Movember, et 12 ans de partenariat avec le remarquable fabricant de motos, Triumph Motorcycles, qui continue de soutenir nos collectes de fonds avec certains des prix les plus impressionnants de tout événement caritatif. Chaque année, des milliers de motards s'habillent de leurs plus beaux vêtements et conduisent leur moto de style classique pour deux des plus grandes causes au monde, le cancer de la prostate et la santé mentale des hommes, collecte de fonds pour Movember.",
  },
 
];

export default function ReforestinEventVrai() {
  return (
    <Container className="my-4">
      {/* Premier Carousel 
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="relative mt-6"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="bg-accent relative px-5 h-auto lg:h-[120px] xl:h-[180px] 2xl:h-[350px] flex lg:flex-row flex-col">
              {/* Section Image 
              <div className="relative w-full lg:w-[35%] flex justify-center min-h-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={500}
                  height={350}
                  className="w-full h-full object-cover lg:object-contain"
                />
              </div>
              {/* Section Texte 
              <div className="text-white py-4 lg:ml-5 flex flex-col items-start md:items-start text-center md:text-left w-full lg:w-[73%] min-h-full lg:justify-between">
                <div>
                  <div className="flex flex-col w-full items-start">
                    <p className="text-xs uppercase font-bold pb-1 inline-block">
                      
                    </p>
                    <span className="border-2 bg-white h-1 max-w-[130px] w-full" />
                  </div>
                  <h2 className="text-xl text-start md:text-xl font-bold my-5">
                    {event.title}
                  </h2>
                  <p className="text-lg mt-2 max-w-2xl text-start leading-6">
                    {event.description}
                  </p>
                </div>
                {/* Boutons 
                <div className="mt-4 flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-4 w-full">
                  <Link
                    href="/contactez-nous"
                    className="bg-white text-accent rounded-md w-full md:w-auto text-center font-bold px-1"
                  >
                    INSCRIVEZ-VOUS
                  </Link>
                  <Link
                    href="/just-rent"
                    className="bg-white text-accent rounded-md  w-full md:w-auto text-center font-bold flex flex-row items-center justify-center gap-1 px-1"
                  >
                    <span>LOUEZ VOTRE</span>
                    <span className="font-extrabold mb-[2px]">
                      <Image
                        height={35}
                        width={110}
                        src={"/images/logo/royal-enfield.webp"}
                        alt="just ride moto royal enfield"
                        objectFit="contain"
                        loading="lazy"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Flèches de navigation blanches sans rond 
        <div className="swiper-button-prev text-white absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2">
          <FaChevronLeft size={30} />
        </div>
        <div className="swiper-button-next text-white absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2">
          <FaChevronRight size={30} />
        </div>
      </Swiper>

      

{/* Deuxième Carousel*/}
{/* Deuxième Carousel 
<Swiper
  navigation={{
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  }}
  modules={[Navigation]}
  className="relative mt-12"
>
  {[
   
    {
      image: "/images/evenement/DGR.jpg",
      title: "DGR",
      description:
        "Cette année, nous célébrons une décennie de soutien au cancer de la prostate et à la santé mentale des hommes avec Movember, et 12 ans de partenariat avec le remarquable fabricant de motos, Triumph Motorcycles, qui continue de soutenir nos collectes de fonds avec certains des prix les plus impressionnants de tout événement caritatif. Chaque année, des milliers de motards s'habillent de leurs plus beaux vêtements et conduisent leur moto de style classique pour deux des plus grandes causes au monde, le cancer de la prostate et la santé mentale des hommes, collecte de fonds pour Movember.",
    },

    {
      image: "/images/evenement/BADASS.jpg",
      title: "évènement BADASS",
      description: 
      <div className="flex flex-col gap-3">
        <p>{`On se bouge`}</p>
        <p>{`Ultra excité d'accueillir cette Édition 2 de GASY METALHEAD SHOW !!!`}</p>
        <p><span>{`Certain aussi que ce line-up de dingue fera trembler la fosse du Local Coffee-Bar-Cult avec l'arrivée du groupe mauricien`}</span> <span className="text-blue-700">Ryōshi</span> . Ils se partageront la scène avec bien sur<span/><span className="text-blue-800"> LohArano | GREY | WEST Bullet </span> </p>
        <p>{`Du rock et du métal pour lancer les hostilités`} </p> 
        <p>{`Rendez-vous en Avril !`}</p>
  
      </div>
  
    },
   
    
   
  ].map((event, index) => (
    <SwiperSlide key={index}>
      <div className="bg-accent relative px-5 h-auto lg:h-[120px] xl:h-[180px] 2xl:h-[350px] flex flex-col lg:flex-row-reverse">
        {/* Section Image 
        <div className="relative w-full lg:w-[35%] flex justify-center min-h-full">
          <Image
            src={event.image}
            alt={event.title}
            width={500}
            height={350}
            className="w-full h-full object-cover lg:object-contain"
          />
        </div>
        {/* Section Texte 
        <div className="text-white py-4 lg:mr-5 flex flex-col items-start text-center md:text-left w-full lg:w-[63%] min-h-full lg:justify-between ml-0 lg:ml-[2cm]">
          <div className="flex flex-col w-full items-start">
            <span className="border-2 bg-white h-1 max-w-[130px] w-full" />
          </div>
          <h2 className="text-xl text-start md:text-xl font-bold my-5">
            {event.title}
          </h2>
          <p className="text-lg mt-2 max-w-2xl text-start leading-6">
            {event.description}
          </p>
          {/* Boutons 
          <div className="mt-4 flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-4 w-full">
            
            <Link
              href="/just-rent"
              className="bg-white text-accent rounded-md  w-full md:w-auto text-center font-bold flex flex-row items-center justify-center gap-1 px-1"
            >
              <span>LOUEZ VOTRE</span>
              <span className="font-extrabold mb-[2px]">
                <Image
                  height={35}
                  width={110}
                  src={"/images/logo/royal-enfield.webp"}
                  alt="just ride moto royal enfield"
                  objectFit="contain"
                  loading="lazy"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
  {/* Flèches de navigation blanches sans rond
  <div className="swiper-button-prev2 text-white absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2">
    <FaChevronLeft size={30} />
  </div>
  <div className="swiper-button-next2 text-white absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2">
    <FaChevronRight size={30} />
  </div>
</Swiper>



    </Container>
  );
}
  */}
  import { useEffect, useState } from "react";
  import Image from "next/image";
  import Container from "./container";
  import Link from "next/link";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/css";
  import "swiper/css/navigation";
  import { Navigation } from "swiper/modules";
  import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
  
  const events1 = [
    {
      image: "/images/evenement/DGR.jpg",
      title: "DGR",
      description:
        "Cette année, nous célébrons une décennie de soutien au cancer de la prostate et à la santé mentale des hommes avec Movember, et 12 ans de partenariat avec le remarquable fabricant de motos, Triumph Motorcycles, qui continue de soutenir nos collectes de fonds avec certains des prix les plus impressionnants de tout événement caritatif. Chaque année, des milliers de motards s'habillent de leurs plus beaux vêtements et conduisent leur moto de style classique pour deux des plus grandes causes au monde, le cancer de la prostate et la santé mentale des hommes, collecte de fonds pour Movember.",
    },
   
  ];
  const events2 = [
    {
      image: "/images/evenement/BADASS.jpg",
      title: "évènement BADASS",
      description: 
      <div className="flex flex-col gap-3">
        <p>{`On se bouge`}</p>
        <p>{`Ultra excité d'accueillir cette Édition 2 de GASY METALHEAD SHOW !!!`}</p>
        <p><span>{`Certain aussi que ce line-up de dingue fera trembler la fosse du Local Coffee-Bar-Cult avec l'arrivée du groupe mauricien`}</span> <span className="text-blue-700">Ryōshi</span> . Ils se partageront la scène avec bien sur<span/><span className="text-blue-800"> LohArano | GREY | WEST Bullet </span> </p>
        <p>{`Du rock et du métal pour lancer les hostilités`} </p> 
        <p>{`Rendez-vous en Avril !`}</p>
  
      </div>
  
    },
   
  ];
  
  export default function ReforestinEvent() {
    return (
      <Container className="mt-14 mb-0">
        {/* Premier Carousel */}
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="relative"
        >
          {events1.map((event, index) => (
            <SwiperSlide key={index} >
              <div className="bg-accent relative px-5 md:h-[600px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] flex lg:flex-row md:flex-row flex-col">
                {/* Section Image */}
                <div className="relative w-full md:w-[58%] sm:w-1/2 lg:w-[35%] flex justify-center min-h-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={500}
                    height={350}
                    className="w-full h-full object-contain lg:object-contain"
                  />
                </div>
                {/* Section Texte */}
                <div className="text-white py-4 lg:ml-5 sm:ml-5 md:ml-5 flex flex-col items-start md:items-start text-center md:text-left w-full lg:w-[73%] min-h-[400px] sm:w-1/2  lg:justify-between">
                  <div>
                    <div className="flex flex-col w-full items-start">
                      <p className="text-xs uppercase font-bold pb-1 inline-block">
                        {}
                      </p>
                      <span className="border-2 bg-white h-1 max-w-[130px] w-full" />
                    </div>
                    <h2 className="text-xl text-start md:text-xl uppercase font-bold my-5">
                      {event.title}
                    </h2>
                    <div className="text-lg mt-2 max-w-2xl text-start leading-6">
                      {event.description}
                    </div>
                  </div>
                  {/* Boutons */}
                  <div className="mt-4 flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-4 w-full">
                    
                    {/*<Link
                      href="/contactez-nous"
                      className="bg-white text-accent rounded-md w-full md:w-auto text-center font-bold px-1"
                    >
                      INSCRIVEZ-VOUS
                    </Link>*/}
                    <Link
                      href="/just-rent"
                      className="bg-white text-accent rounded-md  w-full md:w-auto text-center font-bold flex flex-col py-2 gap-0  sm:py-0 sm:flex-row items-center justify-center sm:gap-1 px-1"
                    >
                      <span>LOUEZ VOTRE</span>
                      <span className="font-extrabold mb-[2px]">
                        <Image
                          height={35}
                          width={110}
                          src={"/images/logo/royal-enfield.webp"}
                          alt="just ride moto royal enfield"
                          objectFit="contain"
                          loading="lazy"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Flèches de navigation blanches */}
          <div className="swiper-button-prev text-white absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <FaChevronLeft size={30} />
          </div>
          <div className="swiper-button-next text-white absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <FaChevronRight size={30} />
          </div>
        </Swiper>
       {/* Deuxième Carousel (Image à droite, texte à gauche) */}
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next-second",
          prevEl: ".swiper-button-prev-second",
        }}
        modules={[Navigation]}
        className="relative mt-10"
      >
        {events2.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="bg-accent relative px-5 md:h-[600px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] flex lg:flex-row-reverse md:flex-row-reverse flex-col">
              {/* Section Image */}
              <div className="relative w-full md:w-[58%] sm:w-1/2 lg:w-[35%] flex justify-center min-h-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={500}
                  height={350}
                  className="w-full h-full object-contain lg:object-contain"
                />
              </div>
              {/* Section Texte */}
              <div className="text-white py-4 lg:mr-5 sm:mr-5 md:mr-5 flex flex-col items-start md:items-start text-center md:text-left w-full lg:w-[73%] min-h-[400px] sm:w-1/2  lg:justify-between">
                <div>
                  <div className="flex flex-col w-full items-start">
                    <p className="text-xs uppercase font-bold pb-1 inline-block">{}</p>
                    <span className="border-2 bg-white h-1 max-w-[130px] w-full" />
                  </div>
                  <h2 className="text-xl text-start md:text-xl uppercase font-bold my-5">
                    {event.title}
                  </h2>
                  <div className="text-lg mt-2 max-w-2xl text-start leading-6">
                    {event.description}
                  </div>
              </div>
               {/* Boutons */}
               <div className="mt-4 flex flex-col md:flex-row justify-start space-y-3 md:space-y-0 md:space-x-4 w-full">
                    
                    {/*<Link
                      href="/contactez-nous"
                      className="bg-white text-accent rounded-md w-full md:w-auto text-center font-bold px-1"
                    >
                      INSCRIVEZ-VOUS
                    </Link>*/}
                    <Link
                      href="https://www.facebook.com/photo?fbid=957012709953924&set=a.382154170773117"
                      className="bg-white text-accent rounded-md  w-full md:w-auto text-center font-bold flex flex-col py-2 gap-0  sm:py-0 sm:flex-row items-center justify-center sm:gap-1 px-1"
                    >
                      <span>{`Lien de l'event BADASS`}</span>
                     
                    </Link>
                  </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Flèches de navigation blanches */}
        <div className="swiper-button-prev-second text-white absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <FaChevronLeft size={30} />
        </div>
        <div className="swiper-button-next-second text-white absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <FaChevronRight size={30} />
        </div>
      </Swiper>

          

      </Container>
    );
  }

