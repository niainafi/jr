"use client";

import * as React from "react";
import Image from "next/image";

const data = [
  { 
    id: 1,
    name: "moto 1", 
    price: "$500", 
    img: "/images/just-rent/jr-moto7.png",
    logos: [
      {
        src: "/images/just-rent/300ppi/himalayan.png",
      },
      {
        src: "/images/just-rent/classic-500-logo.png",
      }
    ],
    subtite: `l'aventure sans limite a Madagascar`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ea dicta laboriosam numquam aspernatur reprehenderit fugit explicabo, culpa quasi error et id qui ipsa, soluta reiciendis maxime? Expedita, ducimus ea?`,
    caracteristique: [
      {
        name: "Tableau de bord",
        value: "125cc",
      },
      {
        mame: 'Navigation',
        value: 'Cartographe',
      }
    ],
    imagesDetails: [
      {
        src: "/images/just-rent/classic500.png",
      },
      {
        src: "/images/just-rent/classic500.png",
      },
      {
        src: "/images/just-rent/classic500.png",
      },
    ],
    unitAvailable: 10
  },
  { 
    id: 2, 
    name: "moto 2", 
    price: "$700", 
    img: "/images/just-rent/classic500.png" ,
    logos: [
      {
        src: "/images/just-rent/logo-just-rent.png",
      },
      {
        src: "/images/just-rent/logo-just-rent.png",
      }
    ],
    subtite: `l'aventure sans limite a Madagascar`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ea dicta laboriosam numquam aspernatur reprehenderit fugit explicabo, culpa quasi error et id qui ipsa, soluta reiciendis maxime? Expedita, ducimus ea?`,
    caracteristique: [
      {
        name: "Tableau de bord",
        value: "125cc",
      },
      {
        mame: 'Navigation',
        value: 'Cartographe',
      }
    ],
    imagesDetails: [
      {
        src: "/images/just-rent/classic500.png",
      },
      {
        src: "/images/just-rent/classic500.png",
      },
      {
        src: "/images/just-rent/classic500.png",
      },
    ],
    unitAvailable: 10
  },
  { id: 3, 
    name: "moto 3", 
    price: "$900", 
    img: "/images/just-rent/jr-moto7.png" ,
    logos: [
      {
        src: "/images/just-rent/logo-just-rent.png",
      },
      {
        src: "/images/just-rent/logo-just-rent.png",
      }
    ],
    subtite: `l'aventure sans limite a Madagascar`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ea dicta laboriosam numquam aspernatur reprehenderit fugit explicabo, culpa quasi error et id qui ipsa, soluta reiciendis maxime? Expedita, ducimus ea?`,
    caracteristique: [
      {
        name: "Tableau de bord",
        value: "125cc",
      },
      {
        mame: 'Navigation',
        value: 'Cartographe',
      }
    ],
    imagesDetails: [
      {
        src: "/images/just-rent/classic500.png",
      },
      {
        src: "/images/just-rent/classic500.png",
      },
      {
        src: "/images/just-rent/classic500.png",
      },
    ],
    unitAvailable: 10
  },
];

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Divider from "./divider";

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
    </section>
  );
}