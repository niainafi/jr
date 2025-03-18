"use client";
 {/*
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
        "service_uynssi5", // Remplace par ton Service ID
        "template_id2orp9", // Remplace par ton Template ID
        formRef.current,
        "m5HSHEwIFpginPQvC"  // Remplace par ta Public Key EmailJS
      );

      console.log("✅ Réponse EmailJS :", response);

      if (response.status === 200) {
        setMessage("✅ Votre message a bien été envoyé !");
        formRef.current.reset(); // Réinitialisation du formulaire après l'envoi
      } else {
        setMessage("❌ Une erreur est survenue lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("❌ Erreur complète :", JSON.stringify(error, null, 2));
      console.dir(error); // 🔍 Affiche l'erreur sous forme d'objet dans la console

      setMessage("❌ Erreur lors de l'envoi du message. Vérifiez la console.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-14 text-center sm:text-left">NOUS CONTACTER</h2>

      <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 justify-between">
        {/* Formulaire 
        <form ref={formRef} onSubmit={sendEmail} className="flex-1 space-y-4">
          <input
            type="text"
            name="from_name"
            placeholder="Votre nom"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Votre email"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            required
            className="w-full p-3 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-gray-500"
          />

          {/* Bouton ENVOYER aligné à droite 
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="mt-4 bg-accent text-white py-3 px-6 rounded-lg hover:bg-opacity-80 transition"
              disabled={loading}
            >
              {loading ? "Envoi..." : "ENVOYER"}
            </button>
          </div>

          {/* Message de confirmation 
          {message && <p className="text-center text-gray-600 mt-4">{message}</p>}
        </form>

        {/* Carte ou autre contenu 
        <div className="flex-1">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=..."
            width="100%"
            height="300"
            className="border rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
*/}
 {/*
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 📍 Coordonnées mises à jour pour Just Rent - Corona Plaza, Andranomena
const position: [number, number] = [-18.850514, 47.477803];

// ✅ Icône personnalisée pour le marqueur rouge
const customIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png", // Icône rouge
  iconSize: [32, 48], // Augmente la taille du marqueur
  iconAnchor: [16, 48], // Ancre ajustée
  popupAnchor: [0, -40], // Position du popup ajustée
});

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
        "service_uynssi5", // Remplace par ton Service ID
        "template_id2orp9", // Remplace par ton Template ID
        formRef.current,
        "m5HSHEwIFpginPQvC"  // Remplace par ta Public Key EmailJS
      );

      console.log("✅ Réponse EmailJS :", response);

      if (response.status === 200) {
        setMessage("✅ Votre message a bien été envoyé !");
        formRef.current.reset(); // Réinitialisation du formulaire après l'envoi
      } else {
        setMessage("❌ Une erreur est survenue lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("❌ Erreur complète :", JSON.stringify(error, null, 2));
      console.dir(error);
      setMessage("❌ Erreur lors de l'envoi du message. Vérifiez la console.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-14 text-center sm:text-left">NOUS CONTACTER</h2>

      <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 justify-between">
        {/* Formulaire 
        <form ref={formRef} onSubmit={sendEmail} className="flex-1 space-y-4">
          <input
            type="text"
            name="from_name"
            placeholder="Votre nom"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Votre email"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-500"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            required
            className="w-full p-3 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-gray-500"
          />

          {/* Bouton ENVOYER aligné à droite 
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="mt-4 bg-accent text-white py-3 px-6 rounded-lg hover:bg-opacity-80 transition"
              disabled={loading}
            >
              {loading ? "Envoi..." : "ENVOYER"}
            </button>
          </div>

          {/* Message de confirmation 
          {message && <p className="text-center text-gray-600 mt-4">{message}</p>}
        </form>

        {/* 📌 Carte avec le marqueur rouge bien visible 
        <div className="flex-1 h-64 sm:h-auto flex justify-center sm:justify-end">
          <MapContainer
            center={position} // Centrer la carte sur Just Rent
            zoom={17} // 🔹 Zoom augmenté pour voir plus clairement
            style={{ width: "100%", height: "100%" }} // Taille ajustée
          >
            {/* Fond de carte OpenStreetMap 
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* 📌 Marqueur personnalisé en rouge pour Just Rent 
            <Marker position={position} icon={customIcon}>
              <Popup>📍 Just Rent - Corona Plaza, Andranomena, Antananarivo</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
*/}



import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";

// 📌 Chargement dynamique de la carte pour éviter l'erreur SSR
const MapComponent = dynamic(() => import("./map"), { ssr: false });

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
      } else {
        setMessage("❌ Une erreur est survenue.");
      }
    } catch (error) {
      console.error("❌ Erreur :", error);
      setMessage("❌ Erreur lors de l'envoi.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-14 text-center">NOUS CONTACTER</h2>

      <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 justify-between">
        {/* Formulaire */}
        <form ref={formRef} onSubmit={sendEmail} className="flex-1 space-y-4">
          <input type="text" name="from_name" placeholder="Votre nom" required className="w-full p-3 border rounded-lg" />
          <input type="email" name="from_email" placeholder="Votre email" required className="w-full p-3 border rounded-lg" />
          <input type="text" name="subject" placeholder="Sujet" required className="w-full p-3 border rounded-lg" />
          <textarea name="message" placeholder="Votre message" required className="w-full p-3 border rounded-lg h-32 resize-none" />

          <div className="w-full flex justify-end">
            <button type="submit" className="mt-4 bg-accent text-white py-3 px-6 rounded-lg hover:bg-opacity-80" disabled={loading}>
              {loading ? "Envoi..." : "ENVOYER"}
            </button>
          </div>
          {message && <p className="text-center text-gray-600 mt-4">{message}</p>}
        </form>

        {/* 📌 Carte OpenStreetMap */}
        <div className="flex-1 h-64 sm:h-auto flex justify-center sm:justify-end">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}




