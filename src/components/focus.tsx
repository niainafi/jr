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
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

import "swiper/css/pagination";
import '@/styles/swipper.css';

type WeattherDisplay = {
  temperature: string;
  feelsLike: string;
  description: string;
  icon: string;
}

type Event = {
  date: string;
  title: string;
  location: string;
  category: string;
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
    src: "/images/accueil/casquebell3.jpg",
    alt: "Image-focus",
    href: "/focusdetailbelltrois", 
  },
  {
    src: "/images/accueil/veste.jpg",
    alt: "Image-focus",
    href: "/focusdetailjack",
  },
];

const dataMeteo = {
  'location': 'Antananarivo',
  'temperature': '25',
  'weather': 'Ciel dégagé', 
}
const events = [
  { date: "2025-02-09", title: "Grand Prix IMC", location: "Terrain IMC Ambohidava", category: "Course du championnat MOTOCROSS" },
  { date: "2025-03-23", title: "Motocross KAWASAKI", location: "Terrain IMC Ambohidava", category: "Course du championnat MOTOCROSS" },
  { date: "2025-04-05", title: "Motocross DISCODIN", location: "Terrain IMC Ambohidava", category: "Course du championnat MOTOCROSS" },
  { date: "2025-04-20", title: "Grand Prix de l'Est", location: "Terrain IMC Ambohidava", category: "Course du championnat MOTOCROSS" },
  { date: "2025-06-28", title: "Grand Prix Ilakaka", location: "Ilakaka", category: "Course du championnat MOTOCROSS" },
  { date: "2025-08-10", title: "Motocross Nosy Be", location: "Nosy Be", category: "Course du championnat MOTOCROSS" },
  { date: "2025-09-28", title: "Grand Prix de Manakara", location: "Manakara", category: "Course du championnat MOTOCROSS" },
  { date: "2025-12-07", title: "MX King Of Bira", location: "Antsirabe", category: "Course du championnat MOTOCROSS" },
  { date: "2025-12-14", title: "MX GAME", location: "MX Track", category: "Course du championnat MOTOCROSS" },
  { date: "2025-03-02", title: "Triple Crown 1", location: "MX Park", category: "Course hors championnat MOTOCROSS" },
  { date: "2025-07-20", title: "Triple Crown 2", location: "MX Track", category: "Course hors championnat MOTOCROSS" },
  { date: "2025-10-12", title: "Triple Crown 3", location: "MX Tamatave", category: "Course hors championnat MOTOCROSS" },
  { date: "2025-11-16", title: "Triple Crown 4", location: "MX Track", category: "Course hors championnat MOTOCROSS" },
  { date: "2025-08-16", title: "MX of African Nation", location: "KENYA", category: "Autre catégorie" },
  { date: "2025-02-23", title: "Endurance CRAM Mahitsy", location: "Mahitsy", category: "Course du championnat ENDURO" },
  { date: "2025-05-04", title: "XC ACERBIS", location: "Antananarivo", category: "Course du championnat ENDURO" },
  { date: "2025-05-18", title: "Enduro SHERCO", location: "Antananarivo", category: "Course du championnat ENDURO" },
  { date: "2025-06-15", title: "Enduro Ambatondrazaka", location: "Ambatondrazaka", category: "Course du championnat ENDURO" }, 
  { date: "2025-07-13", title: "Endurance GAS GAS", location: "Antsirabe", category: "Course du championnat ENDURO" },
  { date: "2025-08-17", title: "Endurance Majunga", location: "Mahajanga", category: "Course du championnat ENDURO" },
  { date: "2025-11-02", title: "Endurance Mananjary", location: "Mananjary", category: "Course du championnat ENDURO" },
  { date: "2025-03-08", title: "4H HONDA", location: "Antananarivo", category: "Course hors championnat ENDURO" },
  { date: "2025-09-07", title: "MEC", location: "Antananarivo", category: "Course hors championnat ENDURO" }
];
export default function Focus() {
  const totalImages = imageFocus.length; 
  const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsReady(true);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [totalImages]);

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
    <section className="-mt-10">
      <Container className="flex flex-col xl:flex-row gap-8 h-auto w-full mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-7xl 2xl:max-w-8xl">
        <section className="w-full xl:w-[70%]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{'FOCUS ARRIVAGE'}</h2>
          {!isReady ? (
            <div><FocusLoading/></div>
          ):
          (
            <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={2} 
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              640: { 
                slidesPerView: 3,
              },
              1024: {  // Pour les grands écrans (ordinateurs)
                slidesPerView: 3,  // Affiche 3 images sur les grands écrans
              },
            }}
            className="rounded-sm shadow-lg"
          >
            {
              imageFocus.map((image, index) => (
                <SwiperSlide key={image.src} className="h-auto">
                  <Link href={image.href} className="w-[18.75rem] h-[18.75rem] bg-black">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-auto h-auto object-contain"
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
        </section>
        
        <aside className="relative top-0 xl:-top-36 xl:w-[30%]">
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
          <h3 className="absolute bottom-2 left-10 uppercase font-semibold text-sm md:text-base">
            Events - Rides - Sorties - Courses
          </h3>
        </div>
        <Calendar<Event> events={events} />
        <div className="mt-2">
          <EventsList events={events} />
        </div>
        <div className="mt-2 mx-auto max-w-2xl">
          <Meteo data={dataMeteo} />
        </div>
      </div>
    </div>
  );
}
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit"
  }).replace(/\//g, "."); // Remplace les "/" par "."
}
// function ListEvent({events}: {events: Event[]}) {
  
 
// function getUpcomingEvents(events : Event[]): Event[] {
//   const today = new Date(); // Date actuelle
//   return events.filter(event => new Date(event.date) >= today);
// }
// // Exemple d'utilisation : trier les événements par date
// // events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
// const events = getUpcomingEvents(events).sort((a, b) => 
//   new Date(a.date).getTime() - new Date(b.date).getTime()
// );

