"use client";

import * as React from "react";
import Image from "next/image";



import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Divider from "../divider";
import { data } from "./carousel-data";
import { CaracteristiqueType, Moto } from "@/types/types";

type MotoInfoTypeProps ={
  data : Moto
}

export function MotoCarousel() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(1);
  const [count, setCount] = React.useState(data.length);
  const currentItem = React.useMemo(() => data[current - 1], [current]);

  React.useEffect(() => {
    if (!api) return;

    setCount(data.length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleNext = () => {
    if (!api) return;
    if (current === count) {
      api.scrollTo(0, true); // Revenir au premier élément
    } else {
      api.scrollNext();
    }
  };

  const handlePrevious = () => {
    if (!api) return;
    if (current === 1) {
      api.scrollTo(count - 1, true); // Aller au dernier élément
    } else {
      api.scrollPrev();
    }
  };

  return (
    <div>
    <section className="mx-10 relative">
      <div className="flex items-center absolute -top-8">
      {currentItem && (currentItem.logos.map((logo,i) => (
        <div key={i} className="flex items-center">
          <Image width={200} height={150} src={logo.src} alt={`logo du ${currentItem.name}`} className="object-contain w-[50px] sm:w-[70px] lg:w-[100px] " />
          {i !== currentItem.logos.length - 1 && <Divider className="mx-5"/>}
        </div>
      ))
      )}
      </div>
      <div className="mx-auto max-w-3xl">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {data.map((item) => (
              <CarouselItem key={item.id}>
                <div className="relative h-[400px] w-full p-6 rounded-lg">
                  <Image
                    src={item.img}
                    alt={`Image de ${item.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious onClick={handlePrevious} className="pointer-events-auto opacity-100" />
          <CarouselNext onClick={handleNext} className="pointer-events-auto opacity-100" />
        </Carousel>
      </div>
    </section>
      {currentItem && (
          <div className="mt-3">
            <MotoInfo data={currentItem}/>
          </div>
      )}
    </div>
  );
}


function MotoInfo({data}: MotoInfoTypeProps){
  return (
    <section className="bg-accent px-16 py-4">
      <h1 className="font-bold text-2xl uppercase">{data.name}</h1>
      <h3 className="font-bold text-xl mt-3">{data.subtitle}</h3>
      <p className="mt-3">
        {data.description}
      </p>

      <div className="mt-10">
        <Caracteristique items={data.caracteristique}/>
        <div className="mt-10 h-[200px] flex flex-row space-x-6 rounded-sm">
          {
            data.imagesDetails.map((img,i) =>(
              <div key={i} className="h-full basis-1/3 w-[33%] relative z-5 ">
                <Image fill alt={`detail du moto`} src={img.src} objectFit="cover"/>
              </div>
            ))
          }
        </div>
        <p className="mt-5 uppercase text-3xl"><b>{data.unitAvailable}  unité</b> disponible </p>

      </div>

    
  </section>
  )

}

function Caracteristique({items}:{items : CaracteristiqueType[]}){
  return(
    <div className="flex flex-row gap-10" >
      {items.map((item,i) =>(
        <div key={i} className="flex flex-col border-l border-0 pl-3 border-gray-950">
          <span>{item.name}</span>
          <span className="font-bold text-lg">{item.value}</span>
        </div>
      ))

      }
    </div>
  )
}


