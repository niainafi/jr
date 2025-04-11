import ActualitesReportages from "@/components/ActualitesReportages";
import Boutiques from "@/components/boutiques";
import Focus from "@/components/focus";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Logos from "@/components/logos-partner";
import ContactForm from "@/components/contact-form";
import Occasion from "@/components/occasion";

import PubActu from "@/components/pub-actu";
import PubActuToo from "@/components/pub-actu-too";
import ReforestinEvent from "@/components/reforestin";
import BoutiqueContainer from "@/components/boutique-container";
import JustRideAcademy from "@/components/just-ride-academy";
import JustRent from "@/components/just-rent";
import RideWatch from "@/components/ride-watch";
import TroisPub from "@/components/trois-pub";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* Métadonnées SEO */}
      <Head>
        <title>Just Ride Madagascar</title>
        <meta
          name="description"
          content="Just Ride Madagascar : Passionnés de moto, on vous équipe ! Vente d'accessoires haut de gamme : Bell, RST, Quad Lock, Fly Racing et bien d'autres. Location de moto avec Just Rent. Cours de conduite pour tous niveaux avec la Just Ride Academy. Motos d'occasion et dépôts-vente. Rejoignez-nous pour des sorties excitantes et restez à l'affût de l'actualité de moto locale et internationale."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Just Ride Madagascar" />
        <meta property="og:title" content="Just Ride Madagascar" />
        <meta property="og:description" content="Just Ride Madagascar : Passionnés de moto, on vous équipe ! Vente d'accessoires haut de gamme : Bell, RST, Quad Lock, Fly Racing et bien d'autres. Location de moto avec Just Rent. Cours de conduite pour tous niveaux avec la Just Ride Academy. Motos d'occasion et dépôts-vente. Rejoignez-nous pour des sorties excitantes et restez à l'affût de l'actualité de moto locale et internationale." />
        <meta property="og:url" content="https://justride.mg" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://justride.mg/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Contenu de la page d'accueil */}
      <div className="p-1">
        <HeroSection />
        <Focus />
        <ActualitesReportages />
        <ReforestinEvent />
        <PubActu />
        <BoutiqueContainer />
        <TroisPub />
        <JustRideAcademy />
        <JustRent />
        <RideWatch />
        {/* <Boutiques /> */}
        {/* <Logos /> */}
        {/* <Occasion /> */}
        {/* <PubActuToo /> */}
        {/* <Nextripe /> */}
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
