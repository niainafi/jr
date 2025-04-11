
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Just Rent",
    description: "Louez des motos Royal Enfield à Madagascar avec Just Rent, pour des aventures inoubliables sur les routes malgaches.",
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
