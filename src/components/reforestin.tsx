"use client";
{/*
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./container";
import Link from "next/link";
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(eventDate: number) : TimeLeft {
  const now = new Date().getTime();
  const difference = eventDate - now;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}

export default function ReforestinEvent() {
  const eventDate = new Date("2025-03-08T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null); 

  useEffect(() => {
    setTimeLeft(getTimeLeft(eventDate)); 

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(eventDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  
  if (!timeLeft) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold mt-6">Chargement...</p>;
      </div>
    )
  }

  return (
    <Container className="w-full flex flex-row-reverse bg-accent p-4 relative">
      
      <div className="absolute w-full lg:w-[40%] md:w-[60%] md:-top-5 md:-translate-y-7 md:left-5 left-8 -top-9 h-[500px]">
        <Image
          src="/images/evenement/reforestin.jpg"
          alt="Reforest'in Ankadindriana"
          width={500}
          height={500}
          className="relative  w-full h-full"
        />
      </div>

      
      <div className="bg-accent text-white p-6 md:p-10 w-full md:w-1/2 flex flex-col justify-center">
        <p className="text-sm uppercase">08-09 Mars 2025</p>
        <h2 className="text-lg font-bold mt-2">{`REFOREST’IN ANKADINANDRIANA`}</h2>
        <p className="text-base font-bold mt-4">{`Être motard et Eco responsable c'est possible !`}</p>
        <p className="text-sm mt-2">
          {`Fantaro fa isaky ny kilometatra diavinao dia misy fiantraikany amin’ny tontolo iainana.`}
          Izao anefa <span className="font-bold">✊</span> manana fahefana isika
        </p>

        
        <p className="text-4xl font-bold mt-6">
          {`${timeLeft.days}j ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </p>


        <div className="mt-6 flex space-x-4">
          <Link href="/contactez-nous" className="bg-white text-accent rounded-md h-5 flex items-center justify-center">
            <span className="font-bold">INSCRIVEZ</span><span>-VOUS</span>
          </Link>
           <Link href="/just-rent" className="bg-white text-accent rounded-md h-5 flex items-center justify-center">
            <span className="font-bold">LOUEZ</span>
            <span className="mx-1">VOTRE</span>
            <span className="font-extrabold">ROYAL ENFIELD</span>
          </Link>
        </div>
      </div>
    </Container>
  );
}
*/}




import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./container";
import Link from "next/link";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(eventDate: number): TimeLeft {
  const now = new Date().getTime();
  const difference = eventDate - now;

  if (difference <= 0) {
    // Si l'événement est passé, afficher 0
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}

export default function ReforestinEvent() {
  const eventDate = new Date("2025-03-08T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(eventDate));

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(eventDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  if (!timeLeft) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold mt-6">Chargement...</p>
      </div>
    );
  }

  return (
    <Container className="w-full flex flex-col-reverse md:flex-row bg-accent p-6 md:p-10 relative items-center">
      {/* Section Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-[500px] flex justify-center">
        <Image
          src="/images/evenement/reforestin.jpg"
          alt="Reforest'in Ankadindriana"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Section Texte */}
      <div className="bg-accent text-white p-6 md:p-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-sm uppercase font-bold border-b-2 border-white pb-1 inline-block">08-09 Mars 2025</p>
        <h2 className="text-xl md:text-2xl font-bold mt-2">REFOREST’IN ANKADINANDRIANA</h2>
        <p className="text-base md:text-lg font-bold mt-4">Être motard et Eco responsable, c est possible !</p>
        <p className="text-sm mt-2">
          Fantaro fa isaky ny kilometatra diavinao dia misy fiantraikany amin’ny tontolo iainana. 
          Izao anefa <span className="font-bold">✊</span> manana fahefana isika
        </p>

        {/* Countdown Timer */}
        <p className="text-3xl md:text-4xl font-bold mt-6">
          {`${timeLeft.days}j ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </p>

        {/* Boutons */}
        <div className="mt-6 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <Link href="/contactez-nous" className="bg-white text-accent rounded-md py-2 px-4 w-full md:w-auto text-center font-bold">
            INSCRIVEZ-VOUS
          </Link>
          <Link href="/just-rent" className="bg-white text-accent rounded-md py-2 px-4 w-full md:w-auto text-center font-bold">
            LOUEZ VOTRE <span className="font-extrabold">ROYAL ENFIELD</span>
          </Link>
        </div>
      </div>
    </Container>
  );
}

