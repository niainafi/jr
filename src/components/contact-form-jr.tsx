"use client";
{/* 
"use client";

import { useState } from "react";
import Container from "./container";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    passeport: "",
    contact: "",
    moto: "Royal Enfield Himalayan 411",
    nbMotos: "02 Motos",
    dateDebut: "26 - 02 - 25",
    dateFin: "05 - 03 - 25",
    duree: "07 Jours",
    montantUnitaire: "",
    total: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container className="py-16"> {/* Ajout de py-16 pour espacer le composant au-dessus */}
      {/* Titre RESERVEZ avec un peu plus d'espace 
      <h2 className="text-3xl font-bold mb-10">ME RESERVEZ</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Colonne gauche 
        <div className="space-y-4">
          <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} className="p-3 border rounded-lg w-full" />
          <input type="text" name="prenom" placeholder="Prenom" value={formData.prenom} onChange={handleChange} className="p-3 border rounded-lg w-full" />
          <input type="text" name="passeport" placeholder="Passeport" value={formData.passeport} onChange={handleChange} className="p-3 border rounded-lg w-full" />
          <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} className="p-3 border rounded-lg w-full" />
        </div>

        {/* Colonne droite 
        <div className="space-y-4">
          <div className="flex gap-2">
            <input type="text" name="moto" value={formData.moto} readOnly className="flex-1 p-3 border rounded-lg bg-gray-100" />
            <input type="text" name="nbMotos" value={formData.nbMotos} readOnly className="w-24 p-3 border rounded-lg bg-gray-100 text-center" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <input type="text" name="dateDebut" value={formData.dateDebut} readOnly className="p-3 border rounded-lg bg-gray-100 text-center" />
            <input type="text" name="dateFin" value={formData.dateFin} readOnly className="p-3 border rounded-lg bg-gray-100 text-center" />
            <input type="text" name="duree" value={formData.duree} readOnly className="p-3 border rounded-lg bg-gray-100 text-center" />
          </div>

          <input type="text" name="montantUnitaire" placeholder="Montant unitaire / jours" value={formData.montantUnitaire} onChange={handleChange} className="p-3 border rounded-lg w-full" />
          <input type="text" name="total" placeholder="Total" value={formData.total} onChange={handleChange} className="p-3 border rounded-lg w-full" />
        </div>

        {/* Bouton ENVOYE sous "Total" aligné à droite 
        <div className="sm:col-span-2 flex justify-end">
          <button type="submit" className="mt-4 bg-accent text-white py-3 px-6 rounded-lg hover:accent transition">
            ENVOYER
          </button>
        </div>
      </form>
    </Container>
  );
}
*/}



import { useState } from "react";
import Container from "./container";
import emailjs from "@emailjs/browser";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    passeport: "",
    contact: "",
    moto: "Royal Enfield Himalayan 411",
    nbMotos: "02 Motos",
    dateDebut: "26 - 02 - 25",
    dateFin: "05 - 03 - 25",
    duree: "07 Jours",
    montantUnitaire: "",
    total: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = "service_uynssi5"; // Remplace par ton Service ID
    const templateID = "template_m5neixf"; // Remplace par ton Template ID
    const userID = "m5HSHEwIFpginPQvC"; // Remplace par ton User ID

    const emailParams = {
      nom: formData.nom,
      prenom: formData.prenom,
      passeport: formData.passeport,
      contact: formData.contact,
      moto: formData.moto,
      nbMotos: formData.nbMotos,
      dateDebut: formData.dateDebut,
      dateFin: formData.dateFin,
      duree: formData.duree,
      montantUnitaire: formData.montantUnitaire,
      total: formData.total,
    };

    try {
      await emailjs.send(serviceID, templateID, emailParams, userID);
      alert("Réservation envoyée avec succès !");
    } catch (error) {
      console.error("Erreur d'envoi :", error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <Container className="py-16">
      <h2 className="text-3xl font-bold mb-10">ME RESERVEZ</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-4">
          <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} className="p-3 border rounded-lg w-full" required />
          <input type="text" name="prenom" placeholder="Prenom" value={formData.prenom} onChange={handleChange} className="p-3 border rounded-lg w-full" required />
          <input type="text" name="passeport" placeholder="Passeport" value={formData.passeport} onChange={handleChange} className="p-3 border rounded-lg w-full" />
          <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} className="p-3 border rounded-lg w-full" required />
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <input type="text" name="moto" value={formData.moto} readOnly className="flex-1 p-3 border rounded-lg bg-gray-100" />
            <input type="text" name="nbMotos" value={formData.nbMotos} readOnly className="w-24 p-3 border rounded-lg bg-gray-100 text-center" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <input type="text" name="dateDebut" value={formData.dateDebut} readOnly className="p-3 border rounded-lg bg-gray-100 text-center" />
            <input type="text" name="dateFin" value={formData.dateFin} readOnly className="p-3 border rounded-lg bg-gray-100 text-center" />
            <input type="text" name="duree" value={formData.duree} readOnly className="p-3 border rounded-lg bg-gray-100 text-center" />
          </div>

          <input type="text" name="montantUnitaire" placeholder="Montant unitaire / jours" value={formData.montantUnitaire} onChange={handleChange} className="p-3 border rounded-lg w-full" />
          <input type="text" name="total" placeholder="Total" value={formData.total} onChange={handleChange} className="p-3 border rounded-lg w-full" />
        </div>

        <div className="sm:col-span-2 flex justify-end">
          <button type="submit" className="mt-4 bg-accent text-white py-3 px-6 rounded-lg hover:bg-opacity-80 transition">
            ENVOYER
          </button>
        </div>
      </form>
    </Container>
  );
}
