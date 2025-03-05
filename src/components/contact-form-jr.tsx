"use client";

import { useState } from "react";

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
    <div className="max-w-4xl mx-auto py-16 px-4"> {/* Ajout de py-16 pour espacer le composant au-dessus */}
      {/* Titre RESERVEZ avec un peu plus d'espace */}
      <h2 className="text-3xl font-bold mb-10">ME RESERVEZ</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Colonne gauche */}
        <div className="space-y-4">
          <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} className="p-3 border rounded-lg w-full" />
          <input type="text" name="prenom" placeholder="Prenom" value={formData.prenom} onChange={handleChange} className="p-3 border rounded-lg w-full" />
          <input type="text" name="passeport" placeholder="Passeport" value={formData.passeport} onChange={handleChange} className="p-3 border rounded-lg w-full" />
          <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} className="p-3 border rounded-lg w-full" />
        </div>

        {/* Colonne droite */}
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

        {/* Bouton ENVOYE sous "Total" aligné à droite */}
        <div className="sm:col-span-2 flex justify-end">
          <button type="submit" className="mt-4 bg-yellow-600 text-white py-3 px-6 rounded-lg hover:bg-yellow-700 transition">
            ENVOYER
          </button>
        </div>
      </form>
    </div>
  );
}
