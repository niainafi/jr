import React from "react";
import Container from "./container";
import FocusIcon from "./icons/focus-icon";
import YourCalendarIcon from "./icons/vos-calendrier-icon";
import Calendar from "./calendar";

export default function Focus() {
  return (
    <section className="mt-16 relative">
      <Container className="flex gap-[2px] max-w-full px-[5.5rem] relative w-[50%] mr-auto">
        <div className="w-1/3 h-[260px] z-10 absolute -top-14 ">
          <FocusIcon />
        </div>
        <div className="w-1/3 h-[240px] relative overflow-hidden">
          <img
            src="/images/photos/focus1.jpg"
            alt="img-focus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/3 h-[300px] relative overflow-hidden">
          <img
            src="/images/photos/focus2.jpg"
            alt="img-focus"
            className="w-full h-full object-cover scale-150"
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
          <img
            src="/images/photos/focus3.jpg"
            alt="img-focus"
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
      <aside className="absolute right-[6%] -top-32">
        <YourCalendar />
      </aside>
    </section>
  );
}

function YourCalendar() {
  return (
    <div>
      <div className="bg-accent p-2 w-[360px]">
        <div className="relative">
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
    <div className="max-w-lg mx-auto py-2 bg-white shadow rounded-sm b700order-yellow-">
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


