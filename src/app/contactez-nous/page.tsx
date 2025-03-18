"use client"; // Ajouté pour forcer le mode Client Component ✅
{/*import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ContactForm from "@/components/contact-form";
export default function Home() {
  return (
    <div className="p-1">
      <HeroSection/>
      <ContactForm/>
      <Footer/> 
    </div>
  );
}
*/}


import dynamic from "next/dynamic";

// Charger tous les composants dynamiquement
const HeroSection = dynamic(() => import("@/components/hero-section"));
const ContactForm = dynamic(() => import("@/components/contact-form"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <div className="p-1">
      <HeroSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
