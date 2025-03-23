import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Cashback Moto",
    description: "Profitez d’offres de cashback exclusives sur vos achats d’équipements et accessoires moto. Économisez tout en roulant avec JustRide !",
  };
  

export default function CashBackLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>{children}</>
  )
}
