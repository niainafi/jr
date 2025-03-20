'use client';
{/* 
import { useState } from 'react';
import Image from 'next/image';

export default function FocusDetailCasque() {
  const [mainImage, setMainImage] = useState<string>("/images/accueil/noir-mat-moto-1.webp");

  const handleImageClick = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Section Principale 
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Colonne Gauche - Images
        <div className="md:w-1/2 space-y-6">
          <div className="border-2 border-gray-200 rounded-xl p-2">
            <Image
              src={mainImage} // Utilisation de mainImage
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
                  onClick={() => handleImageClick(`/images/accueil/noir-mat-moto-${num}.webp`)} // Appel avec chaîne de caractères
                />
              </div>
            ))}
          </div>
        </div>

        {/* Colonne Droite - Texte 
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold">CASQUE BELL LITHIUM MIPS</h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            BELL LITHIUM MIPS Mode CWB goal on MIPS 2
          </h2>

          <div className="grid grid-cols-1 gap-4 text-sm">
            {/* Colonne 1 avec les nouvelles informations 
            <div className="">
              <div className='flex'>
                <dt className="font-semibold">TYPE DE CASQUE :</dt>
                <dd className="text-gray-600">Intégral</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">VERNIS DE PROTECTION :</dt>
                <dd className="text-gray-600">Mat</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">FERMETURE :</dt>
                <dd className="text-gray-600">Boucle double D</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">COQUE :</dt>
                <dd className="text-gray-600">Polycarbonate / ABS</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">TAILLES DE COQUES :</dt>
                <dd className="text-gray-600">3</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">CALOTINS :</dt>
                <dd className="text-gray-600">MIPS-B</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">Pinlock :</dt>
                <dd className="text-gray-600">Ready</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">ECRAN :</dt>
                <dd className="text-gray-600">Incolore</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">Optique :</dt>
                <dd className="text-gray-600">Classe 1</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">Démontage :</dt>
                <dd className="text-gray-600">Sans outil</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">SYSTÈME DE VENTILATION :</dt>
                <dd className="text-gray-600">Réglable</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">ÉCRAN SOLAIRE :</dt>
                <dd className="text-gray-600">Rétractable (fumé)</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">INTERIEUR :</dt>
                <dd className="text-gray-600">Démontable et lavable</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">ANTI-BACTÉRIEN :</dt>
                <dd className="text-gray-600">Ionic</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">ESPACE PRÉVU POUR LES ÉCOUTEURS :</dt>
                <dd className="text-gray-600">Intercoms</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">HOMOLOGATION :</dt>
                <dd className="text-gray-600">ECE 22 06</dd>
              </div>
              <div className='flex'>
                <dt className="font-semibold">ACCESSOIRES FOURNIS :</dt>
                <dd className="text-gray-600">Écran anti-buée Pinlock incolore</dd>
              </div>
            </div>
          </div>

          {/* Section Référence avec Pub 
          <div className="flex flex-col md:flex-row gap-8 items-start">
           
          </div>
        </div>
      </div>

      {/* Nouvelle section Texte + Pub 
      <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-3xl font-bold">
            BELL LITHIUM MIPS<br />
            <span className="text-2xl font-normal">{`Mais c'est quoi ce MIPS`} ?</span>
          </h2>

          <div className="">
            <p className="text-gray-600">
              {`èLes motards recherchent toujours le meilleur en matière de sécurité et de confort. 
              Aujourd'hui, Jusr Ride vous propose le casque Bell Lithium MIPS. Mais avant tout, 
              c'est quoi le MIPS ?`}
            </p>

            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="font-semibold text-lg mb-2">Le MIPS, ou Système de Protection Multi-directionnelle :</p>
              <p className="text-gray-600">
              {`Une technologie qui réduit les forces de rotation en cas d'impact oblique, 
                offrant une protection supplémentaire à la tête.`}
              </p>
            </div>

            <h3 className="text-2xl font-bold">Bell Lithium MIPS : La Référence</h3>
            <p className="text-gray-600">
            {`
              Le Bell Lithium MIPS combine sécurité et confort. Avec son design soigné, 
              il intègre le MIPS pour réduire les risques de lésions en cas de choc.`}
            </p>

            <h3 className="text-2xl font-bold">Confort et Ventilation</h3>
            <p className="text-gray-600">{`
              Ce casque ne se contente pas d'être sécuritaire. Il offre aussi un confort optimal 
              grâce à une bonne ventilation, idéale pour les trajets longs ou sous chaleur.`}
            </p>

            <div className="bg-yellow-100 p-6 rounded-xl">
              <p className="font-bold text-lg">
                Prêt à rouler en toute confiance ?<br />
                Le Bell Lithium MIPS est là pour toi<br />
                <span className="text-red-600">{`Il t'attend en Boutique`}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 sticky top-8">
          <Image
            src="/images/pub/photo.webp"
            alt="Publicité"
            width={500}
            height={900}
            className="w-full h-auto rounded-xl shadow-lg border-4 border-gray-200"
          />
        </div>
      </div>

      {/* 3 Images en bas avec bordures jaunes 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[1, 2, 4].map((num) => (
          <div key={num} className="border-4 border-yellow-500 rounded-xl p-2">
            <Image
              src={`/images/accueil/noir-mat-moto-${num}.webp`}
              alt={`Variante ${num}`}
              width={400}
              height={300}
              className="w-full h-auto rounded-lg cursor-pointer"
              onClick={() => handleImageClick(`/images/accueil/noir-mat-moto-${num}.webp`)} // Appel avec chaîne de caractères
            />
          </div>
        ))}
      </div>
    </div>
  );
}
   */}


 {/* 
import { useState } from "react";
import Image from "next/image";

export default function FocusDetailCasque() {
  const [mainImage, setMainImage] = useState<string>("/images/accueil/noir-mat-moto-1.webp");

  const handleImageClick = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Section Principale 
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Colonne Gauche - Images
        <div className="md:w-1/2 space-y-6">
          <div className="p-2">
            <Image
              src={mainImage} // Utilisation de mainImage
              alt="Casque principal"
              width={600}
              height={600}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[2, 4].map((num) => (
              <div key={num} className="p-2">
                <Image
                  src={`/images/accueil/noir-mat-moto-${num}.webp`}
                  alt={`Détails casque ${num}`}
                  width={300}
                  height={300}
                  className="w-full h-auto cursor-pointer"
                  onClick={() => handleImageClick(`/images/accueil/noir-mat-moto-${num}.webp`)} // Appel avec chaîne de caractères
                />
              </div>
            ))}
          </div>
        </div>

        {/* Colonne Droite - Texte 
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold">CASQUE BELL LITHIUM MIPS</h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            BELL LITHIUM MIPS Mode CWB goal on MIPS 2
          </h2>
          <>
          <p className="mt-6 text-base md:text-lg leading-relaxed">
            Tu n’as pas encore ta carte de fidélité Cashback Just Ride ? C’est le moment de la récupérer ! Lors de ton prochain achat à la boutique Just Ride*, ta carte Cashback te sera remise et tu pourras commencer à accumuler des remises directement sur ton compte.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            Déjà membre ? Connecte-toi avec ton login et ton mot de passe pour voir la somme que tu as déjà accumulée. Et ce n’est pas tout ! En tant que membre, tu bénéficies aussi d’avantages exclusifs : avant-premières, remises spéciales avec nos partenaires, promotions prolongées et accès VIP à nos événements !
          </p>
        </>
          <div className="grid grid-cols-1 gap-4 text-sm">
            {/* Liste des caractéristiques
            <div className="">
              <div className="flex">
                <dt className="font-semibold">TYPE DE CASQUE :</dt>
                <dd className="text-gray-600">Intégral</dd>
              </div>
              <div className="flex">
                <dt className="font-semibold">VERNIS DE PROTECTION :</dt>
                <dd className="text-gray-600">Mat</dd>
              </div>
              <div className="flex">
                <dt className="font-semibold">FERMETURE :</dt>
                <dd className="text-gray-600">Boucle double D</dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nouvelle section Texte + Pub 
      <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-3xl font-bold">
            BELL LITHIUM MIPS<br />
            <span className="text-2xl font-normal">
              {`Mais c'est quoi ce MIPS`} ?
            </span>
          </h2>

          <div className="">
            <p className="text-gray-600">
              {`Les motards recherchent toujours le meilleur en matière de sécurité et de confort. 
              Aujourd'hui, Just Ride vous propose le casque Bell Lithium MIPS. Mais avant tout, 
              c'est quoi le MIPS ?`}
            </p>

            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="font-semibold text-lg mb-2">
                Le MIPS, ou Système de Protection Multi-directionnelle :
              </p>
              <p className="text-gray-600">
                {`Une technologie qui réduit les forces de rotation en cas d'impact oblique, 
                offrant une protection supplémentaire à la tête.`}
              </p>
            </div>

            <h3 className="text-2xl font-bold">Bell Lithium MIPS : La Référence</h3>
            <p className="text-gray-600">
              {`Le Bell Lithium MIPS combine sécurité et confort. Avec son design soigné, 
              il intègre le MIPS pour réduire les risques de lésions en cas de choc.`}
            </p>

            <h3 className="text-2xl font-bold">Confort et Ventilation</h3>
            <p className="text-gray-600">
              {`Ce casque ne se contente pas d'être sécuritaire. Il offre aussi un confort optimal 
              grâce à une bonne ventilation, idéale pour les trajets longs ou sous chaleur.`}
            </p>

            <div className="p-6">
              <p className="font-bold text-lg">
                {`Prêt à rouler en toute confiance ?`}<br />
                {`Le Bell Lithium MIPS est là pour toi`}<br />
                <span className="">
                  {`Il t'attend en Boutique`}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 sticky top-8">
          <Image
            src="/images/pub/photo.webp"
            alt="Publicité"
            width={500}
            height={900}
            className="w-full h-auto rounded-xl shadow-lg border-4 border-gray-200"
          />
        </div>
      </div>

      {/* 3 Images en bas avec bordures jaunes
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[1, 2, 4].map((num) => (
          <div key={num} className="border-4 border-accent rounded-xl p-2">
            <Image
              src={`/images/accueil/noir-mat-moto-${num}.webp`}
              alt={`Variante ${num}`}
              width={400}
              height={300}
              className="w-full h-auto cursor-pointer"
              onClick={() => handleImageClick(`/images/accueil/noir-mat-moto-${num}.webp`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
 */}
 
 import { useState } from "react";
 import Image from "next/image";
 
 export default function FocusDetailCasque() {
   const [mainImage, setMainImage] = useState<string>("/images/accueil/noir-mat-moto-1.webp");
 
   const handleImageClick = (imageSrc: string) => {
     setMainImage(imageSrc);
   };
 
   return (
     <div className="max-w-5xl mx-auto px-4 py-8">
       {/* Section Principale */}
       <div className="flex flex-col md:flex-row gap-8 mb-12">
         {/* Colonne Gauche - Images*/}
         <div className="md:w-1/2 space-y-6">
           <div className="p-2">
             <Image
               src={mainImage} // Utilisation de mainImage
               alt="Casque principal"
               width={600}
               height={600}
               className="w-full h-full object-contain"
             />
           </div>
 
           <div className="grid grid-cols-2 gap-4">
             {[2, 4].map((num) => (
               <div key={num} className="p-2">
                 <Image
                   src={`/images/accueil/noir-mat-moto-${num}.webp`}
                   alt={`Détails casque ${num}`}
                   width={300}
                   height={300}
                   className="w-full h-auto cursor-pointer"
                   onClick={() => handleImageClick(`/images/accueil/noir-mat-moto-${num}.webp`)} // Appel avec chaîne de caractères
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
 
           {/* Nouveau texte structuré en paragraphes */}
           <div className="space-y-4 text-gray-600">
             <p><strong>TYPE DE CASQUE :</strong> Intégral</p>
             <p><strong>VERNIS DE PROTECTION :</strong> Mat</p>
             <p><strong>FERMETURE :</strong> Boucle double D</p>
             <p><strong>COQUE :</strong> Polycarbonate / AES</p>
             <p><strong>TAILLES DE COQUES :</strong> CALOTINS: MIPS®</p>
             <p><strong>ÉCRAN :</strong> Incolore</p>
             <p>Pinlock ready</p>
             <p>Optique de classe 1</p>
             <p>Démontage sans outil</p>
             <p><strong>SYSTÈME DE VENTILATION :</strong> Réglable</p>
             <p><strong>ÉCRAN SOLAIRE RÉTRACTABLE :</strong> Fumé</p>
             <p><strong>INTÉRIEUR :</strong> Démontable et lavable</p>
             <p>Anti-bactérien ionici™</p>
             <p><strong>ESPACE PRÉVU POUR LES ÉCOUTEURS DES INTERCOM :</strong> Oui</p>
             <p><strong>HOMOLOGATION :</strong> ECE 22 Ø6</p>
             <p><strong>ACCESSOIRES FOURNIS :</strong> Écran anti-buée Pinlock Incolore</p>
           </div>
         </div>
       </div>
 
       {/* Nouvelle section Texte + Pub */}
       <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
         <div className="md:w-2/3 space-y-6">
           <h2 className="text-3xl font-bold">
             BELL LITHIUM MIPS<br />
             <span className="text-2xl font-normal">
               {`Mais c'est quoi ce MIPS`} ?
             </span>
           </h2>
 
           <div className="space-y-6">
             <p className="text-gray-600">
               Les motards recherchent toujours le meilleur en matière de sécurité et de confort. Aujourd’hui, Just Ride vous propose le casque Bell Lithium MIPS. Mais avant tout, c’est quoi le MIPS ?
             </p>
 
             <div className="bg-gray-50 p-6 rounded-xl">
               <p className="font-semibold text-lg mb-2">
                 Le MIPS, ou Système de Protection Multi-directionnelle :
               </p>
               <p className="text-gray-600">
                 Une technologie qui réduit les forces de rotation en cas d’impact oblique, offrant une protection supplémentaire à la tête.
               </p>
             </div>
 
             <h3 className="text-2xl font-bold">Bell Lithium MIPS : La Référence</h3>
             <p className="text-gray-600">
               Le Bell Lithium MIPS combine sécurité et confort. Avec son design soigné, il intègre le MIPS pour réduire les risques de lésions en cas de choc.
             </p>
 
             <h3 className="text-2xl font-bold">Confort et Ventilation</h3>
             <p className="text-gray-600">
               Ce casque ne se contente pas d’être sécuritaire. Il offre aussi un confort optimal grâce à une bonne ventilation, idéale pour les trajets longs ou sous chaleur.
             </p>
 
             <p className="text-gray-600">
               Le Bell Lithium MIPS est un excellent choix pour allier sécurité et confort sans compromis. Prêt à rouler en toute confiance ? Le Bell Lithium MIPS est là pour toi, il t’attend en Boutique.
             </p>
           </div>
         </div>
 
         <div className="md:w-1/3 sticky top-8">
           <Image
             src="/images/pub/photo.webp"
             alt="Publicité"
             width={500}
             height={900}
             className="w-full h-auto rounded-xl shadow-lg border-4 border-gray-200"
           />
         </div>
       </div>
 
       {/* 3 Images en bas avec bordures jaunes*/}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
         {[1, 2, 4].map((num) => (
           <div key={num} className="border-4 border-accent rounded-xl p-2">
             <Image
               src={`/images/accueil/noir-mat-moto-${num}.webp`}
               alt={`Variante ${num}`}
               width={400}
               height={300}
               className="w-full h-auto cursor-pointer"
               onClick={() => handleImageClick(`/images/accueil/noir-mat-moto-${num}.webp`)}
             />
           </div>
         ))}
       </div>
     </div>
   );
 }