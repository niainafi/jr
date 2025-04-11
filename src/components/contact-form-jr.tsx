"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Container from "./container";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CountryCode, E164Number, isValidPhoneNumber } from "libphonenumber-js";
import ErrorMessage from "./error-message";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import '@/styles/phone-number.css'
import { toast } from "sonner";
import axios from "axios";
import { RiDeleteBin2Line } from "react-icons/ri";
import { cn } from "@/lib/cn";


// Définition du type pour formData afin de garantir la cohérence des données
interface MotoSelection {
  name: string;
  quantity: number | string;
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

const motos : MotoSelection[] = [
  {
    name: 'HIMALAYAN 450',
    quantity: 10
  },
  {
    name: 'HIMALAYAN 410',
    quantity: 1
  },
  {
    name: 'CLASSIC 500',
    quantity: 4
  },
]

export default function ReservationForm() {
  // Initialisation de l'état avec un typage explicite
  const [formData, setFormData] = useState<FormDataType>({
    motos: [{name: motos[0].name, quantity: 1 || ""}],
    dateDebut: new Date().toISOString().split("T")[0],
    dateFin: new Date().toISOString().split("T")[0],
    duree: "1",
  });
  const [phoneNumber, setPhoneNumber] = useState<E164Number>();
  const [errorPhoneNumber,setErrorPhoneNumber] = useState<string | null>(null)
  const [countryCode,setCountryCode] = useState<CountryCode |undefined>('MG')
  const [errorsInputQuantity, setErrorsInputQuantity] = useState<Record<number, string>>({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting},
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
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
      // Ajouter 1 jour pour inclure la date de début
    diffDays += 1;

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

 
  const getAvailableMotoOptions = (currentIndex: number) => {
    // Toutes les motos disponibles
    const allMotos = motos.map(m => m.name);
    
    // Motos déjà sélectionnées dans les autres champs
    const selectedMotos = formData.motos
      .filter((_, index) => index !== currentIndex)
      .map(m => m.name);
      
    // Filtrer pour ne garder que les motos non sélectionnées
    return allMotos.filter(moto => !selectedMotos.includes(moto));
  };

  const handleMotoChange = (index: number, value: string) => {
    const newMotos = [...formData.motos];
    newMotos[index] = {
      name: value,
      quantity: 1 // Réinitialiser la quantité à 1 quand on change de moto
    };
    setFormData({...formData, motos: newMotos});
  };



  const handleQuantityChange = (index: number, value: number) => {
    const newMotos = [...formData.motos];
    const selectedMoto = motos.find(m => m.name === newMotos[index].name);
    
    if (selectedMoto) {
      // Vérifier que la quantité ne dépasse pas le stock disponible
      const maxQuantity = selectedMoto.quantity;
      let newQuantity = Math.min(Math.max(value, 1), parseInt(maxQuantity as string));
      if(isNaN(newQuantity)){
        newMotos[index].quantity = '';
        errorsInputQuantity[index] = "La quantité doit être au moins 1";

        setFormData({...formData, motos: newMotos});
        return;
      }
      errorsInputQuantity[index] = ''
      
      newMotos[index].quantity = newQuantity;
      setFormData({...formData, motos: newMotos});
    }
  };

  const addMotoSelection = () => {
    const availableMotos = getAvailableMotoOptions(-1); // -1 pour ignorer toutes les sélections
    
    if (availableMotos.length > 0) {
      setFormData({
        ...formData,
        motos: [
          ...formData.motos,
          {
            name: availableMotos[0], // Sélectionner la première disponible par défaut
            quantity: 1
          }
        ]
      });
    } else {
      alert("Toutes les motos disponibles ont déjà été sélectionnées.");
    }
  };
 

  const removeMotoSelection = (index: number) => {
    if (formData.motos.length > 1) {
      const newMotos = formData.motos.filter((_, i) => i !== index);
      setFormData({...formData, motos: newMotos});
    }
  };
  const handleCountryChange = (value: E164Number | undefined) => {
    setPhoneNumber(value);

    if (!value) {
      setErrorPhoneNumber('Le numéro est requis.');
    } else if (!isValidPhoneNumber(value)) {
      setErrorPhoneNumber('Numéro invalide.');
    } else {
      setErrorPhoneNumber(null);
    }
  };
 
  const onSubmit = async (data: FormData) => {
    let hasError = false;
    const emailParams = {
      ...data,
      ...formData,
      telephone: phoneNumber,
      duree: parseInt(formData.duree) > 1 ? `${formData.duree} jours` : `${formData.duree}jour`,
      to : process.env.NEXT_PUBLIC_JUST_RENT_MAIL,
      subject: "Réservation de moto",
      motos: formData.motos.map((m) => `${m.name} (${m.quantity})`).join("\n"),
    };

    console.log('email paama', emailParams)

    console.log('ddd',errorsInputQuantity)
    Object.values(errorsInputQuantity).forEach(e => {
      if(e.length > 0){
        hasError = true
      }
    })

    if(errorPhoneNumber){
      return;
    }
    if(hasError){
      return;
    }

    try {
      const res = await axios.post('/api/reserver-moto', emailParams);
      console.log("Réponse de l'API :", res);
      if(res.status === 200 || res.status === 201) {
        toast.success("Réservation envoyée avec succès !");
        reset();
        setFormData((prev) => {return {...prev,motos: [{name: motos[0].name, quantity: 1 || ""}]} })
      }
    } catch (error) {
      console.error("Erreur d'envoi :", error);
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  const [testNum,setTestNum] = useState(0)
  return (
    <Container className="pb-[0px]">
      <h2 className="text-3xl font-bold mb-10">ME RÉSERVER</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6"
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
           
            <PhoneInput
              id="contact"
              defaultCountry={countryCode}
              value={phoneNumber}
              onChange={handleCountryChange}
              onCountryChange={(c) => setCountryCode(c)}
            />
            {errorPhoneNumber && <ErrorMessage message={errorPhoneNumber} />}
           
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
          <div className="grid grid-cols-3 gap-4 w-full  md:gap-2">
            <div className="">
              <label htmlFor="date_debut">Date de début</label>
              <input
                type="date"
                placeholder="JJ/MM/AAAA"
                name="dateDebut"
                id="date_debut"
                value={formData.dateDebut}
                onChange={handleDateChange}
                className="p-3 border rounded-lg bg-white text-center w-full h-[3.10rem] sm:h-auto"
              />
            </div>
            <div className=" h-full">
              <label htmlFor="date_fin">Date de fin</label>
              <input
                type="date"
                id="date_fin"
                name="dateFin"
                placeholder="JJ/MM/AAAA"
                value={formData.dateFin}
                onChange={handleDateChange}
                className="p-3 border rounded-lg bg-white text-center w-full h-[3.10rem] sm:h-auto"
              />
            </div>
            <div className="">
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
       
          {formData.motos.map((moto, index) => {
  const availableMotos = getAvailableMotoOptions(index);
  const selectedMoto = motos.find(m => m.name === moto.name);
  const maxQuantity = selectedMoto ? selectedMoto.quantity : 1;

  return (
    <div key={index} className="flex relative gap-4 w-[90%] items-end">
      <div className="w-full flex justify-center gap-4">
        <div className="w-full">
          <label htmlFor={`type-moto-${index}`}>Moto</label>
          <select
            id={`type-moto-${index}`}
            name="name"
            value={moto.name}
            onChange={(e) => handleMotoChange(index, e.target.value)}
            className="p-3 border rounded-lg w-full bg-white h-[3.10rem] sm:h-auto"
          >
            {availableMotos.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label htmlFor={`nombre-${index}`}>Nombre(s)</label>
          <input
            id={`nombre-${index}`}
            type="number"
            min={1}
            name="quantity"
            max={maxQuantity}
            value={moto.quantity}
            onChange={(e) => handleQuantityChange(index, e.target.valueAsNumber)}
            className="p-3 border rounded-lg w-full bg-white"
          />
          {errorsInputQuantity[index]?.length> 0 && <ErrorMessage message={errorsInputQuantity[index]} />}
        </div>
      </div>
      {formData.motos.length > 1 && (
        <button
          type="button"
          onClick={() => removeMotoSelection(index)}
          className={cn(
            "p-2 bg-transparent text-red-500 rounded h-[3.10rem] absolute right-0 translate-x-[3rem] top-1/2 ",
            errorsInputQuantity[index]?.length > 0 ? '-translate-y-[45%]': '-translate-y-[20%]'
          )}
        >
          <RiDeleteBin2Line />
        </button>
      )}
    </div>
  );
})}

<div className="flex justify-start items-center space-x-4 mt-4">
  <button
    type="button"
    onClick={addMotoSelection}
    className="p-2 bg-accent text-white rounded"
    disabled={getAvailableMotoOptions(-1).length === 0}
  >
    Ajouter une moto
  </button>

  <button
    type="submit"
    className="p-2 bg-accent text-white rounded hover:bg-opacity-80 transition"
  >
    {isSubmitting ? "Envoie..." : "ENVOYER"}
  </button>
</div>
</div>
      </form>
    </Container>
  );
}
