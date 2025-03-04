"use client";

import * as React from "react";
import Image from "next/image";

const data = [
  { id: 1, name: "moto 1", description: "Description de moto 1", price: "$500", img: "/images/photos/img-casque-1.jpg" },
  { id: 2, name: "moto 2", description: "Description de moto 2", price: "$700", img: "/images/photos/img-casque-2.jpg" },
  { id: 3, name: "moto 3", description: "Description de moto 3", price: "$900", img: "/images/photos/img-casque-3.jpg" },
];

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(1);
  const [count, setCount] = React.useState(data.length);
  const currentItem = React.useMemo(() => data[current - 1], [current, data]);

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
    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative aspect-square p-6 rounded-lg">
                <Image
                  src={item.img}
                  alt={`Image de ${item.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <span>{item.name}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={handlePrevious} className="pointer-events-auto opacity-100" />
        <CarouselNext onClick={handleNext} className="pointer-events-auto opacity-100" />
      </Carousel>

      <div className="text-center mt-4">
        <span className="text-lg font-semibold">
          {current} / {count}
        </span>
      </div>

      {/* Affichage dynamique des autres informations */}
      {currentItem && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">{currentItem.name}</h3>
          <p>{currentItem.description}</p>
          <p className="text-lg font-bold">{currentItem.price}</p>
        </div>
      )}
      {/* <img src="/public/images/just-ren" alt="" srcset="" /> */}
    </div>
  );
}
