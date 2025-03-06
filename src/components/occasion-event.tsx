import Image from 'next/image';

const articles = [
  { src: '/images/photos/moto.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/ride.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/ride1.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/img-gopro.png', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/img-gant.png', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/img-casque-1.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/moto.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/ride.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
  { src: '/images/photos/ride1.jpg', title: 'YCF 125 MX : La Transition Idéale pour Débuter en Motocross' },
];

export default function OccasionEvent() {
  return (
    <section className="mx-auto max-w-5xl mb-5">
      {/* Navigation */}
      <div className="text-center mb-6">
        <span className="text-gray-500">Ride | </span>
        <span className="text-accent font-bold"> Événement </span>
        <span className="text-gray-500">| Autre</span>
      </div>

      {/* Grille d'articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 my-16">
      {articles.map((article, index) => (
        <div
          key={index}
          className="relative aspect-auto group overflow-hidden shadow-sm rounded-sm  transition-transform duration-200 "
        >
          {/* Image avec effet de zoom */}
          <Image
            src={article.src}
            alt={article.title}
            width={400}
            height={300}
            className="w-full h-full sm:h-64 object-cover"
          />

          {/* Effet de fond qui monte */}
          <div className="absolute inset-0 bg-accent opacity-80 transition-transform duration-300 ease-out translate-y-[70%] group-hover:translate-y-0" />

          {/* Texte en bas au début qui monte au centre */}
          <div className="absolute bottom-0 w-full text-center text-white p-3 font-bold text-lg transition-all duration-300 ease-out  group-hover:bottom-1/2 group-hover:translate-y-1/2">
            {article.title}
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}
