"use client";
 {/* 
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

                  {/* responsive amle sary niala className="w-full object-fill h-[15rem] lg:h-[19rem] sm:h-[20rem] md:h-[20rem]"
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
*/}


import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css/pagination";
import '@/styles/swipper.css';

interface AdItem {
  _id: string;
  image: string;
  __v?: number; // Optionnel car pas utilisé dans notre code
}

const API_URL = "https://justride.up.railway.app/api/publicite-a";

export default function PubActu() {
  const [ads, setAds] = useState<AdItem[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des publicités');
        }
        
        const data: unknown = await response.json();
        
        // Validation du type des données
        if (!Array.isArray(data)) {
          throw new Error('Les données reçues ne sont pas valides');
        }

        const validAds = data.filter((item: any): item is AdItem => {
          return typeof item === 'object' && 
                 item !== null && 
                 typeof item._id === 'string' && 
                 typeof item.image === 'string';
        });

        setAds(validAds);
        
        if (validAds.length > 0) {
          let loadedImages = 0;
          const totalImages = validAds.length;
          
          validAds.forEach((item) => {
            const img = new window.Image();
            img.src = item.image;
            img.onload = () => {
              loadedImages++;
              if (loadedImages === totalImages) {
                setIsReady(true);
                setIsLoading(false);
              }
            };
            img.onerror = () => {
              loadedImages++;
              if (loadedImages === totalImages) {
                setIsReady(true);
                setIsLoading(false);
              }
            };
          });
        } else {
          setIsReady(true);
          setIsLoading(false);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur inconnue est survenue');
        setIsLoading(false);
        setIsReady(true);
      }
    };

    fetchAds();
  }, []);

  if (error) {
    return (
      <Container className="mt-0">
        <div className="text-red-500">Erreur: {error}</div>
      </Container>
    );
  }

  return (
    <Container className="mt-0">
      {isLoading ? (
        <div><FocusLoading/></div>
      ) : (
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1} 
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={ads.length > 1}
          breakpoints={{
            640: { 
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: ads.length >= 2 ? 2 : 1,
            },
          }}
          className="shadow-lg bg-inherit"
        >
          {ads.map((item) => (
            <SwiperSlide key={item._id} className="h-auto">
              <Link href="#" className="w-full block">
                <div className="flex justify-center items-center">
                  <Image
                    src={item.image}
                    alt="Publicité JustRide"
                    width={700}
                    height={350}
                    loading="eager"
                    priority
                    className="w-full h-[14rem] lg:h-[16rem] 2xl:h-[22rem] sm:h-[20rem] md:h-[20rem]"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  );
}

function FocusLoading() {
  return (
    <div className="flex flex-col animate-pulse gap-3">
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
  );
}