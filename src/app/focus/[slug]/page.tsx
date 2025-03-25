import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FocusDetailBlouson from "@/components/focus-detail-blouson";
import { dataFocus } from "@/data/data-focus";
import FocusDetailComponents from "@/components/focus-detail-components";
import { Metadata, ResolvingMetadata } from "next";
type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const { slug } = await params
   
    const focus = dataFocus.find((focus) => focus.slug === slug);
    // optionally access and extend (rather than replace) parent metadata
    
   
    return {
      title: (focus?.title ? focus?.title  : "Details focus" ),
      openGraph: {
        images: [
            {
                url: focus?.pictures[0].src || "",
            }
        ],
      },
    }
  }

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
