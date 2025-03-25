import Image from 'next/image';
import React from 'react';
import Container from './container';

const TroisPub = () => {
  const imageNumbers = [1, 2, 3,4];

  return (
    <Container>
      <div className='grid grid-cols-1  lg:grid-cols-4 md:grid-cols-1 w-full gap-2'>
      {imageNumbers.map((num) => (
        <div key={num} className="border-2 rounded-sm overflow-hidden">
          <Image
            src={`/images/pub/faux-pub-3.webp`}
            alt={`Variante ${num}`}
            width={600}
            height={300}
            className="w-full h-[200px] md:h-[250px] lg:h-[360px] object-cover"
          />
        </div>
        
      ))}
      </div>
    </Container>
  );
};

export default TroisPub;
