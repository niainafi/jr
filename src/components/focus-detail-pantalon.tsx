
"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./container";

export default function FocusDetailPantalon() {
  const [mainImage, setMainImage] = useState<string>(
    "/images/accueil/pantalondetail.jpg"
  );
  const [images, setImages] = useState<string[]>([
    '/images/accueil/pantalon.webp',
    '/images/accueil/pantalon.webp',
  ]);

  const handleImageClick = (imageSrc: string,currentSelectedImageUrl: string) => {
    setMainImage(imageSrc);
    setImages(prev => {
      const newImages = [...prev];
      const index = newImages.indexOf(imageSrc);
      newImages[index] = currentSelectedImageUrl;
      return newImages;
    });
  };
 

  return (
    <Container className="2xl:max-w-7xl mt-10 mb-10">
      <div className="flex flex-col gap-5 mb-12 w-full lg:max-w-xl">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{`RST Pantalon 5RL : Confort et Sécurité sur la Route`}</h1>
        <span className="w-[34%] h-2 bg-accent rounded-md"></span>
      </div>
      {/* Section Principale */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Colonne Gauche - Images*/}
        <div className="md:w-1/2 space-y-6">
          <div className="p-2 w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem]">
            <Image
              src={mainImage} // Utilisation de mainImage
              alt="Casque principal"
              width={600}
              height={600}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="grid grid-cols-2">
            {images.map((img,i) => (
              <div key={i} className="p-2 w-[10rem] h-[10rem]">
                <Image
                  src={img}
                  alt={`Détails casque ${i}`}
                  width={300}
                  height={300}
                  className="w-full h-auto cursor-pointer"
                  onClick={() =>
                    handleImageClick(
                      img,
                      mainImage
                    )
                  } // Appel avec chaîne de caractères
                />
              </div>
            ))}
          </div>
        </div>

        {/* Colonne Droite - Texte */}
        <div className="md:w-1/2 space-y-6 lg:mt-14">
          {/* Nouveau texte structuré en paragraphes */}
          <div className="text-gray-600">
          
          <div className="flex gap-1">
               <p>Pour rouler en toute sérénité, un bon équipement est indispensable. Le <span className="font-bold">RST Pantalon 5RL</span> est conçu pour offrir aux motards une protection optimale sans sacrifier le confort.</p>               </div>
          </div>
        </div>
      </div>

      {/* Nouvelle section Texte + Pub */}
      <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
        <div className="md:w-1/2 space-y-6">
                  <h2 className="text-2xl font-bold inline space-x-1">
            <span>{`Protection et Résistance`}</span>
             <span>
               {``} ?
             </span>
          </h2>

           <div className="space-y-6">
            <p>
              {`Fabriqué en textile haute résistance, ce pantalon est équipé de protections renforcées aux genoux et aux hanches. Sa conception robuste assure une excellente résistance à l’abrasion en cas de chute, tout en restant souple pour ne pas gêner les mouvements.`}
            </p>

             <h3 className="text-2xl font-bold">
               {`Confort et Adaptabilité`}
             </h3>
             <p>
                 {`Avec sa doublure thermique amovible et ses aérations stratégiquement placées, le RST 5RL s’adapte à toutes les saisons. Son système d’ajustement à la taille et aux chevilles garantit un maintien parfait, que ce soit pour un trajet quotidien ou une longue virée.`}
              </p>
            

            <h3 className="text-2xl font-bold">
              {`Un Pantalon Polyvalent`}
             </h3>
             <p className="">
               {`Pensé pour s’associer à une veste de moto, il est doté d’un zip de raccordement pour une protection encore plus efficace. Son design discret et moderne le rend aussi pratique`}
             </p>

         </div>
        </div>
        <div className="md:w-1/2 relative flex items-center justify-end">
                <div className="absolute sm:-top-[2rem] lg:-top-[15rem]">
                  <Image
                    src="/images/pub/faux-pub-long.webp"
                    alt="Publicité"
                    width={500}
                    height={900}
                    className="w-full h-[47rem] shadow-lg border-1 border-gray-200"
                  />
                  </div>
                </div>
      </div>

      {/* 3 Images en bas avec bordures jaunes*/}
      <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-24 mb-12">
        {[1, 2, 4].map((num) => (
          <div key={num} className="border-2 border-accent rounded-sm p-2">
            <Image
              src={`/images/accueil/pantalondetail.jpg`}
              alt={`Variante ${num}`}
              width={400}
              height={300}
              className="w-full h-auto cursor-pointer"
              // onClick={() =>
              //   handleImageClick(`/images/accueil/noir-mat-moto-${num}.webp`)
              // }
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

