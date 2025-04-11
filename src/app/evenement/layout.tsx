import { Metadata } from 'next';
import React from 'react'

export const metadata : Metadata = {
    title: 'Événements Moto',
    description: "Découvrez nos événements moto exclusifs, des rassemblements aux sorties organisées, pour vivre pleinement votre passion."
,
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
