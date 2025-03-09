import { api } from "@/lib/axios";

export async function getMotoOccasion(){
    try {
      const res = await api.get('/moto-occasion');
      console.log("data ::",res.data);
      return res.data
    } catch (error) {
      console.log(error);
    }

  }

  