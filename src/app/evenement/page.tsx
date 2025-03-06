import Footer from "@/components/footer";
import HeroSectionEvent from "@/components/hero-section-event";
import OccasionEvent from "@/components/occasion-event";
import ReforestinEvent from "@/components/reforestin";
export default function Home() {
  return (
    <div className="p-1">
      <HeroSectionEvent/>
      <ReforestinEvent/>
      <OccasionEvent/>
      <Footer/> 
    </div>
  );
}