import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";

const reviews = [
  {
    name: "RAKOTO",
    text: "Je roule avec la Himalayan 450 depuis quelques mois sur les routes de Madagascar, et c'est un vrai bijou !...",
    rating: 5,
  },
  {
    name: "JEAN H",
    text: "Enfin une moto adaptée à Madagascar ! Je fais souvent la route Tana-Majunga, et la Himalayan 450 est parfaite pour ça...",
    rating: 5,
  },
  {
    name: "SOLO",
    text: "J’ai testé pas mal de motos sur les pistes du Sud, et la Himalayan 450 est la meilleure option que j’ai trouvée...",
    rating: 5,
  },
  {
    name: "MARC",
    text: "Une moto idéale pour les longs trajets, solide et fiable...",
    rating: 5,
  },
  {
    name: "LUC",
    text: "Très satisfait de cette moto, elle passe partout !...",
    rating: 5,
  },
  {
    name: "PAUL",
    text: "Le confort de conduite est exceptionnel...",
    rating: 5,
  },
];
export default function AvisConditions() {

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Avis />
      <Conditions />
      <p className="text-sm text-gray-600 mt-6 text-right">Télécharger en PDF | Voir la suite ▶</p>
    </div>
  );
}

export function Avis() {
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold mb-4">AVIS</h2>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-5 flex flex-col rounded-lg gap-4 h-full text-sm">
            
              <div className="w-16 h-16 overflow-hidden rounded-full">
                <img
                  src="/images/photos/focus1.jpg"
                  alt="img-focus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-9 mt-4">
              <h3 className="text-md font-semibold  inline-block mb-2">{review.name}</h3>
              <span className="border-b-2 border-accent h-1 w-10 block" />
              </div>
              <div className="text-gray-700 mb-2  leading-relaxed">
                <p className="text-sm">{review.text}</p>
                <Link className="mt-2 text-xs flex items-center gap-2" href={'#'}><span>Voir plus</span> <span>{'>>>>'}</span></Link>
              </div>
              <div className="flex space-x-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-accent text-sm">★</span>
                ))}
              </div>
            
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  )
}


function Conditions(){
  return(
    <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4">CONDITIONS</h2>
        <p className="text-gray-700 mb-4">
          Le locataire doit être âgé d’au moins 21 ans et détenir un permis de conduire valide depuis au moins 2 ans. Une pièce
          d’identité en cours de validité doit être présentée lors de la signature du contrat.
        </p>
        <h3 className="text-lg font-semibold mt-4">Utilisation de la Moto</h3>
        <p className="text-gray-700 mb-4">
          La moto doit être utilisée conformément aux règles du Code de la route et des règlements de location.
        </p>
        <h3 className="text-lg font-semibold mt-4">Assurance et Responsabilités</h3>
        <p className="text-gray-700">
          L’assurance couvre uniquement la responsabilité civile. Tout dommage causé par une mauvaise utilisation sera à la charge
          du locataire.
        </p>
      </section>
  )
}