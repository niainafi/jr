import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Nous contacter",
  description: "Besoin d’aide ou d’informations ? Contactez JustRide pour toute question sur nos services et événements.",
};

export default function ContactLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>{children}</>
  )
}
