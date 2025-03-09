import { api } from "@/lib/axios";

export async function getActu(){
    try {
      const res = await api.get('/actus');
      console.log("data ::",res.data);
      return res.data
    } catch (error) {
      console.log(error);
    }

  }

  