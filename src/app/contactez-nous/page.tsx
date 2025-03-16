import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ContactForm from "@/components/contact-form";
export default function Home() {
  return (
    <div className="p-1">
      <HeroSection/>
      <ContactForm/>
      <Footer/> 
    </div>
  );
}
