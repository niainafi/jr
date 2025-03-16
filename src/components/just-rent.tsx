import React from 'react'
import Container from './container'
import JustRentSwipperSlide from './just-rent-swipper'
import { data } from './carousel-moto/carousel-data'
export default function JustRent() {
  return (
    <Container>
        <h2>{'JUST RENT'}</h2>
        <JustRentSwipperSlide images={data.map((item) => ({ src: item.img }))} />
    </Container>
  )
}
