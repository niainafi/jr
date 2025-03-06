"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ReforestinEvent() {
  const eventDate = new Date("2025-03-08T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = eventDate - now;
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 md:p-10 max-w-5xl mx-auto">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2">
        <div className="absolute -left-4 -top-4 bg-[#c09606] w-full h-full z-0"></div>
        <Image
          src="/images/evenement/reforestin.jpg"
          alt="Reforest'in Ankadindriana"
          width={500}
          height={500}
          className="relative z-10 w-full h-auto"
        />
      </div>
      
      {/* Text Section */}
      <div className="bg-[#c09606] text-white p-6 md:p-10 w-full md:w-1/2 flex flex-col justify-center">
        <p className="text-sm uppercase">08-09 Mars 2025</p>
        <h2 className="text-lg font-bold mt-2">REFOREST’IN ANKADINANDRIANA</h2>
        <p className="text-base font-bold mt-4">Être motard et Eco responsable c'est possible !</p>
        <p className="text-sm mt-2">
          Fantaro fa isaky ny kilometatra diavinao dia misy fiantraikany amin’ny tontolo iainana.
          Izao anefa <span className="font-bold">✊</span> manana fahefana isika
        </p>
        
        {/* Countdown Timer */}
        <p className="text-4xl font-bold mt-6">
          {`${timeLeft.days}j ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </p>
        
        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button className="bg-white text-yellow-700 font-bold px-4 py-2 rounded shadow">
            INSCRIVEZ - VOUS
          </button>
          <button className="bg-[#c09606] text-white font-bold px-4 py-2 rounded shadow">
            LOUEZ VOTRE <span className="text-yellow-300">ROYAL ENFIELD</span>
          </button>
        </div>
      </div>
    </div>
  );
}
