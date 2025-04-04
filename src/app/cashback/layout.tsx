import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Cashback Moto",
    description: "Gérez vos informations personnelles et retrouvez votre historique d'activités sur Just Ride Madagascar.",
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
