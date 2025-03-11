import Image from "next/image";

export default function PubActuToo() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 py-6 md:pb-10">
      {[...Array(3)].map((_, index) => (
        <div 
          key={index} 
          className="relative w-[98%] md:w-[600px] h-[300px] md:h-[420px] border-l-4 border-red-500 mx-auto md:mx-0"
        >
          <Image
            src="/images/actualite/votre-pub-ici.jpg"
            alt="Votre pub ici"
            width={400}
            height={420}
            className="w-full h-full object-cover"
          />
          {/* Petits points verts en haut à droite */}
          <div className="absolute top-3 right-3 flex space-x-1">
            {[...Array(4)].map((_, dotIndex) => (
              <div key={dotIndex} className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
