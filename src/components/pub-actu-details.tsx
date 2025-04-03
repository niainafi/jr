// 'use client'
import { api } from "@/lib/axios";
// import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

type PubType = {
  _id: string;
  image: string;
  position: string;
  __v: number;
};

const getPubImages = async () => {
  try {
    const res = await axios.get(
      "https://justride.up.railway.app/api/publicite-actus"
    );
    console.log(res);
    return (res.data || [] ) as PubType[];
  } catch (error) {
    console.error("Erreur pubs:", error);
    return [];
  }
};

export default async function PubActuDetails() {
//   const [pubs, setPubs] = useState<PubType[]>([]);
//   const [loading, setLoading] = useState(true);                         
const pubs = await getPubImages();
//   useEffect(() => {
//     async function getPub(){
//         try{
//             setLoading(true)
//             const pubs = await getPubImages();
//             if(pubs){
//                 setPubs(pubs)
//             }
//         }catch(err){
//             console.log(err)
//         }finally{
//             setLoading(false)
//         }
//     }
//     getPub();
//   },[])

//   if(loading){
//     return <div className="text-center py-10">Chargement des publicités...</div>
//   }
  if(!pubs || pubs.length === 0){
    return <></>
  }
  
  
      return (
        <>
          {/* Pub pour les écrans plus grands que 1280px (affichée à droite de l'article sur les ordinateurs) */}
          <div className="hidden xl:block w-[30%] sticky top-0 bottom-0">
            <Image
              src={pubs[0]?.image}
              alt="Publicité"
              width={300}
              height={700}
              className="w-full object-contain"
              style={{ objectFit: "cover" }} // Maintien l'aspect sans déformation
            />
          </div>
    
          {/* Pub pour les écrans plus petits que 1280px (affichée en bas de l'article sur les tablettes et téléphones) */}
          <div className="xl:hidden block w-[70%] mt-6">
            <Image
              src={pubs[0]?.image}
              alt="Publicité"
              width={300}
              height={700}
              className="w-full h-full object-contain"
              style={{ objectFit: "cover" }} // Maintien l'aspect sans déformation
            />
          </div>
        </>
      );
  

  
}
