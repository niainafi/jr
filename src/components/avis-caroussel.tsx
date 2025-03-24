import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import Container from "./container";
import Image from "next/image";

const reviews = [
  {
    name: "Jean Yves",
    text: " Je roule avec la Himalayan 450 depuis quelques mois sur les routes de Madagascar, et c'est un vrai bijou ! Que ce soit sur les pavés de Tana, les pistes en latérite des Hautes Terres ou les routes côtières sableuses, elle ne m’a jamais déçu. Sa suspension…  !...",
    rating: 5,
  },
  {
    name: "Bertrand Desaintes ",
    text: "Enfin une moto adaptée à Madagascar ! Je fais souvent la route Tana-Majunga, et la Himalayan 450 est parfaite pour ça. Elle est confortable même après plusieurs heures de route, et le moteur ne chauffe pas trop malgré les grosses…  ...",
    rating: 5,
  },
  {
    name: "Marie Annie",
    text: "J’ai testé pas mal de motos sur les pistes du Sud, et la Himalayan 450 est la meilleure pour ce type de terrain. Elle passe partout : sable, pierres, boue… et sans jamais caler ! Le garde au sol est idéal pour éviter les obstacles, et la hauteur de selle me permet d’avoir une… ...",
    rating: 5,
  },
  {
    name: "Rakotomalala",
    text: "J’ai testé pas mal de motos sur les pistes du Sud, et la Himalayan 450 est la meilleure pour ce type de terrain. Elle passe partout : sable, pierres, boue… et sans jamais caler ! Le garde au sol est idéal pour éviter les obstacles, et la hauteur de selle me permet d’avoir une… ...",
    rating: 5,
  },
];
export default function AvisConditions() {

  return (
    <section>
      <Container>
        <Avis />
        <Conditions />
      </Container>
    
    </section>
  );
}

export function Avis() {
  return (
    <section className="mt-6" aria-label="Avis">
      <h2 className="text-2xl font-bold mb-4">AVIS</h2>
      <div className="mx-auto lg:mx-0 max-w-[250px] sm:max-w-[600px] md:max-w-[650px] lg:max-w-full lg:w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 w-[80%] lg:basis-1/3 flex flex-col rounded-lg gap-4 h-full text-sm">
              
                <div className="w-16 h-16 overflow-hidden rounded-full">
                  <Image
                    src="/images/photos/focus1.jpg"
                    alt="img-focus"
                    className="w-full h-full object-cover"
                    width={64}
                    height={64}
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
        <CarouselPrevious
            className="w-12 h-12 bg-accent clip-path-triangle-left"
        />
        <CarouselNext
            className="w-12 h-12 bg-accent clip-path-triangle-right"
        />
      </Carousel>
      </div>
    </section>
  )
}


function Conditions(){
  return(
    <section className="mt-6" aria-label="Conditions">
        <h2 className="text-2xl font-bold mb-4">CONDITIONS</h2>
        <p className="text-gray-700 mb-4">
          {`Le locataire doit être âgé d'au moins 21 ans et détenir un permis de conduire valide depuis au moins 2 ans.
          Une pièce d'identité en cours de validité doit être présentée lors de la signature du contrat.
          Une caution devra être déposée avant la remise des clés (montant variable selon le modèle de la moto louée).
          La location est accordée pour une durée déterminée. Tout dépassement entraînera des frais supplémentaires.`}
        </p>
        <h3 className="text-lg font-semibold mt-4">Utilisation de la Moto</h3>
        <p className="text-gray-700 mb-4">
          {`Le locataire s'engage à utiliser la moto dans le respect du Code de la route et des réglementations locales.
          L'utilisation du véhicule est strictement personnelle et ne peut être sous-louée ou prêtée à un tiers.
          La moto ne doit pas être utilisée pour des compétitions, du transport de marchandises ou toute autre activité illégale.`}
        </p>
        <h3 className="text-lg font-semibold mt-4">Assurance et Responsabilités</h3>
        <p className="text-gray-700">
          {`Le loueur fournit une assurance couvrant la responsabilité civile. Toutefois, les dégâts matériels, le vol et les frais médicaux ne sont pas inclus sauf si une assurance supplémentaire est souscrite.
          En cas d'accident ou de vol, le locataire doit immédiatement informer le loueur et fournir un constat d'accident ou une déclaration de vol.
  T       oute dégradation causée par une mauvaise utilisation de la moto sera à la charge du locataire.`}
        </p>
      </section>
  )
}