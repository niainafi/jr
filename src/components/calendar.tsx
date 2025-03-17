"use client";
{/* 
import { useState, useMemo, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/fr"; // Import de la locale française
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import clsx from "clsx";
// import { getMotoOccasion } from "@/actions/occasion";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);
dayjs.locale("fr");

const daysOfWeek = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

function MonthlyCalendar() {
  const [currentMonth,] = useState(dayjs());
  // const [motos,setMotos] = useState([])


  const firstDayOfMonth = currentMonth.startOf("month");
  const lastDayOfMonth = currentMonth.endOf("month");
  const firstDayOfGrid = firstDayOfMonth.startOf("week");
  const lastDayOfGrid = lastDayOfMonth.endOf("week");

  // Mémorisation des jours pour éviter le recalcul à chaque rendu
  const days = useMemo(() => {
    const tempDays: dayjs.Dayjs[] = [];
    let day = firstDayOfGrid;

    while (day.isBefore(lastDayOfGrid) || day.isSame(lastDayOfGrid, "day")) {
      tempDays.push(day);
      day = day.add(1, "day");
    }

    return tempDays;
  }, [currentMonth]); // Recalcul uniquement si le mois change

//   const nextMonth = () => setCurrentMonth((prev) => prev.add(1, "month"));
//   const prevMonth = () => setCurrentMonth((prev) => prev.subtract(1, "month"));
//   const resetToCurrentMonth = () => setCurrentMonth(dayjs());



  return (
    <div className="max-w-2xl mx-auto p-3 bg-white shadow rounded-sm">
      {/* Header 
      <div className="flex justify-between items-center mb-0">
        {/* <button onClick={prevMonth} className="px-3 py-1 bg-gray-300 rounded-md">
          ← Précédent
        </button> 
        <h2 className="text-xs font-semibold text-gray-500">{currentMonth.format("MMMM YYYY")}</h2>
        {/* <button onClick={nextMonth} className="px-3 py-1 bg-gray-300 rounded-md">
          Suivant →
        </button> 
      </div>

      {/* Jours de la semaine 
      <div className="grid grid-cols-7 gap-1 text-center font-bold border-b p-1 bg-gray-500">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-white text-[9px]">{day}</div>
        ))}
      </div>

      {/* Jours du mois 
      <div className="grid grid-cols-7">
        {days.map((day, index) => {
          const isCurrentMonth = day.month() === currentMonth.month();
          const isToday = day.isSame(dayjs(), "day");

          return (
            <div
              key={index}
              className={clsx(
                "text-center border p-2 w-13 h-13 relative",
                isToday && "bg-blue-500 text-white font-bold",
                isCurrentMonth ? "text-gray-400": "bg-gray-100"
              )}
            >
                <br />
              <span className="absolute top-1 left-1 text-[9px] font-bold">
                {day.format("D")}
               </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default MonthlyCalendar;
*/}


import { useState, useMemo } from "react";
import dayjs from "dayjs";
import "dayjs/locale/fr"; // Import de la locale française
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import clsx from "clsx";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);
dayjs.locale("fr");

const daysOfWeek = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

function MonthlyCalendar() {
  const [currentMonth] = useState(dayjs());

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

  return (
    <div className="max-w-2xl mx-auto p-3 bg-white shadow rounded-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-0">
        <h2 className="text-xs font-semibold text-gray-500">{currentMonth.format("MMMM YYYY")}</h2>
      </div>

      {/* Jours de la semaine */}
      <div className="grid grid-cols-7 gap-1 text-center font-bold border-b p-1 bg-gray-500">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-white text-[9px]">{day}</div>
        ))}
      </div>

      {/* Jours du mois */}
      <div className="grid grid-cols-7">
        {days.map((day, index) => {
          const isCurrentMonth = day.month() === currentMonth.month();
          const isToday = day.isSame(dayjs(), "day");

          return (
            <div
              key={index}
              className={clsx(
                "text-center border p-2 w-13 h-13 relative",
                isToday && "bg-blue-500 text-white font-bold",
                isCurrentMonth ? "text-gray-400" : "bg-gray-100"
              )}
            >
              <br />
              <span className="absolute top-1 left-1 text-[9px] font-bold">
                {day.format("D")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MonthlyCalendar;
