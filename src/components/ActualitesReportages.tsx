
const articles = [
  {
    title: "ACTU INTERNATIONALE",
    image: "/images/photos/actu.jpg", 
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    title: "RANOMAFANA",
    image: "/images/photos/ride.jpg", 
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    title: "AMPEFY",
    image: "/images/photos/chutes-de-la-lily-ampefy-madagas.jpg", 
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
];

export default function ActualitesReportages() {
  return (
    <section className="pt-28 pb-12 px-6 md:px-12 lg:px-24 bg-white text-gray-800">
      {/* Titre */}
      <h2 className="text-2xl md:text-3xl font-bold text-center uppercase mb-12">
        Actualités<span className="text-accent">&</span>Reportages
      </h2>

      {/* Grid des articles */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="p-4"> {/* Suppression des ombres et bordures */}
            {/* Image sans bordure ni arrondi */}
            <div className="relative w-full h-64">
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="mt-4 font-bold text-lg uppercase">{article.title}</h3>
            <div className="w-16 h-1 bg-accent my-2"></div>
            <p className="text-sm text-gray-600 text-justify">{article.content}</p>
            <a href="#" className="mt-4 text-sm font-semibold text-gray-700 hover:text-accent flex justify-end">
              Voir la suite »»»
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
