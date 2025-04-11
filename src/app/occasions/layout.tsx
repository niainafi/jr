import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Motos d’Occasion",
    description: "Consultez nos offres de motos d'occasion soigneusement sélectionnées, alliant fiabilité et performance."
,
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
