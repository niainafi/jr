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
    src: "/images/pub/faux-pub-horizontal.webp",
    alt: "Image-focus",
    href: "#", 
  },
  {
    src: "/images/pub/faux-pub-horizontal.webp",
    alt: "Image-focus",
    href: "#",
  },
  {
    src: "/images/pub/faux-pub-horizontal.webp",
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
                slidesPerView: 2,
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
                  <Link href={image.href} className="w-full block h-[10.75rem] bg-black">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-fill"
                      width={300}
                      height={300}
                      loading="eager"
                      priority
                    />
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