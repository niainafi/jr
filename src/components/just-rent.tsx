{/*import React from 'react'
import Container from './container'
import JustRentSwipperSlide from './just-rent-swipper'
import { data } from './carousel-moto/carousel-data'
export default function JustRent() {
  return (
    <section className='py-10 lg:pt-20 pb-32'>
           <img 
            src="/images/logo/logo-just-ride-academy.png" 
            alt="Just Ride Academy Logo" 
            style={{ width: '', height: 'auto', marginRight: '10px' }} // Redimensionner l'image et espacement
          />
        <h2 className='text-3xl md:text-4xl text-center font-bold'>{'JUST RENT'}</h2>
        <JustRentSwipperSlide images={data.map((item) => ({ src: item.img }))} />
    </section>
  )
}
*/}
import React from 'react'
import Container from './container'
import JustRentSwipperSlide from './just-rent-swipper'
import { data } from './carousel-moto/carousel-data'

export default function JustRent() {
  return (
    <section className='py-10 lg:pt-20 pb-32'>
      <div className="flex items-center justify-center mb-4"> {/* Conteneur pour l'image et le titre */}
        <img 
          src="/images/logo/logo-just-rent.png" 
          alt="Just Ride Academy Logo" 
          
          style={{ 
            width: '96px',        // 2.5cm ≈ 96px (1cm = 37.8px)
            height: '96px',       // Remplacer "auto" par valeur fixe
            marginRight: '10px',
            aspectRatio: '1',     // Garde les proportions (optionnel)
            objectFit: 'cover'    // Pour les images (si nécessaire)
          }}
        />
        <h2 className='text-3xl md:text-4xl font-bold'>{'JUST RENT'}</h2>
      </div>
      <JustRentSwipperSlide images={data.map((item) => ({ src: item.img }))} />
    </section>
  )
}
