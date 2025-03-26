import { Dayjs } from "dayjs";

export type Events = {
    date: string;
    title: string;
    location: string;
    category: string;
  };
  
  
export type EventStore = {
    events?: Events[] 
    currentMonth: Dayjs
    isLoading: boolean
    setEvent: (event: Events[]) => void
    setCurrentMonth: (month: Dayjs) => void
}
  