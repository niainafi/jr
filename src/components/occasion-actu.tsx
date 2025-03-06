import Image from 'next/image';

const articles = [
  { src: '/images/photos/moto.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/ride.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/ride1.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/img-gopro.png', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/img-gant.png', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/img-casque-1.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/moto7.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/moto8.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/moto9.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
];

export default function MotocrossNews() {
  return (
    <section className="p-6 md:p-10">
      {/* Navigation */}
      <div className="text-center mb-6">
        <span className="text-gray-500">Actualités Internationales | </span>
        <span className="text-yellow-500 font-bold">Actualités Locale</span>
      </div>

      {/* Grille d'articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {articles.map((article, index) => (
          <div key={index} className="relative group overflow-hidden shadow-lg rounded-lg">
            <Image
              src={article.src}
              alt={article.title}
              width={400}
              height={300}
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 bg-yellow-500 text-white p-3 text-center w-full font-bold">
              {article.title}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2 text-yellow-500 font-bold">
        <span className="cursor-pointer">1</span>
        <span className="cursor-pointer">2</span>
        <span className="cursor-pointer">3</span>
        <span>...</span>
        <span className="cursor-pointer">10</span>
      </div>
    </section>
  );
}
