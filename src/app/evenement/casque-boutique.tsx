import Image from "next/image";

const helmets = [
  { id: 1, src: "/images/boutique/casque11.png" },
  { id: 2, src: "/images/boutique/casque12.png" },
  { id: 3, src: "/images/boutique/casque13.png" },
  { id: 4, src: "/images/boutique/casque14.png" },
  { id: 5, src: "/images/boutique/casque15.png" },
  { id: 6, src: "/images/boutique/casque16.png" },
  { id: 7, src: "/images/boutique/casque17.png" },
  { id: 8, src: "/images/boutique/casque18.png" },
  { id: 9, src: "/images/boutique/casque19.png" },
];

const HelmetGrid = () => {
  return (
    <div className="flex justify-center items-start min-h-screen mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12 w-full max-w-screen-xl">
        {helmets.map((helmet) => (
          <div key={helmet.id} className="flex flex-col items-start">
            {/* Conteneur de l'image pour bien positionner le texte */}
            <div className="relative w-[300px]">
              <Image
                src={helmet.src}
                alt={`Casque ${helmet.id}`}
                width={300}
                height={300}
                className="w-auto h-auto"
                priority
              />
              {/* Tiret jaune légèrement décalé vers la droite */}
              <div className="w-12 h-1 mt-4 bg-accent ml-20"></div>
            </div>

            {/* Texte légèrement décalé vers la droite */}
            <h2 className="text-lg font-bold pl-20 mt-3">Formula xxxxx</h2>
            <p className="text-gray-600 pl-20 mt-1">00 000 000 Ar</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelmetGrid;
