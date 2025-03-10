import { api } from "@/lib/axios";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getActu() {
    try {
        const res = await api.get(NEXT_PUBLIC_API_URL + "/actus");
        console.log("data ::", res.data);
        return res.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des actualités :", error);
        return []; // Retourne un tableau vide en cas d'erreur
    }
}


  