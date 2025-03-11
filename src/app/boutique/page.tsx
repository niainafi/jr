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
      {/* <CasqueBoutique/>*/}
      <CarouselCasque/>
      <Footer/> 
    </div>
  );
}