// import { api } from "@/lib/axios"
// import HeroSection from "@/components/hero-section"
// async function getActuDetails(id : string){
//     const res = await api.get(`/actus/${id}`)
//     return res
// }


// export default async function ActuReportageDetailPage({params}:{params : any}){
//     const { id } = await params
//     if(!id){
//         return <div>No data</div>
//     }
//     const actuDetail = await getActuDetails(id)
    
//     return (
//         <div>
//             <HeroSection/>

//             <div>{id}</div>
//         </div>
//     )
// }

import { api } from "@/lib/axios";
import HeroSection from "@/components/hero-section";

async function getActuDetails(id: string) {
    const res = await api.get(`/actus/${id}`);
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

            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">{actuDetail.title}</h1>

                <img 
                    src={actuDetail.imageUne} 
                    alt={actuDetail.title} 
                    className="w-full rounded-lg mb-4" 
                />

                <div className="prose" dangerouslySetInnerHTML={{ __html: actuDetail.description }} />
            </div>
        </>
    );
}
