"use client";
{/*
// export default function ReforestinEvent() {
//   const eventDate = new Date("2025-03-08T00:00:00").getTime();
//   const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

//   useEffect(() => {
//     setTimeLeft(getTimeLeft(eventDate));

//     const interval = setInterval(() => {
//       setTimeLeft(getTimeLeft(eventDate));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [eventDate]);

//   if (!timeLeft) {
//     return (
//       <div className="flex flex-col items-center justify-center">
//         <p className="font-bold mt-6">Chargement...</p>
//       </div>
//     );
//   }

//   return (
//     <Container>
//       <div
//         className="relative px-5 h-auto lg:h-[200px] xl:h-[320px] 2xl:h-[350px] flex lg:flex-row flex-col 
//         bg-mobile lg:bg-none lg:bg-accent  lg:bg-opacity-20 z-0 before:absolute before:inset-0 before:bg-accent before:opacity-50 before:z-[-1]"
//       >
//         {/* Section Image pour grands écrans */}
//         <div className="relative hidden w-full md:w-[35%] lg:flex justify-center min-h-full">
//           <Image
//             src="/images/evenement/reforestin.webp"
//             alt="Reforest'in Ankadindriana"
//             width={500}
//             height={350}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Section Texte */}
//         <div className="text-white py-4 lg:ml-5 flex flex-col items-start md:items-start text-center md:text-left w-full lg:w-[73%] min-h-full">
//           <div className="flex flex-col w-full items-start">
//             <p className="text-xs uppercase font-bold pb-1 inline-block">
//               08-09 Mars 2025
//             </p>
//             <span className="border-2 bg-white h-1 max-w-[130px] w-full" />
//           </div>
//           <h2 className="text-xl text-start md:text-xl font-bold my-5">{`REFOREST’IN ANKADINANDRIANA`}</h2>
//           <p className="text-base md:text-lg text-start font-bold">{`Être motard et Eco responsable, c'est possible !`}</p>
//           <p className="text-lg mt-2 max-w-2xl text-start leading-6">
//             {`Fantaro fa isaky ny kilometatra diavinao dia misy fiantraikany amin’ny tontolo iainana. `}
//             Izao anefa <span className="font-bold">✊</span> manana fahefana
//             isika
//           </p>

//           {/* Countdown Timer */}
//           <p className="text-3xl md:text-5xl font-bold mt-5">
//             {`${timeLeft.days}j ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
//           </p>

//           {/* Boutons */}
//           <div className="mt-4 flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-4 w-full">
//             <Link
//               href="/contactez-nous"
//               className="bg-white text-accent rounded-md w-full md:w-auto text-center font-bold px-1"
//             >
//               INSCRIVEZ-VOUS
//             </Link>
//             <Link
//               href="/just-rent"
//               className="bg-white text-accent rounded-md  w-full md:w-auto text-center font-bold flex flex-row items-center justify-center gap-1 px-1"
//             >
//               <span>LOUEZ VOTRE</span>
//               <span className="font-extrabold mb-[2px]">
//                 <Image
//                   height={35}
//                   width={110}
//                   src={"/images/logo/royal-enfield.webp"}
//                   alt="just ride moto royal enfield"
//                   objectFit="contain"
//                   loading="lazy"
//                 />
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }

{/*
import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./container";
import Link from "next/link";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(eventDate: number): TimeLeft {
  const now = new Date().getTime();
  const difference = eventDate - now;

  if (difference <= 0) {
    // Si l'événement est passé, afficher 0
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}
export default function ReforestinEvent() {
  const eventDate = new Date("2025-03-08T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(eventDate));

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(eventDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  if (!timeLeft) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold mt-6">Chargement...</p>
      </div>
    );
  }

  return (
    <Container className="my-14">
    <div className="bg-accent relative px-5 h-auto lg:h-[150px] xl:h-[220px] 2xl:xl:h-[360px] flex lg:flex-row flex-col">
      {/* Section Image 
      <div className="relative w-full lg:w-[35%]  flex justify-center min-h-full">
        <Image
          src="/images/evenement/reforestin.webp"
          alt="Reforest'in Ankadindriana"
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
              08-09 Mars 2025
            </p>
            <span className="border-2 bg-white h-1 max-w-[130px] w-full" />
          </div>
          <h2 className="text-xl text-start md:text-xl font-bold my-5">{`REFOREST’IN ANKADINANDRIANA`}</h2>
          <p className="text-base md:text-lg text-start font-bold">{`Être motard et Eco responsable, c'est possible !`}</p>
          <p className="text-lg mt-2 max-w-2xl text-start leading-6">
            {`Fantaro fa isaky ny kilometatra diavinao dia misy fiantraikany amin’ny tontolo iainana. `}
            Izao anefa <span className="font-bold">✊</span> manana fahefana
            isika
          </p>

          {/* Countdown Timer 
          <p className="text-3xl md:text-5xl text-start font-bold mt-5">
            {`${timeLeft.days}j ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
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
    </Container>
  );
}
*/}


{/*
import { useEffect, useState } from "react";
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
    date: "08-09 Mars 2025",
    title: "REFOREST’IN ANKADINANDRIANA",
    description:
      "Être motard et Eco responsable, c'est possible ! Fantaro fa isaky ny kilometatra diavinao dia misy fiantraikany amin’ny tontolo iainana. Izao anefa ✊ manana fahefana isika",
    image: "/images/evenement/reforestin.webp",
  },
  {
    date: "15-16 Avril 2025",
    title: "GRAND RALLYE DES MOTARDS",
    description:
      "Un événement incontournable pour les passionnés de moto ! Rejoignez-nous pour une aventure exceptionnelle sur les routes malgaches.",
    image: "/images/evenement/reforestin.webp",
  },
  {
    date: "20-21 Mai 2025",
    title: "TOURISME À MOTO",
    description:
      "Découvrez Madagascar autrement, en sillonnant ses routes à moto. Un mélange unique entre aventure et découverte culturelle !",
    image: "/images/evenement/reforestin.webp",
  },
];

export default function ReforestinEvent() {
  return (
    <Container className="my-14">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="relative"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="bg-accent relative px-5 h-auto lg:h-[150px] xl:h-[220px] 2xl:h-[360px] flex lg:flex-row flex-col">
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
                      {event.date}
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
        {/* Flèches de navigation blanches 
        <div className="swiper-button-prev text-white absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <FaChevronLeft size={30} />
        </div>
        <div className="swiper-button-next text-white absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <FaChevronRight size={30} />
        </div>
      </Swiper>
    </Container>
  );
}*/}

import { useEffect, useState } from "react";
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
 
];

export default function ReforestinEvent() {
  return (
    <Container className="my-14">
      {/* Premier Carousel */}
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="relative"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="bg-accent relative px-5 h-auto lg:h-[150px] xl:h-[250px] 2xl:h-[360px] flex lg:flex-row flex-col">
              {/* Section Image */}
              <div className="relative w-full lg:w-[35%] flex justify-center min-h-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={500}
                  height={350}
                  className="w-full h-full object-cover lg:object-contain"
                />
              </div>
              {/* Section Texte */}
              <div className="text-white py-4 lg:ml-5 flex flex-col items-start md:items-start text-center md:text-left w-full lg:w-[73%] min-h-full lg:justify-between">
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
        {/* Flèches de navigation blanches */}
        <div className="swiper-button-prev text-white absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <FaChevronLeft size={30} />
        </div>
        <div className="swiper-button-next text-white absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <FaChevronRight size={30} />
        </div>
      </Swiper>

      
    </Container>
  );
}
