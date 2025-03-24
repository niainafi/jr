"use client";

{/* 
import { ChangeEvent, FormEvent, useState } from "react";
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
   
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    <Container>
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
*/}import { ChangeEvent, FormEvent, useState } from "react";
import Container from "./container";
import emailjs from "@emailjs/browser";

// Définition du type pour formData afin de garantir la cohérence des données
interface MotoSelection {
  moto: string;
  nbMotos: string;
}

interface FormDataType {
  nom: string;
  prenom: string;
  passeport: string;
  contact: string;
  motos: MotoSelection[];
  dateDebut: string;
  dateFin: string;
  duree: string;
}

export default function ReservationForm() {
  // Initialisation de l'état avec un typage explicite
  const [formData, setFormData] = useState<FormDataType>({
    nom: "",
    prenom: "",
    passeport: "",
    contact: "",
    motos: [{ moto: "Royal Enfield Himalayan 411", nbMotos: "1 Moto" }],
    dateDebut: "",
    dateFin: "",
    duree: "",
  });

  const motosOptions = [
    "Royal Enfield Himalayan 411",
    "HIMALAYAN 450",
    "HIMALAYAN 410",
    "CLASSIC 500",
  ];

  // Fonction pour calculer la durée en jours entre la date de début et la date de fin
  const calculateDuration = (start: string, end: string): string => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return `${diffDays} Jours`;
    }
    return "";
  };

  // Fonction pour mettre à jour les dates et recalculer la durée
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => {
      const updatedState = { ...prevState, [name]: value };
      if (name === "dateDebut" || name === "dateFin") {
        updatedState.duree = calculateDuration(updatedState.dateDebut, updatedState.dateFin);
      }
      return updatedState;
    });
  };

  // Fonction pour mettre à jour les motos sélectionnées
  const handleMotoChange = (index: number, field: keyof MotoSelection, value: string) => {
    setFormData(prevState => {
      const updatedMotos = [...prevState.motos];
      updatedMotos[index][field] = value;
      return { ...prevState, motos: updatedMotos };
    });
  };

  const addMotoSelection = () => {
    setFormData(prevState => ({
      ...prevState,
      motos: [...prevState.motos, { moto: "", nbMotos: "1 Moto" }],
    }));
  };

  // Fonction pour envoyer les données via EmailJS
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = "service_uynssi5";
    const templateID = "template_m5neixf";
    const userID = "m5HSHEwIFpginPQvC";

    const emailParams = {
      ...formData,
      motos: formData.motos.map(m => `${m.moto} (${m.nbMotos})`).join("\n"),
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
    <Container>
      <h2 className="text-3xl font-bold mb-10">ME RÉSERVER</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-4">
          <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleDateChange} className="p-3 border rounded-lg w-full" required />
          <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleDateChange} className="p-3 border rounded-lg w-full" required />
          <input type="text" name="passeport" placeholder="Passeport" value={formData.passeport} onChange={handleDateChange} className="p-3 border rounded-lg w-full" />
          <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleDateChange} className="p-3 border rounded-lg w-full" required />
        </div>

        <div className="space-y-4">
          {formData.motos.map((moto, index) => (
            <div key={index} className="flex gap-2">
              <select value={moto.moto} onChange={(e) => handleMotoChange(index, "moto", e.target.value)} className="p-3 border rounded-lg w-full bg-white">
                {motosOptions.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
              <input
                type="number"
                min="1"
                value={moto.nbMotos.replace(" Motos", "").replace(" Moto", "")} // Nettoie l'affichage
                onChange={(e) => handleMotoChange(index, "nbMotos", `${e.target.value} Motos`)}
                className="p-3 border rounded-lg w-full bg-white"
              />
            </div>
          ))}
          <button type="button" onClick={addMotoSelection} className="p-2 bg-accent text-white rounded">Ajouter une moto</button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <input type="date" name="dateDebut" value={formData.dateDebut} onChange={handleDateChange} className="p-3 border rounded-lg bg-white text-center" />
          <input type="date" name="dateFin" value={formData.dateFin} onChange={handleDateChange} className="p-3 border rounded-lg bg-white text-center" />
          <input type="text" name="duree" value={formData.duree} readOnly className="p-3 border rounded-lg bg-gray-100 text-center" />
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
