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





import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";

// Chargement dynamique de la carte pour éviter l'erreur SSR
const Map = dynamic(() => import("./map"), { ssr: false });

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
        {/* Formulaire */}
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

          {/* Bouton ENVOYER aligné à droite */}
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="mt-4 bg-accent text-white py-3 px-6 rounded-lg hover:bg-opacity-80 transition"
              disabled={loading}
            >
              {loading ? "Envoi..." : "ENVOYER"}
            </button>
          </div>

          {/* Message de confirmation */}
          {message && <p className="text-center text-gray-600 mt-4">{message}</p>}
        </form>

        {/* Carte dynamique */}
        <div className="flex-1 h-64 sm:h-auto flex justify-center sm:justify-end">
          <Map />
        </div>
      </div>
    </div>
  );
}
