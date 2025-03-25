import React from "react";
import Image from "next/image";

export default function PubFocus() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-10 md:mt-12 lg:mt-14 xl:mt-24 mb-12 text-center">
      {[1, 2, 4].map((num) => (
        <div key={num} className="border-2 border-accent rounded-sm mx-auto">
          <Image
            src={`/images/pub/faux-pub-3.webp`}
            alt={`Variante ${num}`}
            width={400}
            height={300}
            className="w-full h-auto cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}
