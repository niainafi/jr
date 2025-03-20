
"use client";
  {/*
import { useState } from "react";

export default function Seconnecter() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-[90vh] bg-gray-100">
      <div className="bg-white py-16 px-12 shadow-2xl rounded-xl max-w-2xl w-full">
        <h2 className="text-5xl font-bold text-center mb-8">Connexion</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-6 border rounded-xl focus:ring-4 focus:ring-gray-500 focus:outline-none text-2xl"
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-6 border rounded-xl focus:ring-4 focus:ring-gray-500 focus:outline-none text-2xl"
          />
          
          <button 
            type="submit" 
            className="w-full p-6 bg-accent text-white rounded-xl hover:bg-opacity-80 transition text-2xl font-bold"
          >
            SE CONNECTER
          </button>
        </form>

        <div className="text-center mt-6">
          <a href="#" className="text-lg text-gray-600 hover:underline">Mot de passe oublié ?</a>
        </div>
      </div>
    </div>
  );
}
*/}


import { useState } from "react";
import Image from "next/image";

export default function Seconnecter() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "DÉCOUVREZ LA CASHBACK BY JUST RIDE",
      content: (
        <>
          <p className="mt-6 text-base md:text-lg leading-relaxed">
            Tu n’as pas encore ta carte de fidélité Cashback Just Ride ? C’est le moment de la récupérer ! Lors de ton prochain achat à la boutique Just Ride*, ta carte Cashback te sera remise et tu pourras commencer à accumuler des remises directement sur ton compte.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            Déjà membre ? Connecte-toi avec ton login et ton mot de passe pour voir la somme que tu as déjà accumulée. Et ce n’est pas tout ! En tant que membre, tu bénéficies aussi d’avantages exclusifs : avant-premières, remises spéciales avec nos partenaires, promotions prolongées et accès VIP à nos événements !
          </p>
        </>
      ),
    },
    {
      id: 1,
      title: "CONDITIONS GÉNÉRALES DE LA CARTE DE FIDÉLITÉ \"CASHBACK BY JUST RIDE\"",
      content: (
        <>
          <p className="mt-6 text-base md:text-lg leading-relaxed">
            La carte Cashback by Just Ride vous permet de bénéficier de remises exclusives et d’avantages réservés à nos clients fidèles. En adhérant, vous acceptez les conditions suivantes :
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            1. Obtention et Validité de la Carte
            La carte est disponible en trois niveaux de remise : 5%, 7% et 10%...
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-10 my-16 bg-white text-black items-center justify-center px-4 md:px-0">
      <div className="lg:w-1/2 w-full h-auto lg:h-[67vh] flex flex-col justify-between text-left max-w-xl">
        <div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          {slides[activeSlide].title}
        </h1>
          {slides[activeSlide].content}
        </div>
        <div className="flex items-center gap-4 mt-6 ml-auto">
          <button onClick={() => setActiveSlide(activeSlide === 0 ? 1 : 0)} className="bg-accent text-white px-2  rounded-xl font-bold">
            {activeSlide === 0 ? "CONDITIONS GÉNÉRALES" : "RETOUR"}
          </button>
          <div className="flex space-x-2">
            {slides.map((_,index) => (
              <div
                key={index}
                className={`w-5 h-5 rounded-full ${activeSlide === index ? "bg-accent" : "bg-accent1"}`}
                onClick={() => setActiveSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Login Form  */}
      <div className="lg:w-[35%] w-full relative flex p-6 md:p-8 overflow-hidden rounded-[30px] h-[65vh] max-w-xl lg:h-[67vh] bg-transparent">
        <Image 
          src="/images/cash back/back cashback.png" 
          alt="Cashback" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 w-full h-full opacity-90 rounded-[30px] z-0"
        />
        <div className="relative w-full z-10 mt-1 sm:mt-8  md:pt-10 lg:pt-16">
          <h2 className="text-white text-lg md:text-xl font-bold mb-4 text-left">LOGIN</h2>
          <form action="" className="mt-8">
            <div className="flex flex-col w-full gap-4">
              <input 
                type="text" 
                placeholder="" 
                className="w-full p-4 rounded bg-white text-black border border-gray-300 mx-auto block"
              />
              <input 
                type="password" 
                placeholder="" 
                className="w-full p-4 mt-4 rounded bg-white text-black border border-gray-300 block"
              />
            </div>
          <button className="mt-6 w-[95%] text-white font-bold p-4 mx-auto block">
            SE CONNECTER
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}

