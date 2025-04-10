'use client';

import { useEffect, useState } from "react";
import dayjs from "dayjs";

export const useAutoUpdateCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      const today = dayjs();
      if (!currentDate.isSame(today, "day")) {
        setCurrentDate(today); 
      }
    }, 1000 * 60 * 60 * 2); // 2hours

    return () => clearInterval(interval);
  }, [currentDate]);

  return currentDate;
};
