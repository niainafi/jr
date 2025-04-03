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
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-10 md:mt-12 lg:mt-14 xl:mt-24 mb-12 text-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex flex-col animate-pulse gap-3 p-1">
            <div className="w-full h-64 bg-gray-200 rounded-sm"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 rounded bg-gray-200 w-3/4 mx-auto"></div>
              <div className="space-y-2">
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="h-2 rounded bg-gray-200 w-5/6"></div>
                <div className="h-2 rounded bg-gray-200 w-1/2"></div>
              </div>
              <div className="h-3 rounded bg-gray-200 w-1/3 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    );
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
