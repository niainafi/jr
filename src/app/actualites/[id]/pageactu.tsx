

import { api } from "@/lib/axios";
import HeroSectionactu from "@/components/hero-sectio-actu";
import Footer from "@/components/footer";

async function getActuDetails(id: string) {
    try {
        const res = await api.get(`https://justride.up.railway.app/api/actus/${id}`);
        return res.data; // Retourne uniquement les données
    } catch (error) {
        console.error("Erreur lors du chargement des détails :", error);
        return null; // Retourne null en cas d'erreur
    }
}

export default async function ActuReportageDetailPageToo({ params }: { params: { id: string } }) {
    const { id } = params;
    if (!id) {
        return <div className="text-center text-red-500 my-10">Donnée introuvable</div>;
    }

    const actuDetail = await getActuDetails(id);

    if (!actuDetail) {
        return <div className="text-center text-red-500 my-10">Erreur lors du chargement de l'actualité</div>;
    }

    return (
        <>
            <HeroSectionactu />
            <div className="max-w-2xl mx-auto my-10 px-4">
                <h1 className="text-2xl font-bold mb-4 mt-10">{actuDetail.title}</h1>

                {actuDetail.imageUne && (
                    <img 
                        src={actuDetail.imageUne} 
                        alt={actuDetail.title} 
                        className="w-full rounded-lg mb-4" 
                    />
                )}

                <div className="prose" dangerouslySetInnerHTML={{ __html: actuDetail.description }} />
            </div>
            <Footer />
        </>
    );
}
