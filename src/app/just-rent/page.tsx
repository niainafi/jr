import Footer from "@/components/footer";
import HeroSectionjr from "@/components/hero-section-jr";
import ContactFormjr from "@/components/contact-form-jr";
import Nextripe from "@/components/nextripe";
import Logojustrent from "@/components/logo-just-rent";
import AvisConditions from "@/components/avis-caroussel";
import { MotoCarousel } from "@/components/carousel-moto";
;
export default function JustRentPage() {
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
