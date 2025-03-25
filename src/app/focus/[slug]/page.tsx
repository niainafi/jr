import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FocusDetailBlouson from "@/components/focus-detail-blouson";
import { dataFocus } from "@/data/data-focus";
import FocusDetailComponents from "@/components/focus-detail-components";
export default function FocusDetailPage({ params }: { params: any}) {
const {slug} = params;
  const focus = dataFocus.find((focus) => focus.slug === slug);
  if (!focus) {
    return <div>Focus non trouvé</div>;
  }
  return (
    <div className="p-1">
      <HeroSection />
      <FocusDetailComponents focus={focus} />
      <Footer />
    </div>
  );
}
