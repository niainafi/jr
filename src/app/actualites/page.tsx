import Footer from "@/components/footer";
import OccasionActu from "@/components/occasion-actu";
import HeroSectionactu from "@/components/hero-sectio-actu";
export default function Home() {
  return (
    <div className="p-1">
      <HeroSectionactu/>
      <OccasionActu/>
      <Footer/> 
    </div>
  );
}
