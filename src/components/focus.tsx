"use client";
{/* 
import React, { useEffect, useState } from "react";
import Container from "./container";
import FocusIcon from "./icons/focus-icon";
import YourCalendarIcon from "./icons/vos-calendrier-icon";
import Calendar from "./calendar";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, } from "swiper/modules";

import "swiper/css/pagination";
import '@/styles/swipper.css';
// import "swiper/css/navigation";

type WeattherDisplay = {
  temperature: string;
  feelsLike: string;
  description: string;
  icon: string;
}

type WeatherCode = 0 | 1 | 2 | 3 | 45 | 48 | 51 | 53 | 55 | 61 | 63 | 65 | 80 | 81 | 82 | 95 | 99;
const countryInfo = {
  name : 'Antananarivo',
  coords: {
    lat: -18.908480,
    long: 47.537510
  }
}

const weatherDescriptions = {
  0: { text: "Ciel dégagé", icon: "☀️" },
  1: { text: "Faiblement nuageux", icon: "🌤️" },
  2: { text: "Partiellement nuageux", icon: "⛅" },
  3: { text: "Nuageux", icon: "☁️" },
  45: { text: "Brouillard", icon: "🌫️" },
  48: { text: "Brouillard givrant", icon: "🌫️" },
  51: { text: "Bruine légère", icon: "🌦️" },
  53: { text: "Bruine", icon: "🌦️" },
  55: { text: "Forte bruine", icon: "🌧️" },
  61: { text: "Pluie légère", icon: "🌧️" },
  63: { text: "Pluie modérée", icon: "🌧️" },
  65: { text: "Pluie forte", icon: "🌧️" },
  80: { text: "Averses légères", icon: "🌦️" },
  81: { text: "Averses modérées", icon: "🌧️" },
  82: { text: "Averses fortes", icon: "🌧️" },
  95: { text: "Orage", icon: "⛈️" },
  99: { text: "Orage violent", icon: "⛈️" }
};

const imageFocus = [
  {
    src: "/images/accueil/IMG-20250313-WA0018.webp",
    alt: "Image-focus",
    href: "/focusdetailcasque", 
  },
  {
    src: "/images/accueil/IMG-20250313-WA0017.webp",
    alt: "Image-focus",
    href: "/focusdetailcasque",
  },
  {
    src: "/images/accueil/IMG-20250313-WA0020.webp",
    alt: "Image-focus",
    href: "/focusdetailcasque",
  },
  {
    src: "/images/accueil/IMG-20250313-WA0018.webp",
    alt: "Image-focus",
    href: "/focusdetailcasque", 
  },
  {
    src: "/images/accueil/IMG-20250313-WA0017.webp",
    alt: "Image-focus",
    href: "/focusdetailcasque",
  },
    
]

const dataMeteo = {
  'location': 'Antananarivo',
  'temperature': '25',
  'weather': 'Ciel dégagé', 
}

export default function Focus() {
  return (
    <section className="-mt-10">
      <Container className="flex flex-col lg:flex-row gap-8 h-auto w-full mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-7xl 2xl:max-w-8xl">
       
        <section className="w-full lg:lg:w-[70%]">
          <h2 className="text-3xl md:text-4xl font-bold text-center ">{'FOCUS ARRIVAGE'}</h2>
          {/* <div className="flex flex-col md:flex-row gap-4 mt-10"> 
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            // navigation
            loop
            className="rounded-sm shadow-lg"
          >
            {
              imageFocus.map((image, index) => (
                <div key={index} className={clsx(
                  // index === 1 && 'shadow-[10px_-10px_7px_-2px_rgba(0,_0,_0,_0.2)]'
                )}>
                  <SwiperSlide key={index}>
                    <Link href={image.href}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain"
                        width={300}
                        height={300}
                        loading="lazy"
                        objectFit="contain"
                    
                      />
                    </Link>
                  </SwiperSlide>
                </div>
              ))

            }
          {/* </div> 
          </Swiper>
        </section>
      <aside className="relative top-0 lg:-top-36 lg:w-[30%]">
        <YourCalendar />
      </aside>
      </Container>
    </section>
  );
}

function YourCalendar() {
  return (
    <div>
      <div className="bg-accent p-2 w-full">
        <div className="relative mx-auto max-w-2xl">
          <YourCalendarIcon />
          <h3 className="absolute bottom-2 left-10 uppercase font-semibold">
            Event - Rides - Sorties - Courses
          </h3>
        </div>
        <Calendar />
        <div className="mt-2">
          <ListEvent />
        </div>
        <div className="mt-2 mx-auto max-w-2xl">
          <Meteo data={dataMeteo} />
        </div>
      </div>
    </div>
  );
}

function ListEvent() {
  const events = [
    { date: "05.01.25", title: "Rides Ampefy" },
    { date: "05.01.25", title: "Rides Ampefy" },
    { date: "05.01.25", title: "Rides Ampefy" },
    { date: "05.01.25", title: "Rides Ampefy" },
  ];

  return (
    <div className="max-w-2xl mx-auto py-2 bg-white shadow rounded-md b700order-yellow-">
      <ul>
        {events.map((event, index) => (
          <li key={index} className="flex justify-center items-center text-black">
            <span className="text-xs mr-1">{event.date}:</span>
            <span className="font-bold text-sm px-2"> {event.title}</span>
            <a href="#" className="text-gray-500 text-xs hover:text-black transition">
              Voir suite &raquo;&raquo;&raquo;
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Meteo({
  data
}: {
  data:{
    location: string,
    temperature: string,
    weather: string,
    
    }
}){
  const [weather, setWeather] = useState< WeattherDisplay | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${countryInfo.coords.lat}&longitude=${countryInfo.coords.lat}&current_weather=true`;
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();

        const code = data.current_weather.weathercode as WeatherCode;
        setWeather({
          temperature: data.current_weather.temperature,
          feelsLike: data.current_weather.temperature, // Open-Meteo don't give  "ressentie"
          description: weatherDescriptions[code]?.text || "Inconnu",
          icon: weatherDescriptions[code]?.icon || "❓"
        });
      } catch (error) {
        console.error("Erreur météo :", error);
      }finally{
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, []);

 
  return (
    <div className="bg-blue-400 p-3 w-full h-[100px] rounded-md text-white">
      {
        isLoading && (
          <MeteoLoading />
        )
      }
      {weather && !isLoading && <>
        <h3 className="text-xs uppercase">{countryInfo.name}</h3>
        <div className="flex justify-between items-center w-[95%] mt-2">
          <div className="flex flex-row items-center gap-2">
            <div className="flex relative flex-row items-center h-[45px]">
              <div className="text-[3rem] relative">
                {Math.round(parseFloat(weather.temperature))}
              </div>
              <div className="flex flex-col items-center h-auto">
              <span className="text-[3rem] h-10 font-thin">°</span>
              <span className="text-[1.3rem] relative bottom-[11px]">C</span>
              </div>

              
              
            </div>
            <div className="flex flex-col">
              <p className="text-xs">{weather.description}</p>
              <p className="text-xs">Sensation thermique de {Math.round(parseFloat(weather.feelsLike))}°</p>
            </div>
          </div>
          <div className="text-[2.5rem]">
            {weather.icon}
          </div>
        </div>
      </>}
      {!weather && !isLoading && (
        <p className="text-xs">
          Erreur lors de la récupération des données météo.
        </p>
      )}

    </div>
  )
}

function MeteoLoading(){
  return (
    <div className="flex flex-col  animate-pulse gap-3">
    <div className="w-[20%] h-4 bg-gray-200 rounded-sm"></div> 
    <div className="flex justify-between">
      <div className="flex flex-row gap-2 w-[50%]">
        <div className="w-[20%] h-10 bg-gray-200 rounded-sm "></div>
        <div className="w-[50%] h-10 bg-gray-200 rounded-sm"></div>
      </div>
      <div className="w-11 h-11 rounded-full bg-gray-200"></div>
    </div>   
  </div>
  )
}
*/}

