import React from 'react'
import Container from './container'
import Image from 'next/image'
import Boutiques from './boutiques'
import Logos from './logos-partner'
import OccasionAccueilCarousel from './occasionaccueilcarousel'
import Link from 'next/link'

const dataPub = [
    {
        src: '/images/pub/faux-pub-1.webp',
        alt: 'publicité pour le casque',
    },
    {
        src: '/images/pub/faux-pub-3.webp',
        alt: 'publicité pour le casque',
    }
] as const

export default function BoutiqueContainer() {
  return (
    <Container>
        <h2 className='uppercase  text-center text-3xl md:text-4xl font-bold mb-16'>
            Boutiques
        </h2>
        {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 lg:gap-x-5 2xl:gap-x-20'> */}
        <div>
            {/* <div className='flex flex-col sm:flex-row lg:flex-col gap-5 col-span-1 sm:col-span-2 lg:col-span-1'>
                {dataPub.map((data, index) => (
                    <CardPub key={index} data={data} />
                ))}
            </div> */}
            <div className='col-span-3 flex flex-col gap-1'>
                <div className='flex flex-col gap-2'>
                <Boutiques />
                {/* <Link href={'/boutique'} className="bg-accent ml-auto text-black font-bold rounded-r-full pl-2 h-5 flex items-center space-x-2 w-auto">
                    <span className='text-nowrap'>Voir plus</span>
                    <span className="text-xl">&raquo;&raquo;&raquo;</span>
                </Link> */}
                </div>
                {/* <Logos /> */}
                <div className='flex flex-col gap-2'>
                <OccasionAccueilCarousel />
                <Link href={'/occasions'} className="bg-accent ml-auto text-black font-bold rounded-r-full pl-2 h-5 flex items-center space-x-2">
                    <span className='text-nowrap'>Voir plus</span>
                    <span className="text-xl">&raquo;&raquo;&raquo;</span>
                </Link>
                </div>
            </div>
        </div>
    </Container>
  )
}


function CardPub({data}: {data: typeof dataPub[number]}) {
  return (
        <div className='w-full h-[340px] lg:h-[250px] xl:h-[340px] overflow-hidden'>
            <Image
                src={'/images/pub/faux-pub-3.webp'}
                alt={data.alt}
                width={400}
                height={600}
                className='object-cover h-full w-full'
                objectFit='cover'
                loading='lazy'
            />
        </div>
  )
}

// import React from 'react'
// import Container from './container'
// import Image from 'next/image'
// import Boutiques from './boutiques'
// import Logos from './logos-partner'
// import Occasion from './occasion'
// import Link from 'next/link'

// const dataPub = [
//     {
//         src: '/images/pub/faux-pub-1.webp',
//         alt: 'publicité pour le casque',
//     },
//     {
//         src: '/images/pub/faux-pub-3.webp',
//         alt: 'publicité pour le casque',
//     }
// ] as const

// export default function BoutiqueContainer() {
//   return (
//     <Container>
//         <h2 className='uppercase  text-center text-3xl md:text-4xl font-bold mb-16'>
//             Boutiques
//         </h2>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 lg:gap-x-5 2xl:gap-x-20'>
//             <div className='flex flex-col sm:flex-row lg:flex-col gap-5 col-span-1 sm:col-span-2 lg:col-span-1'>
//                 {dataPub.map((data, index) => (
//                     <CardPub key={index} data={data} />
//                 ))}
//             </div>
//             <div className='col-span-3 flex flex-col gap-1'>
//                 <div className='flex flex-col gap-2'>
//                 <Boutiques />
//                 <Link href={'/boutique'} className="bg-accent ml-auto text-black font-bold rounded-r-full pl-2 h-5 flex items-center space-x-2 w-auto">
//                     <span className='text-nowrap'>Voir plus</span>
//                     <span className="text-xl">&raquo;&raquo;&raquo;</span>
//                 </Link>
//                 </div>
//                 {/* <Logos /> */}
//                 <div className='flex flex-col gap-2'>
//                 <Occasion />
//                 <Link href={'/occasions'} className="bg-accent ml-auto text-black font-bold rounded-r-full pl-2 h-5 flex items-center space-x-2">
//                     <span className='text-nowrap'>Voir plus</span>
//                     <span className="text-xl">&raquo;&raquo;&raquo;</span>
//                 </Link>
//                 </div>
//             </div>
//         </div>
//     </Container>
//   )
// }


// function CardPub({data}: {data: typeof dataPub[number]}) {
//   return (
//         <div className='w-full h-[340px] lg:h-[250px] xl:h-[340px] overflow-hidden'>
//             <Image
//                 src={'/images/pub/faux-pub-3.webp'}
//                 alt={data.alt}
//                 width={400}
//                 height={600}
//                 className='object-cover h-full w-full'
//                 objectFit='cover'
//                 loading='lazy'
//             />
//         </div>
//   )
// }