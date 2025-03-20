import { create } from "zustand";
import { UserStore } from "./type";
import axios from "axios";

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  getMe: async (token) => {
      try {
          set({ isLoading: true });
          if (typeof window !== "undefined") {
              // const token = localStorage.getItem("token");
              console.log("token cccccxxx", token);

        if (token) {
          const response = await axios.get(
            "https://justride.up.railway.app/api/auth/profile",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("getMe ::", response.data);
          const data = response.data;
          set({ user: data });
          return data;
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
