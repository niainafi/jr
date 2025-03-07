import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ContactUs from "@/components/contact-us";
export default function Home() {
  return (
    <div className="p-1">
      <HeroSection/>
      <ContactUs/>
      <Footer/> 
    </div>
  );
}