import React, { useEffect, useState } from "react";
import Container from "./container";
import FocusIcon from "./icons/focus-icon";
import YourCalendarIcon from "./icons/vos-calendrier-icon";
import Calendar from "./calendar";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css/pagination";
import '@/styles/swipper.css';

type WeattherDisplay = {
  temperature: string;
  feelsLike: string;
  description: string;
  icon: string;
}

type WeatherCode = 0 | 1 | 2 | 3 | 45 | 48 | 51 | 53 | 55 | 61 | 63 | 65 | 80 | 81 | 82 | 95 | 99;
const countryInfo = {
  name: 'Antananarivo',
  coords: {
    lat: -18.908480,
    long: 47.537510
  }
}

const weatherDescriptions = {
  0: { text: "Ciel dégagé", icon: "☀️" },
  1: { text: "Faiblement nuageux", icon: "🌤️" },
  2: { text: "Partiellement nuageux", icon: "⛅" },
  3: { text: "Nuageux", icon: "☁️" },
  45: { text: "Brouillard", icon: "🌫️" },
  48: { text: "Brouillard givrant", icon: "🌫️" },
  51: { text: "Bruine légère", icon: "🌦️" },
  53: { text: "Bruine", icon: "🌦️" },
  55: { text: "Forte bruine", icon: "🌧️" },
  61: { text: "Pluie légère", icon: "🌧️" },
  63: { text: "Pluie modérée", icon: "🌧️" },
  65: { text: "Pluie forte", icon: "🌧️" },
  80: { text: "Averses légères", icon: "🌦️" },
  81: { text: "Averses modérées", icon: "🌧️" },
  82: { text: "Averses fortes", icon: "🌧️" },
  95: { text: "Orage", icon: "⛈️" },
  99: { text: "Orage violent", icon: "⛈️" }
};

