{/*
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Seconnecter from "@/components/seconnecter";
export default function Home() {
  return (
    <div className="p-1">
      <HeroSection/>
      <Seconnecter/>
      <Footer/> 
    </div>
  );
}
 */}
 import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Seconnecter from "@/components/seconnecter";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* Métadonnées SEO */}
      <Head>
        <title>Just Ride Madagascar - Cash Back</title>
        <meta
          name="description"
          content="Cash Back : Profitez de notre programme de cash back attractif, récompensant votre fidélité et vos achats chez Just Ride."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Just Ride Madagascar" />
        <meta property="og:title" content="Just Ride Madagascar - Cash Back" />
        <meta property="og:description" content="Cash Back : Profitez de notre programme de cash back attractif, récompensant votre fidélité et vos achats chez Just Ride." />
        <meta property="og:url" content="https://justride.mg/cashback" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://justride.mg/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Contenu de la page Cash Back */}
      <div className="p-1">
        <HeroSection />
        <Seconnecter />
        <Footer />
      </div>
    </>
  );
}
