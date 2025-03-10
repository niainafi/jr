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