"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./container";

export default function FocusDetailBelltrois() {
  const [mainImage, setMainImage] = useState<string>(
    "/images/accueil/bell.jpg"
  );
  const [images, setImages] = useState<string[]>([
    '/images/accueil/bell.jpg',
    '/images/accueil/bell.jpg',
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
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{`Bell Moto 3 : Le Mythe Renaît sur les Routes`}</h1>
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
              <p>Certains casques sont simplement iconiques. <span className="font-bold">Le Bell Moto 3 </span>,{` c’est un bout d’histoire du tout-terrain, un symbole des belles années du motocross et de l’adrénaline pure. Né dans les années 70, il a protégé les têtes des plus grands pilotes, traversé les époques et revient aujourd’hui avec un look rétro intact, mais avec des matériaux et une sécurité aux standards actuels.`}</p><br/>
              <p>Coque en <span className="font-bold">fibre composite ultra-légère</span>, intérieur en <span className="font-bold">mousse EPS à densité multiple</span>, une <span className="font-bold">ventilation optimisée</span> et une visière réglable typique des casques cross old-school… Tout est là ! Que tu roules en scrambler, en enduro ou en vintage, le <span className="font-bold">Bell Moto 3</span> est le casque parfait pour les puristes et les nostalgiques du tout-terrain old school.<span className="font-bold"> Enfile-le, démarre ta bécane et ride comme une légende !</span></p>
              </div>

              </div>
        </div>
      </div>

      {/* Nouvelle section Texte + Pub */}
      <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold inline space-x-1">
            <span>{`Bell Moto 3`}</span>
            <span>
              {``}
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
              src={`/images/accueil/bell.jpg`}
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
