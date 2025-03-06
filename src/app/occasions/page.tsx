import Footer from "@/components/footer";
import HeroSectionOcas from "@/components/hero-section-ocas";
import Occasion from "@/components/occasion";
export default function Home() {
  return (
    <div className="p-1">
      <HeroSectionOcas/>
      <Occasion/>
      <Footer/> 
    </div>
  );
}