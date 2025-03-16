import Link from "next/link";
import React from "react";
import Image from "next/image";
import Container from "./container";

const justRideData = [
  {
    title: "Initiation à la conduite de Moto",
    description:
      "Apprenez les bases de la conduite de moto avec une initiation encadrée par des professionnels.",
    image: "/images/just-ride/1_stage.jpg",
    link: "/evenement/initiation-conduite-moto",
    priceOnSeance: 300000,
    packSeance: null,
  },
  {
    title: "Stage de conduite Niveau Intermédiaire",
    description:
      "Ce stage de 2 heures est destiné aux motocyclistes souhaitant perfectionner leur conduite sur route. L’objectif est de limiter les risques et de réduire les accidents en améliorant la maîtrise de la moto. Au programme : perfectionnement des gestes techniques, du freinage, des trajectoires, de la maniabilité, de la position de conduite et du regard. Le stage se déroule à SRK.",
    image: "/images/just-ride/2_stage.jpg",
    link: "/evenement/stage-conduite-intermediaire",
    priceOnSeance: 300000,
    packSeance: 1000000,
  },
  {
    title: "Stage de pilotage Niveau Intermédiaire et Plus",
    description:
      "Améliorez votre technique de pilotage et maîtrisez votre moto dans différentes conditions.",
    image: "/images/just-ride/3_stage.jpg",
    link: "/evenement/stage-pilotage",
    priceOnSeance: null,
    packSeance: null,
  },
  {
    title: "Session Mini SM YCF Niveau Intermédiaire et Plus",
    description:
      "Venez tester vos compétences sur circuit avec nos sessions Mini SM YCF adaptées aux niveaux intermédiaire et avancé.",
    image: "/images/just-ride/4_stage.jpg",
    link: "/evenement/session-mini-sm-ycf",
    priceOnSeance: null,
    packSeance: null,
  },
];

export default function JustRideAcademy() {
  return (
    <Container>
      <h2 className="uppercase text-3xl md:text-4xl font-bold text-center mb-16">
        Just Ride Academy
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {justRideData.map((data, index) => (
          <CardJRA key={index} data={data} />
        ))}
      </div>
    </Container>
  );
}

function CardJRA({ data }: { data: (typeof justRideData)[number] }) {
  return (
    //   <Link href={`/evenement/${justirideData._id}`} className="block">
    <div className="relative h-[23rem] group overflow-hidden shadow-sm rounded-sm transition-transform duration-200 cursor-pointer">
      {data.image && (
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="w-full h-full sm:h-64 object-cover"
        />
      )}
      <div className="absolute inset-0 transition-transform duration-300 ease-out translate-y-[80%] group-hover:translate-y-0">
        <div className="relative h-full w-full p-3">
        <div className="absolute inset-0 z-0 bg-accent opacity-80"/>
        <div className="relative z-10 flex flex-col justify-between text-white pt-3 h-full w-full">
        <div className="flex flex-col gap-5">
            <h3 className="uppercase text-base font-bold leading-4">{data.title}</h3>
            <p className="text-sm leading-4 opacity-0 group-hover:opacity-100">{data.description}</p>
            <div className="opacity-0 group-hover:opacity-100">
                <p className="text-sm leading-4 p-0">
                    {`1 séance : `}<strong className="text-base">{data.priceOnSeance} Ar</strong>
                </p>
                <p className="text-sm leading-4">{`Package de 4 séances : `}<strong className="text-base">{data.packSeance} Ar</strong></p>
            </div>
        </div>
        <button className="opacity-0 group-hover:opacity-100 ml-auto bg-white h-4 text-accent px-2 rounded-md flex items-center justify-center text-xs">
            <span className="font-bold uppercase">{'Reserver'}</span>
        </button>
        
        </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 w-full text-start text-white p-2 font-bold text-lg transition-all duration-300 ease-out group-hover:bottom-1/2 group-hover:translate-y-1/2">
            <h3 className='uppercase text-base'>{data.title}</h3>
          </div> */}
    </div>
    //   </Link>
  );
}
