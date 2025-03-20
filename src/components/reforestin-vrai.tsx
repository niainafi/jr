"use client";
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

export default function ReforestinEventVrai() {
  return (
    <Container className="my-4">
      {/* Premier Carousel */}
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
            <div className="bg-accent relative px-5 h-auto lg:h-[120px] xl:h-[180px] 2xl:h-[300px] flex lg:flex-row flex-col">
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
                {/* Boutons */}
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
        {/* Flèches de navigation blanches sans rond */}
        <div className="swiper-button-prev text-white absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2">
          <FaChevronLeft size={30} />
        </div>
        <div className="swiper-button-next text-white absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2">
          <FaChevronRight size={30} />
        </div>
      </Swiper>

      {/* Deuxième Carousel */}
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2",
        }}
        modules={[Navigation]}
        className="relative mt-12"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="bg-accent relative px-5 h-auto lg:h-[120px] xl:h-[180px] 2xl:h-[300px] flex lg:flex-row-reverse flex-col">
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
              <div className="text-white py-4 lg:mr-5 flex flex-col items-start md:items-start text-center md:text-left w-full lg:w-[73%] min-h-full lg:justify-between ml-[2cm]">
                <div className="">
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
                {/* Boutons */}
                <div className="mt-4 flex flex-col md:flex-row justify- space-y-3 md:space-y-0 md:space-x-4 w-full">
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
        {/* Flèches de navigation blanches sans rond */}
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
