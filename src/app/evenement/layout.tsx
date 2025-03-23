import { Metadata } from 'next';
import React from 'react'

export const metadata : Metadata = {
    title: 'Événements Moto',
    description: "Consultez l’agenda des événements moto à Madagascar : compétitions, balades, salons et rassemblements.",
  }

export default function EvenementLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>{children}</>
  )
}
