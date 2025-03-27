"use client";

{
  /* 
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
*/
}
import { ChangeEvent, FormEvent, useState } from "react";
import Container from "./container";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { E164Number, isValidPhoneNumber } from "libphonenumber-js";
import ErrorMessage from "./error-message";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import '@/styles/phone-number.css'
import { toast } from "sonner";


// Définition du type pour formData afin de garantir la cohérence des données
interface MotoSelection {
  moto: string;
  nbMotos: string;
}

interface FormDataType {
  motos: MotoSelection[];
  dateDebut: string;
  dateFin: string;
  duree: string;
}

const regexPassport = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/;
const formSchema = z.object({
  nom: z.string().min(1, "Nom est requis"),
  prenom: z.string().min(1, "Prénom est requis"),
  passeport: z.string().optional(),
    // .refine((value) => regexPassport.test(value)),
  email: z.string().email("Email invalide"),
});

type FormData = z.infer<typeof formSchema>;

export default function ReservationForm() {
  // Initialisation de l'état avec un typage explicite
  const [formData, setFormData] = useState<FormDataType>({
    motos: [{ moto: "HIMALAYAN 450", nbMotos: "1 Moto" }],
    dateDebut: new Date().toISOString().split("T")[0],
    dateFin: new Date().toISOString().split("T")[0],
    duree: "",
  });
  const [phoneNumber, setPhoneNumber] = useState<E164Number>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const motosOptions = ["HIMALAYAN 450", "HIMALAYAN 410", "CLASSIC 500"];
  const maxQuantities: { [key: string]: number } = {
    "HIMALAYAN 450": 10,
    "HIMALAYAN 410": 1,
    "CLASSIC 500": 4,
  };

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
    setFormData((prevState) => {
      const updatedState = { ...prevState, [name]: value };
      if (name === "dateDebut" || name === "dateFin") {
        updatedState.duree = calculateDuration(
          updatedState.dateDebut,
          updatedState.dateFin
        );
      }
      return updatedState;
    });
  };

  // Fonction pour mettre à jour les motos sélectionnées
  const handleMotoChange = (
    index: number,
    field: keyof MotoSelection,
    value: string
  ) => {
    setFormData((prevState) => {
      const updatedMotos = [...prevState.motos];
      updatedMotos[index][field] = value;

      // Réinitialisation de la quantité lorsqu'on change de type de moto
      if (field === "moto") {
        updatedMotos[index].nbMotos = "1 Moto";
      }
      return { ...prevState, motos: updatedMotos };
    });
  };

  // Gestion du changement de quantité de moto avec une validation
  const handleQuantityChange = (index: number, value: string) => {
    const moto = formData.motos[index].moto;
    const max = maxQuantities[moto] || 1;
    let quantity = parseInt(value, 10);

    // Validation de la quantité (min: 1, max: limite définie)
    if (isNaN(quantity) || quantity < 1) {
      quantity = 1;
    } else if (quantity > max) {
      quantity = max;
    }

    setFormData((prevState) => {
      const updatedMotos = [...prevState.motos];
      updatedMotos[index].nbMotos = `${quantity} Moto${
        quantity > 1 ? "s" : ""
      }`;
      return { ...prevState, motos: updatedMotos };
    });
  };

  const addMotoSelection = () => {
    setFormData((prevState) => ({
      ...prevState,
      motos: [...prevState.motos, { moto: "", nbMotos: "1 Moto" }],
    }));
  };

  // Fonction pour envoyer les données via EmailJS
  const onSubmit = async (data: FormData) => {
    const serviceID = "service_uynssi5";
    const templateID = "template_m5neixf";
    const userID = "m5HSHEwIFpginPQvC";

    const emailParams = {
      ...data,
      ...formData,
      telephone: phoneNumber,
      motos: formData.motos.map((m) => `${m.moto} (${m.nbMotos})`).join("\n"),
    };

    console.log("Données à envoyer :", emailParams);

    try {
      await emailjs.send(serviceID, templateID, emailParams, userID);
      toast.success("Réservation envoyée avec succès !");
    } catch (error) {
      console.error("Erreur d'envoi :", error);
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <Container>
      <h2 className="text-3xl font-bold mb-10">ME RÉSERVER</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="nom">Nom</label>
            <input
              id="nom"
              type="text"
              {...register("nom")}
              placeholder="Votre nom"
              className="p-3 border rounded-lg w-full"
              required
            />
            {errors.nom && <ErrorMessage message={errors.nom.message} />}
          </div>
          <div>
            <label htmlFor="prenom">Prenoms</label>
            <input
              type="text"
              id="prenom"
              placeholder="Votre prenoms"
              {...register("prenom")}
              className="p-3 border rounded-lg w-full"
              required
            />
            {errors.prenom && <ErrorMessage message={errors.prenom.message} />}
          </div>
          <div>
            <label htmlFor="passport">Passeport</label>
            <input
              type="text"
              id="passport"
              placeholder="Votre numero passeport"
              {...register("passeport")}
              className="p-3 border rounded-lg w-full"
            />
            {errors.passeport && (
              <ErrorMessage message={errors.passeport.message} />
            )}
          </div>
          <div>
            <label htmlFor="contact">Téléphone</label>
            {/* <input
              type="text"
              id="contact"
              placeholder="Numero téléphone"
              {...register("telephone")}
              className="p-3 border rounded-lg w-full"
              required
            /> */}
            <PhoneInput 
              id="contact"
              defaultCountry="MG"
              value={phoneNumber}
              onChange={(value) => setPhoneNumber(value)}
            />
            {/* {errors.telephone && (
              <ErrorMessage message={errors.telephone.message} />
            )} */}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="votre email"
              {...register("email")}
              className="p-3 border rounded-lg w-full"
              required
            />
            {errors.email && <ErrorMessage message={errors.email.message} />}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-row w-full gap-2">
            <div className="w-[40%]">
              <label htmlFor="date_debut">Date de début</label>
              <input
                type="date"
                placeholder="JJ/MM/AAAA"
                name="dateDebut"
                id="date_debut"
                value={formData.dateDebut}
                onChange={handleDateChange}
                className="p-3 border rounded-lg bg-white text-center w-full"
              />
            </div>
            <div className="w-[40%]">
              <label htmlFor="date_fin">Date de fin</label>
              <input
                type="date"
                id="date_fin"
                name="dateFin"
                placeholder="JJ/MM/AAAA"
                value={formData.dateFin}
                onChange={handleDateChange}
                className="p-3 border rounded-lg bg-white text-center w-full"
              />
            </div>
            <div className="w-[20%]">
              <label htmlFor="duration">Durée</label>
              <input
                id="duration"
                type="text"
                name="duree"
                value={formData.duree}
                readOnly
                className="p-3 border rounded-lg bg-gray-100 text-center w-full"
              />
            </div>
          </div>
          {formData.motos.map((moto, index) => (
            <div key={index} className="flex gap-2 w-full">
              <div className="w-full flex">
                <div className="w-full">
                  <label htmlFor="type-moto"> Moto</label>
                  <select
                    id="type-moto"
                    value={moto.moto}
                    onChange={(e) =>
                      handleMotoChange(index, "moto", e.target.value)
                    }
                    className="p-3 border rounded-lg w-full bg-white"
                  >
                    {motosOptions.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full">
                  <label htmlFor="nombre">Nombre(s)</label>
                  <input
                    type="number"
                    min="1"
                    max={maxQuantities[moto.moto]}
                    value={moto.nbMotos
                      .replace(" Motos", "")
                      .replace(" Moto", "")}
                    onChange={(e) =>
                      handleQuantityChange(index, e.target.value)
                    }
                    className="p-3 border rounded-lg w-full bg-white"
                  />
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addMotoSelection}
            className="p-2 bg-accent text-white rounded"
          >
            Ajouter une moto
          </button>
        </div>

        <div className="sm:col-span-2 flex justify-end">
          <button
            type="submit"
            className="mt-4 bg-accent text-white py-3 px-6 rounded-lg hover:bg-opacity-80 transition"
          >
            ENVOYER
          </button>
        </div>
      </form>
    </Container>
  );
}
