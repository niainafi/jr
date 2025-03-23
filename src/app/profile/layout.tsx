import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Profile",
    description: "",
  };
  

export default function ProfileLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>{children}</>
  )
}