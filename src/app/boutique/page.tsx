{/*

import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LogoBoutiquePartener from "@/components/logo-boutique-partener";
import MenuPtiBoutique from "../evenement/menuptiboutique";
//import CasqueBoutique from "../evenement/casque-boutique";
import CarouselCasque from "../evenement/carousel-casque";
export default function Home() {
  return (
    <div className="p-1">
      <HeroSection/>
      <LogoBoutiquePartener/> 
      <MenuPtiBoutique/>
      {/* <CasqueBoutique/>
      <CarouselCasque/>
      <Footer/> 
    </div>
  );
}
  */}

import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LogoBoutiquePartener from "@/components/logo-boutique-partener";
import MenuPtiBoutique from "../evenement/menuptiboutique";
//import CasqueBoutique from "../evenement/casque-boutique";
import CarouselCasque from "../evenement/carousel-casque";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* Métadonnées SEO */}
      <Head>
        <title>Just Ride Madagascar - Boutique</title>
        <meta
          name="description"
          content="Boutique : Explorez notre boutique en ligne pour trouver des équipements et accessoires moto de qualité, adaptés à tous les styles."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Just Ride Madagascar" />
        <meta property="og:title" content="Just Ride Madagascar - Boutique" />
        <meta property="og:description" content="Boutique : Explorez notre boutique en ligne pour trouver des équipements et accessoires moto de qualité, adaptés à tous les styles." />
        <meta property="og:url" content="https://justride.mg/boutique" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://justride.mg/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Contenu de la page Boutique */}
      <div className="p-1">
        <HeroSection />
        <LogoBoutiquePartener /> 
        <MenuPtiBoutique />
        {/* <CasqueBoutique /> */}
        <CarouselCasque />
        <Footer /> 
      </div>
    </>
  );
}
