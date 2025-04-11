import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Cashback",
    description: "Profitez de notre programme de cash back attractif, récompensant votre fidélité et vos achats chez Just Ride.",
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
