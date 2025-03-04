import Footer from "@/components/footer";
import HeroSectionjr from "@/components/hero-section-jr";
import ContactFormjr from "@/components/contact-form-jr";
import Nextripe from "@/components/nextripe";
import { CarouselDApiDemo } from "./carousel-moto";
export default function Home() {
  return (
    <div className="p-1">
      <HeroSectionjr/>
      <CarouselDApiDemo />
      <ContactFormjr/>
      <Nextripe/>
      <Footer/> 
    </div>
  );
}
