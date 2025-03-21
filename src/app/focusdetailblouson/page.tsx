import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FocusDetailBlouson from "@/components/focus-detail-blouson";
export default function Home() {
  return (
    <div className="p-1">
        <HeroSection/>
        <FocusDetailBlouson/>
        <Footer/> 
    </div>
  );
}
