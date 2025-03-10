import Image from "next/image";

export default function PubActu() {
  return (
    <div className="relative w-full max-w-[1400px] mx-auto mb-0">
      <Image
        src="/images/actualite/fau-pub.jpg"
        alt="Publicité Actualité"
        width={1400} // Augmente la largeur
        height={500} // Ajuste la hauteur
        className="w-full h-auto object-cover shadow-lg"
      />
    </div>
  );
}
