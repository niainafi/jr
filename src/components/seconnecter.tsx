
"use client";
 
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Image from "next/image";
import axios, { AxiosError } from "axios";
import { useUserStore } from "@/store/user";
// import { redirect } from "next/navigation";

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

const schema = z.object({
  email: z.string().min(1, "Le nom d'utilisateur est requis"),
  password: z.string().min(6, "Le mot de passe doit avoir au moins 6 caractères"),
});

type FormData = z.infer<typeof schema>;


export default function Seconnecter() {
  const [activeSlide, setActiveSlide] = useState(0);
  // const {setUser} = useUserStore();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting,},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      
     const res  = await axios.post('https://justride.up.railway.app/api/auth/login',data) 
     if(res.status === 200){
      // setUser(res.data.user)
      if(typeof window !== 'undefined') {
        localStorage.setItem('token', JSON.stringify(res.data.token));
        window.location.href = '/profile'
      }
     }
    } catch (error) {
      console.log('error',error)
      if((error as AxiosError).response?.status === 400){
        setError('root', { message: 'Identifiants invalides' });
       }
       if((error as AxiosError).response?.status === 500){
        setError('root', { message: 'Une erreur est survenue' });
       }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 my-16 bg-white text-black items-center justify-center px-4 md:px-0">
      <div className="lg:w-1/2 w-full h-auto md:h-[30rem] lg:h-[32rem] 2xl:h-[45rem] flex flex-col justify-between text-left max-w-xl">
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
      <div className="lg:w-[35%] w-full relative flex p-6 md:p-8 overflow-hidden rounded-[30px] h-[30rem]  max-w-xl md:h-[30rem] lg:h-[32rem] 2xl:h-[45rem] bg-transparent">
        <Image 
          src="/images/cash back/back cashback.png" 
          alt="Cashback" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 w-full h-full opacity-90 rounded-[30px] z-0"
        />
        <div className="relative w-full z-10 mt-1 sm:mt-8  md:pt-5 lg:pt-1 2xl:pt-16">
          <h2 className="text-white text-lg md:text-xl font-bold mb-4 text-left">LOGIN</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
            <div className="text-center w-full my-3">
              {errors.root && <ErrorMessage message={errors.root.message} />}
            </div>
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col w-full">
                <input 
                  type="email" 
                  placeholder="" 
                  className="w-full p-4 rounded bg-white text-black border border-gray-300 mx-auto block"
                  {...register("email")}
                />
                {errors.email && <ErrorMessage message={errors.email.message} />}
              </div>
              <div className="flex flex-col w-full">
                <input 
                  type="password" 
                  placeholder="" 
                  className="w-full p-4 mt-4 rounded bg-white text-black border border-gray-300 block"
                  {...register("password")}
                />
                {errors.password && <ErrorMessage message={errors.password.message} />}
              </div>
            </div>
          <button type="submit" className="mt-6 w-[95%] text-white font-bold p-4 mx-auto block">
            {isSubmitting? "CONNEXION ..." : "SE CONNECTER"}
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage({message}:{message?:string}){
  return <span className="text-xs text-red-600">{message ? message : null}</span>
}