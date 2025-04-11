import { Metadata } from 'next';
import React from 'react'

export const metadata : Metadata = {
    title: 'Actualités Locales et Internationale',
    description: 'Restez informé des dernières actualités moto Internationale et à Madagascar, des nouveautés produits aux événements à venir.',
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
