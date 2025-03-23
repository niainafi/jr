
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FocusDetailCasque from "@/components/focus-detail-casque";
import FocusDetailVeste from "@/components/focus-detail-veste";
export default function Home() {
  return (
    <div className="p-1">
        <HeroSection/>
        <FocusDetailVeste/>
        <Footer/> 
    </div>
  );
}
