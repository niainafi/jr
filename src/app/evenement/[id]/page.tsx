
import { api } from "@/lib/axios";
import HeroSection from "@/components/hero-section";
import  Footer from "@/components/footer";
async function getActuDetails(id: string) {
    const res = await api.get(`https://justride.up.railway.app/api/event/${id}`);
    return res.data; // Récupérer uniquement les données de l'API
}

export default async function ActuReportageDetailPage({ params }: { params: any }) {
    const { id } = params;
    if (!id) {
        return <div>No data</div>;
    }

    const actuDetail = await getActuDetails(id);

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


