{/* 
import Footer from "@/components/footer";
import HeroSectionEvent from "@/components/hero-section-event";
import OccasionEvent from "@/components/occasion-event";
import ReforestinEventVrai from "@/components/reforestin-vrai";
export default function EventPage() {
  return (
    <div className="p-1">
      <HeroSectionEvent/>
      <ReforestinEventVrai/>
      <OccasionEvent/>
      <Footer/> 
    </div>
  );
}
 */}
 import Footer from "@/components/footer";
import HeroSectionEvent from "@/components/hero-section-event";
import OccasionEvent from "@/components/occasion-event";
import ReforestinEventVrai from "@/components/reforestin-vrai";
import Head from 'next/head';

export default function EventPage() {
  return (
    <>
      {/* Métadonnées SEO pour la page des événements */}
      <Head>
        <title>Just Ride Madagascar - Événements</title>
        <meta
          name="description"
          content="Événements : Découvrez nos événements moto exclusifs, des rassemblements aux sorties organisées, pour vivre pleinement votre passion."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Just Ride Madagascar" />
        <meta property="og:title" content="Just Ride Madagascar - Événements" />
        <meta property="og:description" content="Événements : Découvrez nos événements moto exclusifs, des rassemblements aux sorties organisées, pour vivre pleinement votre passion." />
        <meta property="og:url" content="https://justride.mg" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://justride.mg/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Contenu de la page des événements */}
      <div className="p-1">
        <HeroSectionEvent />
        <h2>Événements</h2>
        <p>Découvrez nos événements moto exclusifs, des rassemblements aux sorties organisées, pour vivre pleinement votre passion.</p>
        <ReforestinEventVrai />
        <OccasionEvent />
        <Footer />
      </div>
    </>
  );
}
