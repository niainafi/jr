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

  // Fonction pour mettre à jour les motos sélectionnées
  // const handleMotoChange = (
  //   index: number,
  //   value: string
  // ) => {
  //   setFormData((prevState) => {
  //     const updatedMotos = [...prevState.motos] as any;
  //     updatedMotos[index] = value;

  //     // Réinitialisation de la quantité lorsqu'on change de type de moto
  //     // if (field === "moto") {
  //     //   updatedMotos[index].nbMotos = 1;
  //     // }
  //     return { ...prevState, motos: updatedMotos };
  //   });
  // };

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

  // Gestion du changement de quantité de moto avec une validation
  // const handleQuantityChange = (index: number,name: string ,value: string | number) => {
  //   let quantity = typeof value === 'string' ? parseInt(value, 10) : value;
  //   console.log('aaaa',index,name,value,quantity)  
  //   const moto = formData.motos[index].quantity;
  //   const max = maxQuantities[moto] || 1;
  
  //   if (isNaN(quantity) || quantity < 1) {
  //     quantity = 1;
  //   } else if (quantity > max) {
  //     quantity = max;
  //   }
  
  //   setFormData((prevState) => {
  //     const updatedMotos = [...prevState.motos];
  //     updatedMotos[index].quantity = quantity;
  //     return { ...prevState, motos: updatedMotos };
  //   });
  // };

  // useEffect(() => {
  //   const motoDatas  = formData.motos.map(m => {
  //     if(m.quantity === '' || m.quantity=== 0){
  //       return {
  //         ...m,
  //         quantity: 1
  //       }
  //     }else{
  //       return m
  //     }
  //   })
  //   setFormData((prev) =>{
  //     return {...prev,motos: motoDatas}
  //   })
  // },[formData.motos])

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
  // const addMotoSelection = () => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     motos: [...prevState.motos, { name: "", quantity: 1 }],
  //   }));
  // };

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
    <Container>
      <h2 className="text-3xl font-bold mb-10">ME RÉSERVER</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
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
          {/* {formData.motos.map((moto, index) => (
            <div key={index} className="flex gap-4 w-full">
              <div className="w-full flex">
                <div className="w-full">
                  <label htmlFor="type-moto"> Moto</label>
                  <select
                    id="type-moto"
                    name="name"
                    value={moto.name}
                    onChange={(e) =>
                      handleMotoChange(index, e.target.value)
                    }
                    className="p-3 border rounded-lg w-full bg-white h-[3.10rem] sm:h-auto"
                  >
                    {motosOptions.map((option, idx) => (
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
                    max={maxQuantities[moto.quantity]}
                    value={moto.quantity} // <- ici c'est bien un number
                    onChange={(e) =>
                      handleQuantityChange(index,e.target.name ,e.target.valueAsNumber)
                    }
                    className="p-3 border rounded-lg w-full bg-white"
                  />
                </div>
              </div>
            </div>
          ))} */}
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

<button
  type="button"
  onClick={addMotoSelection}
  className="p-2 bg-accent text-white rounded mt-4"
  disabled={getAvailableMotoOptions(-1).length === 0}
>
  Ajouter une moto
</button>
          {/* <input 
            type="number"
            value={testNum}
            onChange={(e) => setTestNum(parseInt(e.target.value))}
          /> */}
            {/* <button
              type="button"
              onClick={addMotoSelection}
              className="p-2 bg-accent text-white rounded"
            >
              Ajouter une moto
            </button> */}
        </div>

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="mt-4 bg-accent text-white py-3 px-6 rounded-lg hover:bg-opacity-80 transition"
          >
            {isSubmitting ? "Envoie...":"ENVOYER"}
          </button>
        </div>
      </form>
    </Container>
  );
}
