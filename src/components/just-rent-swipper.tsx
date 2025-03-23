"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination, } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import '@/styles/just-rent-swipper.css';
import Container from "./container";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { FaRegArrowAltCircleLeft } from "react-icons/fa";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";

type ImageType = {
    src: string;
    alt?: string;
  };
type SwipperSlideProps = {
    images : ImageType[];
};
export default function JustRentSwipperSlide({images}: SwipperSlideProps) {
  const [activeIndex,setActiveIndex] = useState(1);
  const router = useRouter();
  // const [enableLoop, setEnableLoop] = useState(false);

  function handleLouerClick() {
    router.push('/just-rent');
  }
  return (
    <Container className="lg:max-w-full px-0 mt-5 2xl:max-w-full pb:10 lg:pb-28">
    <div className="w-full h-[350px] xl:h-[300px] 2xl:h-[350px]">
      <Swiper
        initialSlide={1}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={280}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 200,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        // loop={enableLoop}
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
        modules={[
          EffectCoverflow, 
          Pagination, 
          
        ]}
        className="swiper_container_jr"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        // onSwiper={(swiper) => {
        //   setActiveIndex(swiper.realIndex); 
        // }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full flex flex-col justify-center items-center h-[320px] xl:h-[500px] 2xl:h-[540px] lg:w-[500px] xl:w-[570px] ">
              <Image
                src={img.src}
                alt={ img?.alt ?? `Slide ${index + 1}`}
                objectFit="contain"
                width={400}
                height={500}
                priority={index === 0}
                className="object-contain w-full h-full"
                
                />
              {index === activeIndex ?
                <button 
                  type="button"
                  className="text-white bg-accent mx-auto px-4 rounded-md uppercase text-xs lg:text-sm font-bold"
                  onClick={handleLouerClick}
                >
                  {'Louez-moi'}
                </button> : null
              }
            </div>
          </SwiperSlide>
        ))}
         <div className="slider-controler">
          {/* <div className="swiper-button-prev slider-arrow">
            <FaRegArrowAltCircleLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FaRegArrowAltCircleRight />
          </div> */}
          <div className="swiper-pagination lg:hidden"></div>
        </div>
      </Swiper>
    </div>
    </Container>
  );
}