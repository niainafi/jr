"use client"; 
{/*     
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
}*/}

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

const API_URL = "https://justride.up.railway.app/api/moto-occasion"; 

export default function Occasion() {
  const [ocas, setOcas] = useState<any[]>([]); // Initialisation du state
  const [isModalOpen, setIsModalOpen] = useState(false); // Etat pour gérer l'ouverture du modal
  const [selectedMoto, setSelectedMoto] = useState<any | null>(null); // Etat pour la moto sélectionnée
  const formRef = useRef<HTMLFormElement | null>(null); // Référence du formulaire
  const [loading, setLoading] = useState(false); 
  const [message, setMessage] = useState("");

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

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!formRef.current) {
      console.error("❌ Le formulaire est introuvable !");
      setLoading(false);
      return;
    }

    try {
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
        NOS OCCASIONS <span className="text-accent">100% VALIDÉES</span> PAR JUST RIDE
      </h2>

      {/* Affichage des motos récupérées depuis l'API */}
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
                <h3 className="text-lg font-bold">{moto.marque} {moto.modèle}</h3>
                <p className="text-sm mt-2"><strong>Année :</strong> {moto.année}</p>
                <p><strong>Prix :</strong> {moto.prix} AR</p>
                <p className="text-sm"><strong>Kilométrage :</strong> {moto.kilométrage} KM</p>
                <p className="text-sm"><strong>Description :</strong> {moto.description}</p>
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
          <p className="text-center text-gray-500">Aucune occasion disponible.</p>
        )}
      </div>

      {/* Modal pour le formulaire de demande de devis */}
      {isModalOpen && selectedMoto && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4 bg-white">Demander un devis pour {selectedMoto.marque} {selectedMoto.modèle}</h3>
            <form ref={formRef} onSubmit={sendEmail}>
              <input type="text" name="from_name" placeholder="Votre nom" required className="w-full p-3 border rounded-lg mb-3" />
              <input type="email" name="from_email" placeholder="Votre email" required className="w-full p-3 border rounded-lg mb-3" />
              <input type="text" name="subject" placeholder="Sujet" value={`Demande de devis - ${selectedMoto.marque} ${selectedMoto.modèle}`} required className="w-full p-3 border rounded-lg mb-3" />
              <textarea name="message" placeholder="Votre message" required className="w-full p-3 border rounded-lg mb-3 h-32 resize-none" />
              <div className="flex justify-between items-center">
                <button type="submit" className="bg-accent text-white py-2 px-4 rounded-lg" disabled={loading}>
                  {loading ? "Envoi..." : "ENVOYER"}
                </button>
                <button type="button" onClick={closeModal} className="bg-gray-300 text-black py-2 px-4 rounded-lg">
                  Annuler
                </button>
              </div>
            </form>
            {message && <p className="text-center text-gray-600 mt-4">{message}</p>}
          </div>
        </div>
      )}
    </section>
  );
}
