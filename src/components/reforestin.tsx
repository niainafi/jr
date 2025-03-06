import Image from "next/image";

export default function ReforestinEvent() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 md:p-10 max-w-5xl mx-auto">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2">
        <div className="absolute -left-4 -top-4 bg-yellow-700 w-full h-full z-0"></div>
        <Image
          src="/images/evenement/reforestin.jpg"
          alt="Reforest'in Ankadindriana"
          width={500}
          height={500}
          className="relative z-10 w-full h-auto"
        />
      </div>
      
      {/* Text Section */}
      <div className="bg-yellow-700 text-white p-6 md:p-10 w-full md:w-1/2 flex flex-col justify-center">
        <p className="text-sm uppercase">08-09 Mars 2025</p>
        <h2 className="text-lg font-bold mt-2">REFOREST’IN ANKADINANDRIANA</h2>
        <p className="text-base font-bold mt-4">Être motard et Eco responsable c'est possible !</p>
        <p className="text-sm mt-2">
          Fantaro fa isaky ny kilometatra diavinao dia misy fiantraikany amin’ny tontolo iainana.
          Izao anefa <span className="font-bold">✊</span> manana fahefana isika
        </p>
        <p className="text-4xl font-bold mt-6">08.03.25</p>
        
      
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
