"use client";
{/*
import { useState } from "react";
import Image from "next/image";
import Container from "./container";

export default function FocusDetailCasque() {
  const [mainImage, setMainImage] = useState<string>(
    "/images/accueil/noir-mat-moto-1.webp"
  );
  const [images, setImages] = useState<string[]>([
    '/images/accueil/noir-mat-moto-2.webp',
    '/images/accueil/noir-mat-moto-4.webp',
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
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{`CASQUE BELL LITHIUM MIPS`}</h1>
        <span className="w-[34%] h-2 bg-accent rounded-md"></span>
      </div>
      {/* Section Principale 
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Colonne Gauche - Images
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

        {/* Colonne Droite - Texte 
        <div className="md:w-1/2 space-y-6 lg:mt-14">
          {/* Nouveau texte structuré en paragraphes 
          <div className="text-gray-600">
            <dl className="">
              <div className="flex gap-1">
                <dt className="font-bold">{`TYPE DE CASQUE :`}</dt>
                <dd>{`Intégral`}</dd>
              </div>

              <div className="flex gap-1">
                <dt className="font-bold">{`VERNIS DE PROTECTION :`}</dt>
                <dd>{`Mat`}</dd>
              </div>

              <div className="flex gap-1">
                <dt className="font-bold">{`FERMETURE :`}</dt>
                <dd>{`Boucle double D`}</dd>
              </div>

              <div className="flex gap-1">
                <dt className="font-bold">{`COQUE :`}</dt>
                <dd>{`Polycarbonate / AES`}</dd>
              </div>

              <div className="flex gap-1">
                <dt className="font-bold">{`TAILLES DE COQUES :`}</dt>
                <dd>{`CALOTINS: MIPS®`}</dd>
              </div>

              <div className="flex gap-1">
                <dt className="font-bold block">{`ÉCRAN :`}</dt>
                <div>
                  <dd className="block">{`Incolore`}</dd>
                  <dd className="block">{`Pinlock ready`}</dd>
                  <dd className="block">{`Optique de classe 1`}</dd>
                  <dd className="block">{`Démontage sans outil`}</dd>
                </div>
              </div>

              <div className="flex gap-1">
                <dt className="font-bold">{`SYSTÈME DE VENTILATION :`}</dt>
                <dd>{`Réglable`}</dd>
              </div>

              <div className="flex gap-1">
                <dt className="font-bold">{`ÉCRAN SOLAIRE RÉTRACTABLE :`}</dt>
                <dd>{`Fumé`}</dd>
              </div>

              <div className="flex gap-1">
                <dt className="font-bold block">{`INTÉRIEUR :`}</dt>
                <div>
                  <dd className="block">{`Démontable et lavable`}</dd>
                  <dd className="block">{`Anti-bactérien ionici™`}</dd>
                </div>
              </div>

              <div className="inline lg:flex gap-1">
                <dt className="font-bold">{`ESPACE PRÉVU POUR LES ÉCOUTEURS DES INTERCOM : `}</dt>
                <dd>{`Oui`}</dd>
              </div>

              <div className="flex gap-1">
                <dt className="font-bold">{`HOMOLOGATION : `}</dt>
                <dd>{`ECE 22 Ø6`}</dd>
              </div>

              <div className="inline gap-1">
                <dt className="font-bold">{`ACCESSOIRES FOURNIS : `}</dt>
                <dd>{`Écran anti-buée Pinlock Incolore`}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Nouvelle section Texte + Pub 
      <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold inline space-x-1">
            <span>{`BELL LITHIUM MIPS`}</span>
            <span>
              {`Mais c'est quoi ce MIPS`} ?
            </span>
          </h2>

          <div className="space-y-6">
            <p>
              {`Les motards recherchent toujours le meilleur en matière de
              sécurité et de confort. Aujourd’hui, Just Ride vous propose le
              casque Bell Lithium MIPS. Mais avant tout, c’est quoi le MIPS ?`}
            </p>

            
              <p>
                {`Le MIPS, ou Système de Protection Multi-directionnelle
                Une technologie qui réduit les forces de rotation en cas
                d’impact oblique, offrant une protection supplémentaire à la
                tête.`}
              </p>
            

            <h3 className="text-2xl font-bold">
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
            </p>
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

      {/* 3 Images en bas avec bordures jaunes
      <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-24 mb-12">
        {[1, 2, 4].map((num) => (
          <div key={num} className="border-2 border-accent rounded-sm p-2">
            <Image
              src={`/images/accueil/noir-mat-moto-${num}.webp`}
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
*/}

import { useState } from "react";
import Image from "next/image";
import Container from "./container";
import PubFocus from "./pub-focus";
import { DataFocusType } from "@/data/data-focus";

export default function FocusDetailCasque({focus}:{focus: DataFocusType}) {
  const [mainImage, setMainImage] = useState<string>(
    focus.pictures[0].src
  );
  const [images, setImages] = useState<string[]>([
    focus.pictures[1].src,
    focus.pictures[2].src,
  ]);

  const handleImageClick = (imageSrc: string, currentSelectedImageUrl: string) => {
    setMainImage(imageSrc);
    setImages(prev => {
      const newImages = [...prev];
      const index = newImages.indexOf(imageSrc);
      newImages[index] = currentSelectedImageUrl;
      return newImages;
    });
  };

  return (
    <Container className="2xl:max-w-7xl mt-10 mb-10 flex flex-col items-center">
      {/* Titre avec tiret sous le titre */}
      <div className="flex w-full justify-center">
      <div className="flex flex-col gap-5 mb-12 lg:max-w-xl">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{focus.title}</h1>
        <span className="w-[34%] h-2 bg-accent rounded-md"></span>
      </div>
      </div>

      {/* Section Principale */}
      <div className="flex flex-col w-full items-center gap-1 mb-12 border-2 border-accent rounded-md">
        {/* Image principale */}
        <div className="p-2 w-[17rem] h-[17rem] sm:w-[20rem] sm:h-[20rem] lg:w-[30rem] lg:h-[30rem]">
          <Image
            src={mainImage} // Utilisation de mainImage
            alt="Casque principal"
            width={600}
            height={600}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Section des images supplémentaires */}
        <div className="flex gap-6 mt-6">
          {images.map((img, i) => (
            <div key={i} className="p-2 w-[7rem] h-[7rem] sm:w-[10rem] sm:h-[10rem]">
              <Image
                src={img}
                alt={`Détails casque ${i}`}
                width={300}
                height={300}
                className="w-full h-full cursor-pointer"
                onClick={() => handleImageClick(img, mainImage)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Section Texte + Pub avec centrage */}
      <div className="w-full space-y-6 mb-16">
          {focus.spefification}
      </div>

      {/* Nouvelle section Texte + Pub */}
      <div className="flex flex-col md:flex-row gap-10 items-start w-full">
        {focus.description}
      </div>

      {/* 3 Images en bas avec bordures jaunes et centrées */}
      <PubFocus />
    </Container>
  );
}

