"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination, } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '@/styles/just-rent-swipper.css';
import Container from "./container";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

type ImageType = {
    src: string;
    alt?: string;
  };
type SwipperSlideProps = {
    images : ImageType[];
};
export default function JustRentSwipperSlide({images}: SwipperSlideProps) {
  return (
    <Container className="lg:max-w-[120rem]">
    <div className="w-full h-[320px] xl:h-[340px]">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          enabled: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container_jr"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] xl:h-[400px]">
              <Image
                src={img.src}
                alt={ img?.alt ?? `Slide ${index + 1}`}
                objectFit="contain"
                width={400}
                height={500}
                priority={index === 0}
                className="object-contain w-full h-full"
                />
            </div>
          </SwiperSlide>
        ))}
         <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
            <FaRegArrowAltCircleLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
            <FaRegArrowAltCircleRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    </Container>
  );
}