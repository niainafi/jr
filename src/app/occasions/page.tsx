{/*
import Footer from "@/components/footer";
import HeroSectionOcas from "@/components/hero-section-ocas";
import OccasionVrai from "@/components/occasion-vrai";
export default function Home() {
  return (
    <div className="p-1">
      <HeroSectionOcas/>
      <OccasionVrai/>
      <Footer/> 
    </div>
  );
}
  */}
  import Footer from "@/components/footer";
import HeroSectionOcas from "@/components/hero-section-ocas";
import OccasionVrai from "@/components/occasion-vrai";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* Métadonnées SEO */}
      <Head>
        <title>Just Ride Madagascar - Occasions</title>
        <meta
          name="description"
          content="Occasions : Consultez nos offres de motos d'occasion soigneusement sélectionnées, alliant fiabilité et performance."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Just Ride Madagascar" />
        <meta property="og:title" content="Just Ride Madagascar - Occasions" />
        <meta property="og:description" content="Occasions : Consultez nos offres de motos d'occasion soigneusement sélectionnées, alliant fiabilité et performance." />
        <meta property="og:url" content="https://justride.mg/occasions" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://justride.mg/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Contenu de la page Occasions */}
      <div className="p-1">
        <HeroSectionOcas />
        <OccasionVrai />
        <Footer /> 
      </div>
    </>
  );
}
