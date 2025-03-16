import React from "react";
import Container from "./container";
import FocusIcon from "./icons/focus-icon";
import YourCalendarIcon from "./icons/vos-calendrier-icon";
import Calendar from "./calendar";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

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
  }
    
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
        {/* old focus */}
      {/* <div className="flex gap-[2px] max-w-full relative w-full lg:w-[70%] mr-auto">
        <div className="w-1/3 h-[260px] z-10 absolute -top-14 ">
          <FocusIcon />
        </div>
        <div className="w-1/3 h-[240px] relative overflow-hidden">
          <Image
            src="/images/photos/focus1.jpg"
            alt="Image-focus"
            className="w-full h-full object-cover"
            fill
          />
        </div>
        <div className="w-1/3 h-[240px] relative overflow-hidden">
          <Image
            src="/images/photos/focus3.jpg"
            alt="Image-focus"
            className="w-full h-full object-cover"
            fill
          />
        </div>
        <div className="w-1/3 h-[300px] relative overflow-hidden">
          <Image
            src="/images/photos/focus2.jpg"
            alt="Image-focus"
            className="w-full h-full object-cover scale-150"
            fill
          />
          <div
            className="absolute bottom-4 left-0 right-0 mx-auto  bg-accent text-black font-bold text-center py-3 px-4"
            style={{
              clipPath: "polygon(0% 13.8%, 100% 5.3%, 100% 88%, 0% 95.5%)",
            }}
          >
            900 000 Ar
          </div>
        </div>
        <div className="w-1/3 h-[240px] relative overflow-hidden">
          <Image
            src="/images/photos/focus3.jpg"
            alt="Image-focus"
            className="w-full h-full object-cover"
            fill
          />
        </div>
        <div className="w-1/3 h-[240px] relative overflow-hidden">
          <Image
            src="/images/photos/focus1.jpg"
            alt="Image-focus"
            className="w-full h-full object-cover"
            fill
          />
        </div>
      </div> */}

        <section className="w-full lg:lg:w-[70%]">
          <h2 className="text-3xl md:text-4xl font-bold text-center">{'FOCUS ARRIVAGE'}</h2>
          <div className="flex flex-col md:flex-row gap-4 mt-10">
            {
              imageFocus.map((image, index) => (
                <div key={index} className={clsx(
                  index === 1 && 'shadow-[10px_-10px_7px_-2px_rgba(0,_0,_0,_0.2)]'
                )}>
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
                </div>
              ))

            }
          </div>
        </section>

      
      <aside className="relative top-0 lg:-top-36 lg:w-[30%]">
      {/* <aside className="absolute z-10 left-1/2 -translate-x-1/2 lg:right-[6%] -top-32 w-[90%] lg:w-[30%]"> */}
            {/* <div className="absolute right-0 lg:-top-5 lg:-translate-y-32"> */}
              
            {/* </div> */}
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
  return (
    <div className="bg-blue-400 p-3 w-full h-[100px] rounded-md text-white">
      <h3 className="text-xs uppercase">{data.location}</h3>
      <div className="flex justify-between items-center w-[95%] mt-2">
        <div className="flex flex-row items-center gap-2">
          <div className="flex relative flex-row items-center h-[45px]">
            <div className="text-[3rem] relative">
              {data.temperature}
            </div>
            <div className="flex flex-col items-center h-auto">
            <span className="text-[3rem] h-10 font-thin">°</span>
            <span className="text-[1.3rem] relative bottom-[11px]">C</span>
            </div>

            
            
          </div>
          <div className="flex flex-col">
            <p className="text-sm">{data.weather}</p>
            <p className="text-sm">Sensação térmica de {data.temperature}°</p>
          </div>
        </div>
        <div className="bg-yellow-400 rounded-full h-10 w-10"/>
      </div>

    </div>
  )
}

