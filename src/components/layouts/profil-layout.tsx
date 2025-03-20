"use client"; // Assure que ce fichier est exécuté côté client
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      redirect("/cashback"); 
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; 
  }

  return <div>{children}</div>;
}
