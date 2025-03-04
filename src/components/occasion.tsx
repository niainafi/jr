import Image from 'next/image';

const motos = [
  { src: '/images/photos/moto.jpg', alt: 'Moto 1', title: 'ROYAL ENFIELD - CLASSIC 500', description: '20 000 KM\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: '10 000 000 AR' },
  { src: '/images/photos/ride.jpg', alt: 'Moto 2', title: 'HARLEY DAVIDSON', description: '15 000 KM\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', price: '12 500 000 AR' },
  { src: '/images/photos/ride1.jpg', alt: 'Moto 3', title: 'BMW R NINET', description: '10 000 KM\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.', price: '9 800 000 AR' },
  { src: '/images/photos/img-gopro.png', alt: 'Moto 4', title: 'DUCATI SCRAMBLER', description: '5 000 KM\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.', price: '11 000 000 AR' },
  { src: '/images/photos/img-gant.png', alt: 'Moto 5', title: 'TRIUMPH BONNEVILLE', description: '8 000 KM\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.', price: '10 500 000 AR' },
  { src: '/images/photos/img-casque-1.jpg', alt: 'Moto 6', title: 'KAWASAKI Z900', description: '3 000 KM\nQuis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.', price: '13 000 000 AR' },
];

export default function Occasion() {
  return (
    <section className="p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
        NOS OCCASIONS <span className="text-yellow-500">100% VALIDÉES</span> PAR JUST RIDE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
        {motos.map((moto, index) => (
          <div key={index} className="relative group overflow-hidden shadow-lg rounded-lg">
            <Image
              src={moto.src}
              alt={moto.alt}
              width={400}
              height={300}
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-yellow-500 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white text-center">
              <h3 className="text-lg font-bold">{moto.title}</h3>
              <p className="text-sm mt-2">{moto.description}</p>
              <p className="text-lg font-bold mt-4">{moto.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center md:justify-end">
        <a href="#" className="bg-yellow-700 text-black font-bold rounded-full px-6 py-2 flex items-center space-x-2">
          Voir plus »»»
        </a>
      </div>
    </section>
  );
}
