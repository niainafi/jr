import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Motos d’Occasion",
    description: "Trouvez votre moto d’occasion idéale à Madagascar. Offres vérifiées, prix attractifs et annonces mises à jour.",
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
