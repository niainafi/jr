
import { api } from "@/lib/axios";
import HeroSection from "@/components/hero-section";
import  Footer from "@/components/footer";
import { Metadata, ResolvingMetadata } from "next";
import { cache } from "react";

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}  

const getEvenementDetails = cache(async (id: string) => {
    const res = await api.get(`https://justride.up.railway.app/api/event/${id}`);
    return res.data; // Récupérer uniquement les données de l'API
})

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const { id } = await params
   
    const actuDetail = await getEvenementDetails(id);
    
    // optionally access and extend (rather than replace) parent metadata
    
   
    return {
      title: actuDetail.title,
      openGraph: {
        images: [
            {
                url: actuDetail.imageUne,
            }
        ],
      },
    }
  }

export default async function EventDetailPage({ params }: { params: any }) {
    const { id } = await params;
    if (!id) {
        return <div>No data</div>;
    }

    const actuDetail = await getEvenementDetails(id);

    return (
        <>
            <HeroSection />

            <div className="max-w-2xl mx-auto my-10 px-4">
                <h1 className="text-2xl font-bold mb-4 mt-10 whitespace-nowrap">{actuDetail.title}</h1>

                <img 
                    src={actuDetail.imageUne} 
                    alt={actuDetail.title} 
                    className="w-full rounded-lg mb-4" 
                />

                <div className="prose" dangerouslySetInnerHTML={{ __html: actuDetail.description }} />
                
            </div>
            <Footer/>
        </>
    );
}


 