"use client";

import React, { useEffect, useMemo, useState } from "react";
import Container from "./container";
import YourCalendarIcon from "./icons/vos-calendrier-icon";
import Calendar from "./calendar";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
;

import { dataFocus } from "@/data/data-focus";




import axios, { AxiosError } from "axios";
import { events } from "@/data/data-event";
import { Events } from "@/store/events/type";
import { useEventStore } from "@/store/events";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// Activer les plugins
dayjs.extend(utc);
dayjs.extend(timezone);

type WeattherDisplay = {
  temperature: string;
  feelsLike: string;
  description: string;
  icon: string;
};


type WeatherCode =
  | 0
  | 1
  | 2
  | 3
  | 45
  | 48
  | 51
  | 53
  | 55
  | 61
  | 63
  | 65
  | 80
  | 81
  | 82
  | 95
  | 99;
const countryInfo = {
  name: "Antananarivo",
  coords: {
    lat: -18.90848,
    long: 47.53751,
  },
};

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
  99: { text: "Orage violent", icon: "⛈️" },
};


const dataMeteo = {
  location: "Antananarivo",
  temperature: "25",
  weather: "Ciel dégagé",
};

export default function Focus() {
  const [isReady, setIsReady] = useState(false);


  useEffect(() => {
    let loadedImages = 0;
    dataFocus.forEach((image) => {
      const img = new window.Image();
      img.src = image.coverPicure;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === dataFocus.length) {
          setIsReady(true);
        }
      };
    });
  }, []);
  return (
    <section className="">
      <Container className="flex flex-col xl:flex-row xl:justify-between gap-8 h-auto w-full mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-8xl 2xl:max-w-8xl mt-8 ">
        <section className="w-full xl:w-[65%] pb-0 slide-in-from-top-1/2 sm:pb-5 lg:pb-10 xl:pb-15 2xl:pb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-left text-accent mb-10">
          {"FOCUS ARRIVAGE"}
        </h2>

          {/* Première ligne avec 3 images */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-5 lg:mb-5 sm:mb-0">
            {dataFocus.map((image, index) => (
              <div key={index} className="flex justify-center items-center rounded-md shadow-md">
                <Link href={`focus/${image.slug}`} className="w-full h-full">
                  <Image
                    src={image.coverPicure}
                    alt={'Image focus'}
                    className="w-auto h-auto object-contain"
                    width={300}
                    height={300}
                    loading="eager"
                    priority
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <aside className="relative top-0 xl:-top-36 xl:w-[30%]">
          <YourCalendar />
        </aside>
      </Container>
    </section>
  );
}

function YourCalendar() {
  const {setEvent,events: dataEvent} = useEventStore()
  useEffect(() => {
    setEvent(events)
  },[setEvent])
  return (
    <div>
      <div className="bg-accent p-2 w-full">
        <div className="relative mx-auto max-w-2xl">
          <YourCalendarIcon />
          <h3 className="absolute bottom-2 left-10 uppercase font-semibold text-[0.5rem] md:text-sm 2xl:text-base">
            Events - Rides - Sorties - Courses
          </h3>
        </div>
        <Calendar<Events> events={dataEvent} />
        <div className="mt-2">
          <EventsList events={dataEvent} />
        </div>
        <div className="mt-2 mx-auto max-w-2xl">
          <Meteo data={dataMeteo} />
        </div>
      </div>
    </div>
  );
}
{/*
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
    .replace(/\//g, "."); // Remplace les "/" par "."
}
    
// ✅ Correction de l'affichage des dates pour Antananarivo (GMT+3)
function formatDate(dateString: string): string {
  const date = dayjs.utc(dateString).tz("Indian/Antananarivo"); // Correction du fuseau
  return date.format("DD.MM.YY"); // Format correct pour éviter le décalage
}


const EventsList = ({ events }: { events?: Events[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {currentMonth,setCurrentMonth} = useEventStore()

  const today = new Date();
  // const upComingEvents = events && events
  //   .filter((e) => new Date(e.date) >= today) 
  //   .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); 

  const upComingEvents = useMemo(
    () => {
     return events && events
    .filter((e) => {
        const eventMonth = dayjs(e.date);
        return eventMonth.month() === currentMonth.month() && eventMonth.year() === currentMonth.year();
    });
    },[currentMonth,events]
  )

  const itemsPerPage = 3; 
  const totalPages = useMemo(() => upComingEvents ? Math.ceil(upComingEvents.length / itemsPerPage) : 0,[upComingEvents])
  const safeCurrentPage = useMemo(() => Math.min(currentPage, totalPages),[currentPage,totalPages]) 

  const paginatedEvents = useMemo(() => upComingEvents?.slice(
    (safeCurrentPage - 1) * itemsPerPage,
    safeCurrentPage * itemsPerPage
  ),[safeCurrentPage,upComingEvents])

  console.log("paginated eve", paginatedEvents);

*/}

// ✅ Correction de l'affichage des dates pour Antananarivo (GMT+3)
function formatDate(dateString: string): string {
  const date = dayjs.utc(dateString).tz("Indian/Antananarivo", true); // Correction du fuseau
  return date.format("DD.MM.YY"); // Format correct pour éviter le décalage
}

const EventsList = ({ events }: { events?: Events[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { currentMonth } = useEventStore();

  const upComingEvents = useMemo(() => {
    return events?.filter((e) => {
      const eventDate = dayjs.utc(e.date).tz("Indian/Antananarivo", true); 
      return (
        eventDate.month() === currentMonth.month() &&
        eventDate.year() === currentMonth.year()
      );
    });
  }, [currentMonth, events]);
  

  const itemsPerPage = 3;
  const totalPages = useMemo(
    () => (upComingEvents ? Math.ceil(upComingEvents.length / itemsPerPage) : 0),
    [upComingEvents]
  );
  const safeCurrentPage = useMemo(() => Math.min(currentPage, totalPages), [currentPage, totalPages]);

  const paginatedEvents = useMemo(
    () =>
      upComingEvents?.slice(
        (safeCurrentPage - 1) * itemsPerPage,
        safeCurrentPage * itemsPerPage
      ),
    [safeCurrentPage, upComingEvents]
  );

  console.log("Paginated Events:", paginatedEvents);

  return (
    <div className="max-w-2xl mx-auto py-2 bg-white shadow rounded-md">
      <ul>
        {paginatedEvents?.map((event, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-black py-2 px-2 border-b"
          >
            <span className="text-xs mr-1">{formatDate(event.date)}:</span>
            <span className="font-bold text-sm px-2 mr-auto">
              {event.title}
            </span>
          </li>
        ))}
      </ul>

        {/* Pagination Controls */}
          <div className="flex justify-center items-center px-2 py-2">
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={clsx(
                "text-gray-500 text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200",
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:text-black"
              )}
            >
              Voir plus
            </button>
          </div>



      {/* Pagination Controls
      <div className="flex justify-between items-center px-2 py-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={clsx(
            "text-gray-500 text-sm p-1 rounded-full bg-gray-100 hover:bg-gray-200",
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:text-black"
          )}
        >
          <GrFormPreviousLink className="w-7 h-7" />
        </button>

        <span className="text-sm">
          Page {currentPage} sur {totalPages}
          
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={clsx(
            "text-gray-500 text-sm p-1 rounded-full bg-gray-100 hover:bg-gray-200",
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:text-black"
          )}
        >
          <GrFormNextLink className="w-7 h-7" />
        </button>
      </div>
      */}
    </div>
  );
};

function Meteo({
  data,
}: {
  data: {
    location: string;
    temperature: string;
    weather: string;
  };
}) {
  const [weather, setWeather] = useState<WeattherDisplay | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${countryInfo.coords.lat}&longitude=${countryInfo.coords.lat}&current_weather=true`;
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        // const data = await response.json();
        const data = response.data;
        console.log("data metoooo", response);

        const code = data.current_weather.weathercode as WeatherCode;
        if (data) {
          setWeather({
            temperature: data.current_weather.temperature,
            feelsLike: data.current_weather.temperature, // Open-Meteo don't give  "ressentie"
            description: weatherDescriptions[code]?.text || "Inconnu",
            icon: weatherDescriptions[code]?.icon || "❓",
          });
        }
      } catch (error) {
        console.error("Erreur météo :", error);
        if (error instanceof AxiosError) {
          console.log("err axios");
        }
        setWeather(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="bg-blue-400 p-3 w-full h-[100px] rounded-md text-white">
      {isLoading && <MeteoLoading />}
      {weather && !isLoading && (
        <>
          <h3 className="text-xs uppercase">{countryInfo.name}</h3>
          <div className="flex justify-between items-center w-[95%] mt-2">
            <div className="flex flex-row items-center gap-2">
              <div className="flex relative flex-row items-center h-[45px]">
                <div className="text-[3rem] relative">
                  {Math.round(parseFloat(weather.temperature))}
                </div>
                <div className="flex flex-col items-center h-auto">
                  <span className="text-[3rem] h-10 font-thin">°</span>
                  <span className="text-[1.3rem] relative bottom-[11px]">
                    C
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-xs">{weather.description}</p>
                <p className="text-xs">
                  Sensation thermique de{" "}
                  {Math.round(parseFloat(weather.feelsLike))}°
                </p>
              </div>
            </div>
            <div className="text-[2.5rem]">{weather.icon}</div>
          </div>
        </>
      )}
      {!weather && !isLoading && (
        <p className="text-xs">
          Erreur lors de la récupération des données météo.
        </p>
      )}
    </div>
  );
}

function MeteoLoading() {
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
  );
}

function FocusLoading() {
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
  );
}
