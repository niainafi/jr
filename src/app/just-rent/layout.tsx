import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Just Rent",
    description: "Louez une moto en toute sécurité avec JustRide. Large choix de modèles et tarifs adaptés à votre aventure à Madagascar.",
};

export default function JustRentLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>{children}</>
  )
}
