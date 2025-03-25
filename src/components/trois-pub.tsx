import Image from 'next/image';
import React from 'react';

const TroisPub = () => {
  const imageNumbers = [1, 2, 3,4];

  return (
    <div className="container mx-auto flex justify-center gap-6 mt-24 mb-12 max-w-[1200px]">
      {imageNumbers.map((num) => (
        <div key={num} className="border-2 rounded-sm overflow-hidden">
          <Image
            src={`/images/pub/faux-pub-3.webp`}
            alt={`Variante ${num}`}
            width={600}
            height={300}
            className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default TroisPub;
