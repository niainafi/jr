import React from 'react'
import Container from './container'
import JustRentSwipperSlide from './just-rent-swipper'
import { data } from './carousel-moto/carousel-data'
export default function JustRent() {
  return (
    <section className='py-10 lg:pt-20 pb-32'>
        <h2 className='text-3xl md:text-4xl text-center font-bold'>{'JUST RENT'}</h2>
        <JustRentSwipperSlide images={data.map((item) => ({ src: item.img }))} />
    </section>
  )
}
