"use client";
import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import { useState, useEffect } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css/pagination";
import '@/styles/swipper.css';

const imageFocus = [
  {
    src: "/images/pub/fauxpub1.jpg",
    alt: "Image-focus",
    href: "#", 
  },
  {
    src: "/images/pub/fauxpub2.jpg",
    alt: "Image-focus",
    href: "#",
  },
  {
    src: "/images/pub/fauxpub3.jpg",
    alt: "Image-focus",
    href: "#",
  },
];

export default function PubActu() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
      let loadedImages = 0;
      imageFocus.forEach((image) => {
        const img = new window.Image();
        img.src = image.src;
        img.onload = () => {
          loadedImages++;
          if (loadedImages === imageFocus.length) {
            setIsReady(true); 
          }
        };
      });
    }, []);
  return (
    <Container className="mt-0">
    {/* <div className="relative w-full mb-0">
      <Image
        src="/images/actualite/fau-pub.jpg"
        alt="publicité pour les evenements"
        width={1400} // Augmente la largeur
        height={500} // Ajuste la hauteur
        className="w-full h-auto object-cover shadow-lg"
      />
      
    </div>
    <div className="relative w-full mb-0">
    <Image
        src="/images/actualite/fau-pub.jpg"
        alt="publicité pour les evenements"
        width={1400} // Augmente la largeur
        height={500} // Ajuste la hauteur
        className="w-full h-auto object-cover shadow-lg"
      />
      </div> */}
       {!isReady ? (
            <div><FocusLoading/></div>
          ):
          (
            <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1} 
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              640: { 
                slidesPerView: 1,
              },
              1024: {  // Pour les grands écrans (ordinateurs)
                slidesPerView: 2,  // Affiche 3 images sur les grands écrans
              },
            }}
            className="rounded-sm shadow-lg bg-inherit"
          >
            {
              imageFocus.map((image, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <Link href={image.href} className="w-full block ">
                  <div className="flex justify-center items-center">

                  {/* responsive amle sary niala className="w-full object-fill h-[15rem] lg:h-[19rem] sm:h-[20rem] md:h-[20rem]"*/}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      
                      width={700}
                      height={350}
                      loading="eager"
                      priority
                      className="w-full object-cover mix-blend-multiply"
                    />
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            }
          </Swiper>
          )
          }
    </Container>
  );
}

function FocusLoading(){
  return (
    <div className="flex flex-col  animate-pulse gap-3">
    <div className="w-full sm:hidden grid grid-cols-2 gap-3">
      <div className="bg-gray-200 rounded-sm h-[10rem] w-full"></div>
      <div className="bg-gray-200 rounded-sm w-full h-[10rem]"></div>
    </div>
    <div className="w-full hidden sm:grid grid-cols-3 gap-3">
      <div className="bg-gray-200 rounded-sm h-[18.75rem] w-full"></div>
      <div className="bg-gray-200 rounded-sm h-[18.75rem] w-full"></div>
      <div className="bg-gray-200 rounded-sm h-[18.75rem] w-full"></div>
      
    </div>
  </div>
  )
}