import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Nous contacter",
  description: "Contactez-nous pour toute information ou demande, notre équipe est à votre écoute pour vous accompagner",
};

export default function ContactLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>{children}</>
  )
}
