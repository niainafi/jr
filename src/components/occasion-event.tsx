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
    <section className="p-6 md:p-10">
      {/* Navigation */}
      <div className="text-center mb-6">
        <span className="text-gray-500">Ride | </span>
        <span className="text-accent font-bold"> Événement </span>
        <span className="text-gray-500">| Autre</span>
      </div>

      {/* Grille d'articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {articles.map((article, index) => (
          <div key={index} className="relative group overflow-hidden shadow-lg rounded-lg">
            {/* Image avec effet de zoom */}
            <Image
              src={article.src}
              alt={article.title}
              width={400}
              height={300}
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Superposition jaune au hover */}
            <div className="absolute inset-0 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
            {/* Texte blanc qui apparaît sur hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white font-bold text-lg text-center">
                {article.title}
              </p>
            </div>
            {/* Texte en bas qui reste toujours visible avec le même fond jaune transparent */}
            <div className="absolute bottom-0 w-full bg-accent bg-opacity-80 text-white p-3 text-center font-bold">
              {article.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
