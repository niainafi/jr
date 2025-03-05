import ActualitesReportages from "@/components/ActualitesReportages";
import Boutiques from "@/components/boutiques";
import Focus from "@/components/focus";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Logos from "@/components/logos-partner";
import ContactForm from "@/components/contact-form";
import Occasion from "@/components/occasion";
import Nextripe from "@/components/nextripe";
export default function Home() {
  return (
    <div className="p-1">
      <HeroSection/>
      <Focus/>
      <ActualitesReportages />
      <Boutiques />
      <Logos/> 
      <Occasion/>
      <Nextripe/>
      <ContactForm/>
      <Footer/> 
    </div>
  );
}
