import { create } from 'zustand'
import { UserStore } from './type'

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
  }));