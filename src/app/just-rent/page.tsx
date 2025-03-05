import Footer from "@/components/footer";
import HeroSectionjr from "@/components/hero-section-jr";
import ContactFormjr from "@/components/contact-form-jr";
import Nextripe from "@/components/nextripe";
import { MotoCarousel } from "./carousel-moto";
import Logojustrent from "@/components/logo-just-rent";
import AvisConditions from "@/components/avis-caroussel";
;
export default function Home() {
  return (
    <div className="p-1">
      <HeroSectionjr/>
      <Logojustrent/>
      <MotoCarousel/>
      <AvisConditions/>
     
      <ContactFormjr/>
      <Nextripe/>
      <Footer/> 
    </div>
  );
}
