"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./container";

export default function FocusDetailPantalon() {
  const [mainImage, setMainImage] = useState<string>(
    "/images/accueil/blouson22.jpg"
  );
  const [images, setImages] = useState<string[]>([
    '/images/accueil/blousonveste.webp',
    '/images/accueil/blousonveste.webp',
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
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{`RST Alpha 5 : Sécurité et Confort pour Tous les Motards`}</h1>
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
              <p>Quand on roule à moto, une bonne veste est essentielle pour allier protection et confort. La <span className="font-bold"> RST Alpha 5</span> est conçue pour offrir aux motards une sécurité optimale sans négliger le style et la praticité.</p>
              </div>
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
               {`Fabriquée avec des matériaux robustes, cette veste assure une excellente résistance à l’abrasion en cas de chute. Ses protections intégrées aux épaules et aux coudes offrent une sécurité renforcée, tout en restant légères et confortables à porter.`}
             </p>

             <h3 className="text-2xl font-bold">
               {`Confort au Quotidien`}
             </h3>
               <p>
                 {`Pensée pour s’adapter à toutes les conditions, la RST Alpha 5 est équipée d’une doublure thermique amovible et d’un système de ventilation efficace, idéal pour rouler par tous les temps. Ses ajustements au niveau des poignets, de la taille et du col garantissent une coupe ajustée et agréable.`}
               </p>
            

            <h3 className="text-2xl font-bold">
              {`Un Choix Idéal pour les Motards`}
             </h3>
            <p>
              {`Avec son design moderne et ses finitions soignées, la RST Alpha 5 est une veste qui combine sécurité, confort et praticité. Que ce soit pour un trajet quotidien ou une longue balade, elle vous accompagne avec style et fiabilité.`}
            </p>

            
             <p className="mt-20">
              {`Prêt à rouler en toute sérénité ? La RST Alpha 5 est là pour vous !`}
             </p>
         </div>
        </div>
      
      </div>

      {/* 3 Images en bas avec bordures jaunes*/}
      <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-24 mb-12">
        {[1, 2, 4].map((num) => (
          <div key={num} className="border-2 border-accent rounded-sm p-2">
            <Image
              src={`/images/accueil/blousonveste.webp`}
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
