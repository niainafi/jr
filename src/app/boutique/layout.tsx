import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Boutique Just Ride Madagascar",
    description: "Explorez notre boutique en ligne pour trouver des équipements et accessoires moto de qualité, adaptés à tous les styles.",
};

export default function BoutiqueLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>{children}</>
  )
}
