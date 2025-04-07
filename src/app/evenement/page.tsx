
import Footer from "@/components/footer";
import HeroSectionEvent from "@/components/hero-section-event";
import OccasionEvent from "@/components/occasion-event";
import ReforestinEventVrai from "@/components/reforestin-vrai";
export default function EventPage() {
  return (
    <div className="p-1">
      <HeroSectionEvent/>
      <ReforestinEventVrai/>
      <OccasionEvent/>
      <Footer/> 
    </div>
  );
}

 