// console.log(events);


// const [showAll, setShowAll] = useState(false);

// return (
//   <div className="max-w-2xl mx-auto py-2 bg-white shadow rounded-md">
//     <ul>
//       {(showAll ? events : events.slice(0,2)).map((event, index) => (
//         <li key={index} className="flex justify-between items-center text-black py-2 px-2 border-b">
//           <span className="text-xs mr-1">{formatDate(event.date)}:</span>
//           <span className="font-bold text-sm px-2 mr-auto">{event.title}</span>
//         </li>
//       ))}
//     </ul>
//     {(
//       <button 
//         onClick={() => setShowAll(prev => !prev)}
//         className="block text-center w-full py-2 text-gray-500 hover:text-black transition text-sm">
//         {!showAll ? <span>Voir plus &raquo;&raquo;&raquo;</span>: <span>Voir moins &raquo;&raquo;&raquo;</span>} 
//       </button>
//     )}
//   </div>
// );
// }
const EventsList = ({ events }: { events: Event[] }) => {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(events.length / itemsPerPage);
  const paginatedEvents = events.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-2xl mx-auto py-2 bg-white shadow rounded-md">
      <ul>
        {paginatedEvents.map((event, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-black py-2 px-2 border-b"
          >
            <span className="text-xs mr-1">{formatDate(event.date)}:</span>
            <span className="font-bold text-sm px-2 mr-auto">{event.title}</span>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center px-2 py-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={clsx(
            'text-gray-500 text-sm p-1 rounded-full bg-gray-100 hover:bg-gray-200',
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:text-black"
          ) }
        >
          <GrFormPreviousLink className="w-7 h-7"/>
        </button>

        <span className="text-sm">
          Page {currentPage} sur {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={clsx(
            'text-gray-500 text-sm p-1 rounded-full bg-gray-100 hover:bg-gray-200',
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:text-black"
          ) }
        >
          <GrFormNextLink className="w-7 h-7"/>
        </button>
      </div>
    </div>
  );
};

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

