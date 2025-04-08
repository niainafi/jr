"use client"; 

{/*
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
*/}
import dynamic from "next/dynamic";
import Head from "next/head";

// Charger tous les composants dynamiquement
const HeroSection = dynamic(() => import("@/components/hero-section"));
const ContactForm = dynamic(() => import("@/components/contact-form"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <>
      {/* Métadonnées SEO */}
      <Head>
        <title>Just Ride Madagascar - Contact</title>
        <meta
          name="description"
          content="Contact : Contactez-nous pour toute information ou demande, notre équipe est à votre écoute pour vous accompagner."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Just Ride Madagascar" />
        <meta property="og:title" content="Just Ride Madagascar - Contact" />
        <meta property="og:description" content="Contact : Contactez-nous pour toute information ou demande, notre équipe est à votre écoute pour vous accompagner." />
        <meta property="og:url" content="https://justride.mg/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://justride.mg/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Contenu de la page Contact */}
      <div className="p-1">
        <HeroSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
