 {/*
import Footer from "@/components/footer";
import OccasionActu from "@/components/occasion-actu";
import HeroSectionactu from "@/components/hero-sectio-actu";
export default function Home() {
  return (
    <div className="p-1">
      <HeroSectionactu/>
      <OccasionActu/>
      <Footer/> 
    </div>
  );
}
     
*/}
import Footer from "@/components/footer";
import OccasionActu from "@/components/occasion-actu";
import HeroSectionactu from "@/components/hero-sectio-actu";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* Métadonnées SEO */}
      <Head>
        <title>Just Ride Madagascar - Actualités</title>
        <meta
          name="description"
          content="Actualités : Restez informé des dernières actualités moto Internationale et à Madagascar, des nouveautés produits aux événements à venir."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Just Ride Madagascar" />
        <meta property="og:title" content="Just Ride Madagascar - Actualités" />
        <meta property="og:description" content="Actualités : Restez informé des dernières actualités moto Internationale et à Madagascar, des nouveautés produits aux événements à venir." />
        <meta property="og:url" content="https://justride.mg" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://justride.mg/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Contenu de la page d'actualités */}
      <div className="p-1">
        <HeroSectionactu />
        <OccasionActu />
        <Footer />
      </div>
    </>
  );
}



