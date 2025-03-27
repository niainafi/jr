"use client";
{
  /*     
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://justride.up.railway.app/api/moto-occasion"; 


export default function Occasion() {
  const [ocas, setOcas] = useState<any[]>([]); // Initialisation du state

  useEffect(() => {
    const fetchOcas = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setOcas(data);
      } catch (error) {
        console.error("❌ Erreur de chargement :", error);
      }
    };

    fetchOcas();
  }, []);

  return (
    <section className="p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
        NOS OCCASIONS <span className="text-accent">100% VALIDÉES</span> PAR JUST RIDE
      </h2>

      {/* Affichage des motos récupérées depuis l'API 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
        {ocas.length > 0 ? (
          ocas.map((moto, index) => (
            <div key={index} className="relative group overflow-hidden shadow-lg rounded-lg">
              {moto.imageUrl && (
                <Image
                  src={moto.imageUrl}
                  alt={`${moto.marque} - ${moto.modèle}`}
                  width={400}
                  height={400} // Hauteur augmentée
                  className="w-full h-96 sm:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"

                />
              )}
              <div className="absolute inset-0 bg-accent bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white text-center">
                <h3 className="text-lg font-bold">{moto.marque} {moto.modèle}ROYAL ENFIELD - CLASSIC 500</h3>
                <p className="text-sm mt-2"><strong>Année :</strong> {moto.année} 2019</p>
                <p><strong>Prix :</strong> {moto.prix}  AR</p>
                <p className="text-sm"><strong>Kilométrage :</strong> {moto.kilométrage} 20 000 KM</p>
                <p className="text-sm"><strong>Description :</strong> {moto.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="text-lg font-bold mt-4">
                 
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Aucune occasion disponible.</p>
        )}
      </div>

      {/* Bouton Voir Plus 
      {/* <div className="mt-6 flex justify-center md:justify-end">
        <a href="#" className="bg-accent text-black font-bold rounded-full px-6 py-2 flex items-center space-x-2">
          Voir plus »»»
        </a>
      </div> 
    </section>
  );
}*/
}

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ErrorMessage from "./error-message";

const API_URL = "https://justride.up.railway.app/api/moto-occasion";

const formSchema = z.object({
  from_name: z.string().min(1, "Le nom est requis."),
  from_email: z.string().email("L'email doit être valide."),
  subject: z.string().min(1, "Le sujet est requis."),
  message: z.string().min(1, "Le message est requis."),
});

export type FormData = z.infer<typeof formSchema>;

