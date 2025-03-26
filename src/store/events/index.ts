import { create } from "zustand";
import { EventStore } from "./type";
import dayjs from "dayjs";

export const useEventStore = create<EventStore>((set) => ({
  events: [],
  isLoading: true,
  currentMonth: dayjs(),
  setCurrentMonth : (month) => set({ currentMonth: month }),
  setEvent: (events) => {
    set({events})
  },
 
}));
