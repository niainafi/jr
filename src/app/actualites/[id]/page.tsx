{/*

import { api } from "@/lib/axios";
import HeroSection from "@/components/hero-section";
import  Footer from "@/components/footer";
async function getActuDetails(id: string) {
    const res = await api.get(`https://justride.up.railway.app/api/actus/${id}`);
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
*/}
import { api } from "@/lib/axios";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import Image from "next/image";

async function getActuDetails(id: string) {
    const res = await api.get(`https://justride.up.railway.app/api/actus/${id}`);
    return res.data;
}

export default async function ActuReportageDetailPage({ params }: { params: any }) {
    const { id } = params;
    if (!id) {
        return <div className="text-center text-gray-500 mt-10">Aucune donnée disponible</div>;
    }

    const actuDetail = await getActuDetails(id);

    return (
        <>
            <HeroSection />

            {/* 📌 Conteneur principal : Article à droite - Pub fixe à gauche */}
            <div className="max-w-7xl mx-auto my-12 px-6 flex">
                
                {/* ✅ Pub FIXE toujours visible à gauche */}
                <div className="hidden lg:block w-[600px] fixed left-6 top-20">
                    <Image 
                        src="/images/pub/photo.webp" 
                        alt="Publicité" 
                        width={500} 
                        height={700} 
                        className="w-full rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* ✅ Détails de l'article (avec un espace pour éviter l'overlap de la pub) */}
                <div className="w-full lg:ml-[380px]"> 
                    <h1 className="text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
                        {actuDetail.title}
                    </h1>

                    {/* ✅ Image principale */}
                    <Image 
                        src={actuDetail.imageUne} 
                        alt={actuDetail.title} 
                        width={900} 
                        height={500} 
                        className="w-full rounded-lg shadow-xl object-cover mb-6"
                    />

                    {/* ✅ Contenu de l’article */}
                    <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: actuDetail.description }} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

