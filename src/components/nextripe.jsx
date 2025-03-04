import Image from "next/image";

export default function Nextripe() {
  return (
    <div className="relative h-screen w-full">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/images/photos/next2.png" 
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Contenu */}
      <div className="relative flex flex-col justify-center items-start h-full px-10 text-white">
        {/* Image du texte NEXT TRIPE */}
        <div className="mb-6">
          <Image 
            src="/images/photos/next.png"
            alt="Next Trip Text"
            width={400} 
            height={200} 
          />
        </div>

        {/* Détails du voyage */}
        <h2 className="text-4xl font-bold">
          <span className="text-white">15.05.25</span> <span className="text-gray-300">AMPEFY</span>
        </h2>

        <p className="text-gray-300 mt-4 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse 
          ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>

        {/* Boutons */}
        <div className="mt-6 flex space-x-4">
          <button className="bg-yellow-500 text-black font-bold px-6 py-2 rounded shadow-lg">
            INSCRIVEZ-VOUS
          </button>
          <button className="bg-yellow-500 text-black font-bold px-6 py-2 rounded shadow-lg">
            LOUEZ VOTRE <span className="font-extrabold">ROYAL ENFIELD</span>
          </button>
        </div>
      </div>
    </div>
  );
}

