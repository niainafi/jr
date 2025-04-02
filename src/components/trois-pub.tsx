 "use client";
 {/* 
import Image from 'next/image';
import React from 'react';
import Container from './container';

const TroisPub = () => {
  const imageNumbers = [1, 2, 3, 4];

  return (
    <Container>
      <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2  md:grid-cols-2 w-full gap-2'>
      {imageNumbers.map((num) => (
        <div key={num} className="border-2 rounded-sm overflow-hidden">
          <Image
            src={`/images/pub/faux-pub-3.webp`}
            alt={`Variante ${num}`}
            width={600}
            height={300}
            className="w-full h-[400px] sm:h-[360px] md:h-[360px] lg:h-[230px] xl:h-[300px] object-cover"
          />
        </div>
        
      ))}
      </div>
    </Container>
  );
};

export default TroisPub;
*/}

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Container from './container';

const TroisPub = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch('https://justride.up.railway.app/api/publicite-b');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des publicités');
        }
        const data = await response.json();
        setAds(data || []); // Assure que data est toujours un tableau
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur inconnue est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  if (loading) return <Container><div>Chargement des publicités...</div></Container>;
  if (error) return <Container><div>Erreur: {error}</div></Container>;
  if (!ads || ads.length === 0) return <Container><div>Aucune publicité disponible</div></Container>;

  return (
    <Container>
      <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 w-full gap-2'>
        {ads.map((ad: any) => {
          const imageUrl = ad?.image || '';
          const altText = `Publicité ${ad?.position || 'sans titre'}`;
          
          return (
            <div key={ad?._id || Math.random().toString(36).substring(2, 9)} className="overflow-hidden sm:py-0">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={altText}
                  width={400}
                  height={400}
                  className="w-full h-[400px] sm:h-[360px] md:h-[360px] lg:h-[230px] xl:h-[300px] 2xl:h-[400px] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/placeholder.webp';
                  }}
                />
              ) : (
                <div className="w-full h-[400px] sm:h-[360px] md:h-[360px] lg:h-[230px] xl:h-[300px] bg-gray-200 flex items-center justify-center">
                  <span>Image non disponible</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default TroisPub;