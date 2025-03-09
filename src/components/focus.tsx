import React from "react";
import Container from "./container";
import FocusIcon from "./icons/focus-icon";
import YourCalendarIcon from "./icons/vos-calendrier-icon";
import Calendar from "./calendar";
import Image from "next/image";

export default function Focus() {
  return (
    <section className="mt-10">
      <Container className="flex flex-col lg:flex-row gap-8 h-auto">
      <div className="flex gap-[2px] max-w-full relative w-full lg:w-[70%] mr-auto">
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
      </div>
      
      <aside className="relative top-0 lg:-top-36">
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
    <div className="max-w-2xl mx-auto py-2 bg-white shadow rounded-sm b700order-yellow-">
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

/*
function FooterCalendar() {
  return (
    <div
      style={{
        clipPath: "polygon(100% 0, 100% 15%, 51% 46%, 0 15%, 0 0)",
      }}
      className="bg-accent h-44"
    >
    </div>
  );
}
*/


