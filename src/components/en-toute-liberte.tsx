import React from 'react'
import Image from 'next/image'
export default function EnTouteLiberte() {
  return (
    <section className='flex justify-center items-center h-[300px] my-10 w-full '>
      <div className='w-[70%] flex items-center justify-center'>
        <Image 
          width={440}
          height={100}
          alt='just ride en toute liberte' 
          src={'/images/just-rent/mercii.png'}
          className='h-full object-cover w-[70%]'
          objectFit='cover'
          />
      </div>
    </section>
  )
}
