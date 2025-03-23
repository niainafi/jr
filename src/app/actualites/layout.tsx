import { Metadata } from 'next';
import React from 'react'

export const metadata : Metadata = {
    title: 'Actualités Locales et Internationale',
    description: 'Découvrez toute l’actualité moto à Madagascar et du monde entier : nouveautés, événements, tendances et compétitions internationales.',
  }

export default function ActuLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>{children}</>
  )
}