const imageFocus = [
  {
    src: "/images/accueil/IMG-20250313-WA0018.webp",
    alt: "Image-focus",
    href: "/focusdetailcasque", 
  },
  {
    src: "/images/accueil/IMG-20250313-WA0017.webp",
    alt: "Image-focus",
    href: "/focusdetailblouson",
  },
  {
    src: "/images/accueil/IMG-20250313-WA0020.webp",
    alt: "Image-focus",
    href: "/focusdetailpantalon",
  },
  {
    src: "/images/accueil/bell.jpg",
    alt: "Image-focus",
    href: "/focusdetailbelltrois", 
  },
  {
    src: "/images/accueil/veste.jpg",
    alt: "Image-focus",
    href: "/focusdetailveste",
  },
];

const dataMeteo = {
  'location': 'Antananarivo',
  'temperature': '25',
  'weather': 'Ciel dégagé', 
}

export default function Focus() {
  return (
    <section className="-mt-10">
      <Container className="flex flex-col lg:flex-row gap-8 h-auto w-full mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-7xl 2xl:max-w-8xl">
        <section className="w-full lg:w-[70%]">
          <h2 className="text-3xl md:text-4xl font-bold text-center">{'FOCUS ARRIVAGE'}</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}  // Affiche une seule image sur mobile par défaut
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              640: {  // Pour les écrans plus larges (tablettes)
                slidesPerView: 1,
              },
              1024: {  // Pour les grands écrans (ordinateurs)
                slidesPerView: 3,  // Affiche 3 images sur les grands écrans
              },
            }}
            className="rounded-sm shadow-lg"
          >
            {
              imageFocus.map((image, index) => (
                <SwiperSlide key={image.src}>
                  <Link href={image.href}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                      width={300}
                      height={300}
                      loading="lazy"
                      objectFit="contain"
                    />
                  </Link>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </section>
        
        <aside className="relative top-0 lg:-top-36 lg:w-[30%]">
          <YourCalendar />
        </aside>
      </Container>
    </section>
  );
}

function YourCalendar() {
  return (
    <div>
      <div className="bg-accent p-2 w-full">
        <div className="relative mx-auto max-w-2xl">
          <YourCalendarIcon />
          <h3 className="absolute bottom-2 left-10 uppercase font-semibold">
            Event - Rides - Sorties - Courses
          </h3>
        </div>
        <Calendar />
        <div className="mt-2">
          <ListEvent />
        </div>
        <div className="mt-2 mx-auto max-w-2xl">
          <Meteo data={dataMeteo} />
        </div>
      </div>
    </div>
  );
}

function ListEvent() {
  const events = [
    { date: "05.01.25", title: "Rides Ampefy" },
  ];

  return (
    <div className="max-w-2xl mx-auto py-2 bg-white shadow rounded-md">
      <ul>
        {events.map((event, index) => (
          <li key={index} className="flex justify-center items-center text-black">
            <span className="text-xs mr-1">{event.date}:</span>
            <span className="font-bold text-sm px-2"> {event.title}</span>
            <a href="/just-rent" className="text-gray-500 text-xs hover:text-black transition">
              Voir la suite &raquo;&raquo;&raquo;
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Meteo({ data }: { data: { location: string, temperature: string, weather: string } }) {
  const [weather, setWeather] = useState<WeattherDisplay | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${countryInfo.coords.lat}&longitude=${countryInfo.coords.lat}&current_weather=true`;
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        const code = data.current_weather.weathercode as WeatherCode;
        setWeather({
          temperature: data.current_weather.temperature,
          feelsLike: data.current_weather.temperature, // Open-Meteo don't give "ressentie"
          description: weatherDescriptions[code]?.text || "Inconnu",
          icon: weatherDescriptions[code]?.icon || "❓"
        });
      } catch (error) {
        console.error("Erreur météo :", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="bg-blue-400 p-3 w-full h-[100px] rounded-md text-white">
      {
        isLoading && (
          <MeteoLoading />
        )
      }
      {weather && !isLoading && <>
        <h3 className="text-xs uppercase">{countryInfo.name}</h3>
        <div className="flex justify-between items-center w-[95%] mt-2">
          <div className="flex flex-row items-center gap-2">
            <div className="flex relative flex-row items-center h-[45px]">
              <div className="text-[3rem] relative">
                {Math.round(parseFloat(weather.temperature))}
              </div>
              <div className="flex flex-col items-center h-auto">
                <span className="text-[3rem] h-10 font-thin">°</span>
                <span className="text-[1.3rem] relative bottom-[11px]">C</span>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-md font-bold">{weather.description}</span>
              <span className="text-xs font-thin">{weather.feelsLike}°C Ressentie</span>
            </div>
          </div>
          <div className="text-4xl">
            {weather.icon}
          </div>
        </div>
      </>}
    </div>
  );
}

function MeteoLoading() {
  return <div>Loading...</div>;
}

