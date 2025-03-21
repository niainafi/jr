import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FocusDetailPantalon from "@/components/focus-detail-pantalon";
export default function Home() {
  return (
    <div className="p-1">
        <HeroSection/>
        <FocusDetailPantalon/>
        <Footer/> 
    </div>
  );
}