export default function Occasion() {
  const [ocas, setOcas] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMoto, setSelectedMoto] = useState<any | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const fetchOcas = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setOcas(data);
      } catch (error) {
        console.error("❌ Erreur de chargement :", error);
      }
    };

    fetchOcas();
  }, []);

  useEffect(() => {
    if(selectedMoto){

      setValue('subject',`Demande de devis - ${selectedMoto.marque} ${selectedMoto.modèle}`)
    }
  },[selectedMoto,setValue])

  const sendEmail = async (data: FormData) => {
    // e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!formRef.current) {
      console.error("❌ Le formulaire est introuvable !");
      setLoading(false);
      return;
    }

    try {
      console.log('formRef.current,', formRef.current)
      console.log("📤 Tentative d'envoi avec EmailJS...");
      const response = await emailjs.sendForm(
        "service_uynssi5", // Ton Service ID EmailJS
        "template_id2orp9", // Ton Template ID EmailJS
        formRef.current,
        "m5HSHEwIFpginPQvC" // Ta Public Key EmailJS
      );

      console.log("✅ Réponse EmailJS :", response);
      if (response.status === 200) {
        setMessage("✅ Votre message a bien été envoyé !");
        formRef.current.reset();
        reset()
        setIsModalOpen(false); // Ferme le modal après l'envoi
      } else {
        setMessage("❌ Une erreur est survenue.");
      }
    } catch (error) {
      console.error("❌ Erreur :", error);
      setMessage("❌ Erreur lors de l'envoi.");
    }

    setLoading(false);
  };

  const openModal = (moto: any) => {
    setSelectedMoto(moto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMoto(null);
  };

  return (
    <section className="p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
        NOS OCCASIONS <span className="text-accent">100% VALIDÉES</span> PAR
        JUST RIDE
      </h2>

      {/* Affichage des motos récupérées depuis l'API */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
        {ocas.length > 0 ? (
          ocas.map((moto, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shadow-lg rounded-lg"
            >
              {moto.imageUrl && (
                <Image
                  src={moto.imageUrl}
                  alt={`${moto.marque} - ${moto.modèle}`}
                  width={400}
                  height={400} // Hauteur augmentée
                  className="w-full h-96 sm:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-accent bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white text-center">
                <h3 className="text-lg font-bold">
                  {moto.marque} {moto.modele}
                </h3>
                <p className="text-sm mt-2">
                  <strong>Année :</strong> {moto.annee}
                </p>
                {/*<p><strong>Prix :</strong> {moto.prix} AR</p> */}
                <p>
                  <strong>Prix :</strong>{" "}
                  {Number(moto.prix).toLocaleString("fr-MG")} AR
                </p>

                <p className="text-sm">
  <strong>Kilométrage :</strong> {new Intl.NumberFormat('fr-FR', { useGrouping: true }).format(moto.kilometrage)} KM
</p>

                <p className="text-sm">
                  <strong>Description :</strong> {moto.description}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  <span className="text-red-500 font-bold"></span>
                  {moto.vendu ? (
                    <Image
                      src="/images/boutique/vendu.png"
                      alt="Vendu"
                      width={100} // Adjust the size as needed
                      height={100} // Adjust the size as needed
                      className="inline-block"
                    />
                  ) : (
                    <Image
                      src="/images/boutique/dispo.png"
                      alt="Disponible"
                      width={50} // Adjust the size as needed
                      height={50} // Adjust the size as needed
                      className="inline-block"
                    />
                  )}
                </p>

                <button
                  onClick={() => openModal(moto)}
                  className="mt-4 bg-white text-black py-2 px-6 rounded-lg border-2 border-accent text-accent transition-colors"
                >
                  Demander un devis
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Aucune occasion disponible.
          </p>
        )}
      </div>

      {/* Modal pour le formulaire de demande de devis */}
      {isModalOpen && selectedMoto && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4 bg-white">
              Demander un devis pour {selectedMoto.marque} {selectedMoto.modèle}
            </h3>
            <form ref={formRef} onSubmit={handleSubmit(sendEmail)} noValidate>
              <div className="mb-3">
              <input
                type="text"
                placeholder="Votre nom"
                {...register("from_name")}
                className="w-full p-3 border rounded-lg "
              />
              {errors.from_name && (
                <ErrorMessage message={errors.from_name.message} />
              )}
              </div>
              <div className="mb-3">
              <input
                type="email"
                placeholder="Votre email"
                {...register("from_email")}
                className="w-full p-3 border rounded-lg"
              />
              {errors.from_email && (
                <ErrorMessage message={errors.from_email.message} />
              )}
              </div>
              <div className="mb-3">
              <input
                type="text"
                placeholder="Sujet"
                {...register("subject")}
                className="w-full p-3 border rounded-lg mb-3"
                disabled
              />
              {errors.subject && (
                <ErrorMessage message={errors.subject.message} />
              )}
              </div>
              <div className="mb-3">
              <textarea
                placeholder="Votre message"
                {...register("message")}
                className="w-full p-3 border rounded-lg h-32 resize-none"
              />
              {errors.message && (
                <ErrorMessage message={errors.message.message} />
              )}
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-accent text-white py-2 px-4 rounded-lg"
                  disabled={loading}
                >
                  {loading ? "Envoi..." : "ENVOYER"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 text-black py-2 px-4 rounded-lg"
                >
                  Annuler
                </button>
              </div>
            </form>
            {message && (
              <p className="text-center text-gray-600 mt-4">{message}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
