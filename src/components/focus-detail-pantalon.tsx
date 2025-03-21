import { useState } from "react";
 import Image from "next/image";
 
 export default function FocusDetailPantalon() {
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