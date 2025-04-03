// import React from "react";
// import Image from "next/image";

// export default function PubFocus() {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-10 md:mt-12 lg:mt-14 xl:mt-24 mb-12 text-center">
//       {[1, 2, 4].map((num) => (
//         <div key={num} className="border-2 border-accent rounded-sm mx-auto">
//           <Image
//             src={`/images/pub/faux-pub-3.webp`}
//             alt={`Variante ${num}`}
//             width={400}
//             height={300}
//             className="w-full h-auto cursor-pointer"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import Image from "next/image";


type Advertisement = {
  _id: string;
  image: string;
  position: string;
  __v: number;
};
export default function PubFocus() {
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch("https://justride.up.railway.app/api/publicite-focus");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des publicités");
        }
        const data = await response.json();
        setAds(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Chargement des publicités...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Erreur: {error}</div>;
  }

  if (ads.length === 0) {
    return <div className="text-center py-10">Aucune publicité disponible</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-10 md:mt-12 lg:mt-14 xl:mt-24 mb-12 text-center">
      {ads.map((ad) => (
        <div key={ad._id} className="border-2 rounded-sm mx-auto">
          <Image
            src={ad.image}
            alt={`Publicité ${ad.position}`}
            width={400}
            height={300}
            className="w-full h-auto cursor-pointer"
            unoptimized // Optionnel: si vous avez des problèmes avec les URLs externes
          />
        </div>
      ))}
    </div>
  );
}

