"use client";

import { useState, useMemo } from "react";
import dayjs from "dayjs";
import "dayjs/locale/fr"; // Import de la locale française
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import clsx from "clsx";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useEventStore } from "@/store/events";
import { MdEvent } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { TbCategory } from "react-icons/tb";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);
dayjs.locale("fr");

const daysOfWeek = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

function MonthlyCalendar<T extends Record<string, any>>({
  events,
}: {
  events?: T[];
}) {
  const {currentMonth, setCurrentMonth} = useEventStore();

  const firstDayOfMonth = currentMonth.startOf("month");
  const lastDayOfMonth = currentMonth.endOf("month");
  const firstDayOfGrid = firstDayOfMonth.startOf("week");
  const lastDayOfGrid = lastDayOfMonth.endOf("week");

  // ✅ Correction : Ajout des dépendances firstDayOfGrid et lastDayOfGrid
  const days = useMemo(() => {
    const tempDays: dayjs.Dayjs[] = [];
    let day = firstDayOfGrid;

    while (day.isBefore(lastDayOfGrid) || day.isSame(lastDayOfGrid, "day")) {
      tempDays.push(day);
      day = day.add(1, "day");
    }

    return tempDays;
  }, [firstDayOfGrid, lastDayOfGrid]); // 🔥 Correction ici !

  const nextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));

  // Fonction pour revenir au mois précédent
  const prevMonth = () => setCurrentMonth(currentMonth.subtract(1, "month"));

  return (
    <div className="max-w-2xl mx-auto p-3 bg-white shadow rounded-sm relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <button
          type="button"
          onClick={prevMonth}
          className={clsx(
            "text-gray-500 text-sm p-1 rounded-full bg-gray-100 hover:bg-gray-200"
          )}
        >
          <GrFormPreviousLink className="w-7 h-7" />
        </button>
        <h2 className="text-sm font-semibold text-gray-700">
          {currentMonth.format("MMMM YYYY")}
        </h2>

        <button
          type="button"
          onClick={nextMonth}
          className={clsx(
            "text-gray-500 text-sm p-1 rounded-full bg-gray-100 hover:bg-gray-200"
          )}
        >
          <GrFormNextLink className="w-7 h-7" />
        </button>
      </div>

      {/* Jours de la semaine */}
      <div className="grid grid-cols-7 gap-1 text-center font-bold border-b p-1 bg-gray-500">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-white text-[9px]">
            {day}
          </div>
        ))}
      </div>
      

      {/* Jours du mois */}
      <div className="grid grid-cols-7">
        {days.map((day, index) => {
          const isCurrentMonth = day.month() === currentMonth.month();
          const isToday = day.isSame(dayjs(), "day");
          const currentEvent = events?.find(
            (event) => event.date === day.format("YYYY-MM-DD")
          );
          
          return (
            <div key={index} className={`group`} >
            {currentEvent ? <div className={clsx(" hidden absolute left-1/2 top-5 -translate-x-1/2 bg-accent bg-opacity-0 w-[300px] p-2 rounded-lg text-white",
              `group-hover:flex flex-col transition-all duration-300`
            )}>
              
              <h2 className="text-sm flex flex-row items-center gap-2"> <span><MdEvent /></span>{currentEvent?.title}</h2>
              <p className="flex items-center text-sm gap-2"><span><SlLocationPin /></span>{currentEvent?.location}</p>
              <p className="text-sm flex items-center gap-2"><span><TbCategory/></span>{currentEvent?.category}</p>

            </div> : null}
            
            <div
              
              className={clsx(
                "text-center border p-2 w-13 h-13 relative",
                currentEvent && "bg-accent text-white font-bold",
                isToday && "bg-blue-500 text-white font-bold",
                isCurrentMonth ? "text-gray-400" : "bg-gray-100"
              )}
            >
              <br />
              <span className="absolute top-1 left-1 text-[9px] font-bold">
                {day.format("D")}
              </span>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MonthlyCalendar;
