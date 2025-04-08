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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/swipper.css';

interface Ad {
  _id: string;
  image: string;
  position?: string;
}

const TroisPub = () => {
  const [ads, setAds] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch('https://justride.up.railway.app/api/publicite-b');
        if (!response.ok) throw new Error('Erreur lors de la récupération des publicités');
        const data = await response.json();
        const validAds = Array.isArray(data)
          ? data.filter((item): item is Ad => item && typeof item._id === 'string' && typeof item.image === 'string')
          : [];
        setAds(validAds);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur inconnue est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  if (loading) return <Container><div>Chargement des publicités...</div></Container>;
  if (error) return <Container><div className="text-red-500">Erreur: {error}</div></Container>;
  if (!ads || ads.length === 0) return <Container><div>Aucune publicité disponible</div></Container>;

  return (
    <Container>
      {/* Carousel pour écrans mobiles uniquement */}
      <div className="sm:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={ads.length > 1}
        >
          {ads.map((ad) => (
            <SwiperSlide key={ad._id}>
              <div className="overflow-hidden w-full h-[400px]">
                <Image
                  src={ad.image}
                  alt={`Publicité ${ad.position || ''}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/placeholder.webp';
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grille pour tablette et desktop */}
      <div className="hidden sm:grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 w-full gap-2">
        {ads.map((ad) => (
          <div key={ad._id} className="overflow-hidden sm:py-0">
            {ad.image ? (
              <Image
                src={ad.image}
                alt={`Publicité ${ad.position || 'sans titre'}`}
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
        ))}
      </div>
    </Container>
  );
};

export default TroisPub;