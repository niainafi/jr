import type { Metadata } from "next";
import { Roboto, Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import ScreenSize from "@/components/screen-size";
import { Toaster } from 'sonner';
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Actualités, Événements & Passion Moto - Just Ride Madagascar",
    template: "%s - Just Ride Madagascar",
  },
  description: "Just Ride Madagascar : pour ceux qui vivent moto ,Just Ride Madagascar : votre route commence ici, Just Ride Madagascar : la passion de la moto , l'excellence en équipements",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {children}
        <Toaster position="top-center" richColors/>
        <ScreenSize />
      </body>
    </html>
  );
}
