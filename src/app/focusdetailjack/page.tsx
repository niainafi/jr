
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FocusDetailJack from "@/components/focus-detail-jack";
export default function Home() {
  return (
    <div className="p-1">
        <HeroSection/>
        <FocusDetailJack/>
        <Footer/> 
    </div>
  );
}