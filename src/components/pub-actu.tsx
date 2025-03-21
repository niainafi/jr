import Image from "next/image";
import Container from "./container";

export default function PubActu() {
  return (
    <Container className="mt-0">
    <div className="relative w-full mb-0">
      <Image
        src="/images/actualite/fau-pub.jpg"
        alt="Faux Publicité"
        width={1400} // Augmente la largeur
        height={500} // Ajuste la hauteur
        className="w-full h-auto object-cover shadow-lg"
      />
    </div>
    </Container>
  );
}
