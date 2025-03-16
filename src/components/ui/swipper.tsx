"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import '@/styles/swipper.css';
// import "swiper/css/navigation";



type ImageType = {
  src: string;
  alt?: string;
};
type SwipperSlideProps = {
    images : ImageType[];
};
export default function SwipperSlide({images}: SwipperSlideProps) {
  return (
    <div className="w-full max-w-4xl mx-auto h-[320px] xl:h-[340px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="rounded-sm shadow-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[320px] xl:h-[340px]">
              <Image
                src={img.src}
                alt={ img?.alt ?? `Slide ${index + 1}`}
                objectFit="cover"
                width={400}
                height={500}
                priority={index === 0}
                className="object-cover w-full h-full"
                />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
