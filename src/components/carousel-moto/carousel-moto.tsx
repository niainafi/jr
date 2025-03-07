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
// import Divider from "../divider";
import { data } from "./carousel-data";
import { CaracteristiqueType, Moto } from "@/types/types";
import Container from "../container";

type MotoInfoTypeProps = {
  data: Moto;
};

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
    <section>
      <Container className="mx-auto max-w-6xl relative">
        {/* <div className="flex items-center absolute -top-8">
          {currentItem &&
            currentItem.logos.map((logo, i) => (
              <div key={i} className="flex items-center">
                <Image
                  width={200}
                  height={150}
                  src={logo.src}
                  alt={`logo du ${currentItem.name}`}
                  className="object-contain w-[50px] sm:w-[70px] lg:w-[100px] "
                />
                {i !== currentItem.logos.length - 1 && (
                  <Divider className="mx-5" />
                )}
              </div>
            ))}
        </div> */}
        <div className="mx-auto max-w-[250px] sm:max-w-[600px] md:max-w-[850px] lg:w-full">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {data.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="relative h-[200px] md:h-[400px] lg:h-[600px] w-full mx-auto p-6 rounded-lg">
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
            <CarouselPrevious
              onClick={handlePrevious}
              className="lg:-translate-x-[100px]"
            />
            <CarouselNext
              onClick={handleNext}
              className="lg:translate-x-[100px]"
            />
          </Carousel>
        </div>
      </Container>
      {currentItem && (
        <div className="mt-3">
          <MotoInfo data={currentItem} />
        </div>
      )}
    </section>
  );
}

function MotoInfo({ data }: MotoInfoTypeProps) {
  return (
    <section className="bg-accent  px-4 py-4" aria-labelledby={`${data.name}-title`}>
      <Container>
        <h1 className="font-bold text-2xl uppercase">{data.name}</h1>
        <h3 className="font-bold text-xl mt-3">{data.subtitle}</h3>
        <p className="mt-3">{data.description}</p>

        <div className="mt-10">
          <Caracteristique items={data.caracteristique} />
          <div className="mt-10 h-[200px] grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 lg:gap-6 rounded-sm">
            {data.imagesDetails.map((img, i) => (
              <div key={i} className="h-full  w-full relative z-5 ">
                <Image
                  fill
                  alt={`detail du moto`}
                  src={img.src}
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
          <p className="mt-5 uppercase text-3xl">
            <b>{data.unitAvailable} unité</b> disponible{" "}
          </p>
        </div>
      </Container>
    </section>
  );
}

function Caracteristique({ items }: { items: CaracteristiqueType[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-5">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-col  border-l border-0 pl-3 border-gray-950"
        >
          <span>{item.name}</span>
          <span className="font-bold text-lg">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
