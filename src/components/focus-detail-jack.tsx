"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./container";

export default function FocusDetailJack() {
  const [mainImage, setMainImage] = useState<string>(
    "/images/accueil/jack.jpg"
  );
  const [images, setImages] = useState<string[]>([
    '/images/accueil/jack.jpg',
    '/images/accueil/jack.jpg',
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
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{`RST Lumberjack Reinforced : Le Style Authentique, la Sécurité Motard`}</h1>
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
            
              <div className="">
              <p>Tu aimes le style bûcheron, mais pas question de négliger ta sécurité à moto ? La <span className="font-bold">RST Lumberjack Reinforced</span> est la chemise qu’il te faut ! Avec son look intemporel en flanelle à carreaux, elle passe partout, en ville comme sur la route, tout en cachant une vraie protection.</p>
              <p>Sous son apparence décontractée, elle intègre une doublure en <span className="font-bold">aramide ultra-résistant</span> et des <span className="font-bold">protections CE aux coudes et aux épaules</span>, pour rouler en toute confiance. Confortable, respirante et plus légère qu’un blouson classique, elle est parfaite pour les beaux jours et s’adapte à toutes tes sorties à moto.</p>
              <p className="font-bold">{`La RST Lumberjack, c’est l’alliance parfaite entre authenticité et sécurité. Adopte le look bûcheron sans compromis !`}</p>
              </div>

              </div>
        </div>
      </div>

      {/* Nouvelle section Texte + Pub */}
      <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold inline space-x-1">
            <span>{`RST Lumberjack Reinforced`}</span>
            <span>
              {} ?
            </span>
          </h2>

          <div className="space-y-6 min-h-[30rem]">
            {/* <p>
              {`Les motards recherchent toujours le meilleur en matière de
              sécurité et de confort. Aujourd’hui, Just Ride vous propose le
              casque Bell Lithium MIPS. Mais avant tout, c’est quoi le MIPS ?`}
            </p>

            
              <p>
                {`Le MIPS, ou Système de Protection Multi-directionnelle
                Une technologie qui réduit les forces de rotation en cas
                d’impact oblique, offrant une protection supplémentaire à la
                tête.`}
              </p> */}
            

            {/* <h3 className="text-2xl font-bold">
              {`Bell Lithium MIPS : La Référence`}
            </h3>
            <p>
              {`Le Bell Lithium MIPS combine sécurité et confort. Avec son design
              soigné, il intègre le MIPS pour réduire les risques de lésions en
              cas de choc.`}
            </p>

            <h3 className="text-2xl font-bold">{`Confort et Ventilation`}</h3>
            <p>
              {`Ce casque ne se contente pas d’être sécuritaire. Il offre aussi un
              confort optimal grâce à une bonne ventilation, idéale pour les
              trajets longs ou sous chaleur.`}
            </p>

            <p>
              {`Le Bell Lithium MIPS est un excellent choix pour allier sécurité
              et confort sans compromis. Prêt à rouler en toute confiance ? Le
              Bell Lithium MIPS est là pour toi, il t’attend en Boutique.`}
            </p> */}
          </div>
        </div>

        <div className="md:w-1/2 relative flex items-center justify-end">
        <div className="absolute sm:-top-[2rem] lg:-top-[9rem]">
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
              src={`/images/accueil/jack.jpg`}
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
