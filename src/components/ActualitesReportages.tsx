import Container from "./container";
import Image from "next/image";

const articles = [
  {
    title: 'A LA UNE',
    image: "/images/photos/actu.jpg", 
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    title: "ACTU LOCALE",
    image: "/images/photos/chutes-de-la-lily-ampefy-madagas.jpg", 
    content:
      "Lorem ipsum d dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    title: "ACTU INTERNATIONALE",
    image: "/images/photos/ride.jpg", 
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  
];

export default function ActualitesReportages() {
  return (
    <section className="pb-12 bg-white text-gray-800">
      <Container className="lg:-mt-24">
      {/* Titre */}
      <h2 className="relative  text-2xl md:text-3xl font-bold text-center uppercase mb-12 flex flex-row w-full justify-center gap-1">
        <span>Actualités</span>
        <span className="text-accent absolute">
          <Image 
            src='/images/actualite/and.webp' 
            className="" 
            alt='actualtite &' 
            width={40}
            height={40}
            />
        </span>
        <span>Reportages</span>
      </h2>

      {/* Grid des articles */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {articles.map((article, index) => (
          <div key={index} className="p-1"> {/* Suppression des ombres et bordures */}
            {/* Image sans bordure ni arrondi */}
            <div className="relative w-full h-64">
              <Image
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-full"
                fill
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 font-bold text-lg uppercase">{article.title}</h3>
            <div className="w-16 h-1 bg-accent my-2"></div>
            <p className="text-sm text-gray-600 text-justify text-ellipsis line-clamp-3">{article.content}</p>
            <a href="#" className="mt-4 text-sm font-semibold text-gray-700 hover:text-accent flex justify-end">
              Voir la suite »»»
            </a>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
}
