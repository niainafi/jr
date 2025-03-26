import type { Metadata } from "next";
import { Roboto, Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import ScreenSize from "@/components/screen-size";

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
  description: "Rejoignez la communauté des passionnés de moto à Madagascar ! Suivez les actualités, explorez les événements et trouvez la moto idéale avec JustRide.",
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
        
        <ScreenSize />
      </body>
    </html>
  );
}
