import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Boutique Moto",
    description: "Achetez vos équipements et accessoires moto en ligne. Casques, vêtements et pièces détachées disponibles.",
};

export default function BoutiqueLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>{children}</>
  )
}
