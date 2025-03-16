'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function FocusDetailCasque() {
  const [mainImage, setMainImage] = useState<string>("/images/accueil/noir-mat-moto-1.webp");

  const handleImageClick = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Section Principale */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Colonne Gauche - Images */}
        <div className="md:w-1/2 space-y-6">
          <div className="border-2 border-gray-200 rounded-xl p-2">
            <Image
              src={mainImage}
              alt="Casque principal"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[2, 4].map((num) => (
              <div key={num} className="border-2 border-gray-200 rounded-xl p-2">
                <Image
                  src={`/images/accueil/noir-mat-moto-${num}.webp`}
                  alt={`Détails casque ${num}`}
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(`/images/accueil/noir-mat-moto-${num}.webp`)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Colonne Droite - Texte */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold">CASQUE BELL LITHIUM MIPS</h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            BELL LITHIUM MIPS Mode CWB goal on MIPS 2
          </h2>

          <div className="grid grid-cols-2 gap-4 text-sm">
            {/* Caractéristiques */}
            <div className="space-y-4">
              {[
                ["TYPE DE CASQUE", "Intégral"],
                ["VERNIS DE PROTECTION", "Mat"],
                ["FERMETURE", "Boucle double D"],
                ["COQUE", "Polycarbonate / ABS"],
                ["TAILLES DE COQUES", "3"],
                ["CALOTINS", "MIPS-B"],
                ["Pinlock", "Ready"],
                ["ECRAN", "Incolore"],
                ["Optique", "Classe 1"],
                ["Démontage", "Sans outil"],
                ["SYSTÈME DE VENTILATION", "Réglable"],
                ["ÉCRAN SOLAIRE", "Rétractable (fumé)"],
                ["INTERIEUR", "Démontable et lavable"],
                ["ANTI-BACTÉRIEN", "Ionic"],
                ["ESPACE PRÉVU POUR LES ÉCOUTEURS", "Intercoms"],
                ["HOMOLOGATION", "ECE 22 06"],
                ["ACCESSOIRES FOURNIS", "Écran anti-buée Pinlock incolore"],
              ].map(([title, value]) => (
                <div key={title} className="flex">
                  <dt className="font-semibold">{title} :</dt>
                  <dd className="text-gray-600 ml-2">{value}</dd>
                </div>
              ))}
            </div>
          </div>

          {/* Section Référence */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4">BELL lithium MIPS 1.0 Référence</h3>
              <p className="mb-4">
                La BG Lithium MIPS représente plus long terme l’effet. Avec une utilisation 
                de l’état de base, le MIPS a été utilisé sur les mesures suivantes :
              </p>

              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Combat et ventilation</strong>
                  <ul className="list-circle pl-4 mt-2 space-y-2">
                    <li>Caractère : une maintenance avec effets alimentaires à cellules...</li>
                    <li>
                      Une utilisation de l’état de base :
                      <ul className="list-square pl-4 mt-2">
                        <li>La batterie : maintenance avec effets alimentaires...</li>
                        <li>La batterie : maintenance avec effets alimentaires...</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Nouvelle section Texte + Explication MIPS */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-3xl font-bold">
            BELL LITHIUM MIPS<br />
            <span className="text-2xl font-normal">Mais c'est quoi ce MIPS ?</span>
          </h2>

          <div className="space-y-4">
            <p className="text-gray-600">
              Les motards recherchent toujours le meilleur en matière de sécurité et de confort. 
              Aujourd'hui, Just Ride vous propose le casque Bell Lithium MIPS. Mais avant tout, 
              c'est quoi le MIPS ?
            </p>

            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="font-semibold text-lg mb-2">Le MIPS, ou Système de Protection Multi-directionnelle :</p>
              <p className="text-gray-600">
                Une technologie qui réduit les forces de rotation en cas d'impact oblique, 
                offrant une protection supplémentaire à la tête.
              </p>
            </div>

            <h3 className="text-2xl font-bold">Bell Lithium MIPS : La Référence</h3>
            <p className="text-gray-600">
              Le Bell Lithium MIPS combine sécurité et confort. Avec son design soigné, 
              il intègre le MIPS pour réduire les risques de lésions en cas de choc.
            </p>

            <h3 className="text-2xl font-bold">Confort et Ventilation</h3>
            <p className="text-gray-600">
              Ce casque ne se contente pas d'être sécuritaire. Il offre aussi un confort optimal 
              avec un système de ventilation performant pour une aération efficace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
