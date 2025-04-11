{/*import Footer from "@/components/footer";
import HeroSectionjr from "@/components/hero-section-jr";
import ContactFormjr from "@/components/contact-form-jr";
 {/*import Nextripe from "@/components/nextripe";
import Logojustrent from "@/components/logo-just-rent";
import AvisConditions from "@/components/avis-caroussel";
import { MotoCarousel } from "@/components/carousel-moto/carousel-moto";
import EnTouteLiberte from "@/components/en-toute-liberte";
;
export default function JustRentPage() {
  return (
    <div>
      <HeroSectionjr/>
      <Logojustrent/>
      <MotoCarousel/>
      <AvisConditions/>
      <ContactFormjr/>
      <EnTouteLiberte />
      {/*<Nextripe/>
       {/*<Nextripe/>
      <Footer/> 
    </div>
  );
}
*/}

import Footer from "@/components/footer";
import HeroSectionjr from "@/components/hero-section-jr";
import ContactFormjr from "@/components/contact-form-jr";
// import Nextripe from "@/components/nextripe";
import Logojustrent from "@/components/logo-just-rent";
import AvisConditions from "@/components/avis-caroussel";
import { MotoCarousel } from "@/components/carousel-moto/carousel-moto";
import EnTouteLiberte from "@/components/en-toute-liberte";
import Head from 'next/head';

export default function JustRentPage() {
  return (
    <>
      {/* Métadonnées SEO 
      <Head>
        <title>Just Ride Madagascar - Just Rent</title>
        <meta
          name="description"
          content="Just Rent : Louez des motos Royal Enfield à Madagascar avec Just Rent, pour des aventures inoubliables sur les routes malgaches."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Just Ride Madagascar" />
        <meta property="og:title" content="Just Ride Madagascar - Just Rent" />
        <meta property="og:description" content="Just Rent : Louez des motos Royal Enfield à Madagascar avec Just Rent, pour des aventures inoubliables sur les routes malgaches." />
        <meta property="og:url" content="https://justride.mg/just-rent" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://justride.mg/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
*/}
      {/* Contenu de la page Just Rent */}
      <div>
        <HeroSectionjr />
        <Logojustrent />
        <MotoCarousel />
        <ContactFormjr />
        <AvisConditions />
        <EnTouteLiberte />
        {/* <Nextripe /> */}
        <Footer />
      </div>
    </>
  );
}

