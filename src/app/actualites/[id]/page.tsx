

    import { api } from "@/lib/axios";
    import HeroSection from "@/components/hero-section";
    import Footer from "@/components/footer";
    import Image from "next/image";
    import { Metadata, ResolvingMetadata } from "next";
    import { cache, Suspense } from "react";
import PubActuDetails from "@/components/pub-actu-details";
    
    
    type Props = {
        params: Promise<{ id: string }>
        searchParams: Promise<{ [key: string]: string | string[] | undefined }>
    }
   

    
    
    const getActuDetails = cache(async (id: string) => {
        const res = await api.get(`https://justride.up.railway.app/api/actus/${id}`);
        return res.data;
    })
    const getPubImages = async () => {
      try {
        const res = await api.get(
          "https://justride.up.railway.app/api/publicite-actus"
        );
        console.log(res);
        return res.data || [];
      } catch (error) {
        console.error("Erreur pubs:", error);
        return [];
      }
    };
    export async function generateMetadata(
        { params, searchParams }: Props,
        parent: ResolvingMetadata
    ): Promise<Metadata> {
        const { id } = await params;
        const actuDetail = await getActuDetails(id);
    
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
    
    export default async function ActuReportageDetailPage({ params }: Props) {
        const { id } = await params;
        if (!id) {
            // Si l'ID est introuvable, afficher un message d'erreur.
            return <div className="text-center text-gray-500 mt-10">Aucune donnée disponible</div>;
        }
        
        // Récupérer les détails de l'article en fonction de l'ID
        const actuDetail = await getActuDetails(id);
      
        if(!actuDetail){
            return(
                <div>{`Une erreur s'est produit`}</div>
            )
        }
    
        return (
            <>
                <HeroSection />
    
                {/* Conteneur principal de l'article avec une mise en page flexible */}
                <div className="max-w-7xl mx-auto my-12 px-6 flex flex-col xl:flex-row xl:items-start items-center relative">
                    
                    {/* Contenu principal de l'article */}
                    <div className="w-full md:w-[80%] lg:w-[70%] lg:mr-[40px] mb-6 lg:mb-0">
                        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
                            {actuDetail.title}
                        </h1>
    
                        {/* Image principale de l'article */}
                        <Image
                            src={actuDetail.imageUne}
                            alt={actuDetail.title}
                            width={900}
                            height={500}
                            className="w-full rounded-lg shadow-xl object-cover mb-6"
                            style={{ objectFit: 'cover' }} // Maintien l'aspect sans déformation
                        />
    
                        {/* Description de l'article avec contenu HTML */}
                        <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
                            <div dangerouslySetInnerHTML={{ __html: actuDetail.description }} />
                        </div>
    
                        {/* Auteur de l'article */}
                        <p className="mt-6 text-black text-lg font-semibold">Écrit par : {actuDetail.auteur || "T. BERADO"}</p>
                    </div>
    {/* Pubs */}
                    <Suspense fallback={<div>Loading...</div>}>
                    <PubActuDetails />
                    </Suspense>
    
                </div>
    
                {/* Footer de la page */}
                <Footer />
            </>
        );
    }
    

//     import { api } from "@/lib/axios";
// import HeroSection from "@/components/hero-section";
// import Footer from "@/components/footer";
// import Image from "next/image";
// import { Metadata, ResolvingMetadata } from "next";
// import { cache } from "react";

// // Configuration pour les images externes
// // const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
// //   return `${src}?w=${width}&q=${quality || 75}`;
// // };

// type Props = {
//   params: { id: string };
// };

// type PubType = {
//   _id: string;
//   image: string;
//   position: string;
//   __v: number;
// };

// const getActuDetails = cache(async (id: string) => {
//   const res = await api.get(`https://justride.up.railway.app/api/actus/${id}`);
//   return res.data;
// });

// const getPubImages = cache(async (): Promise<PubType[]> => {
//   try {
//     const res = await api.get('https://justride.up.railway.app/api/publicite-actus');
//     return res.data || [];
//   } catch (error) {
//     console.error("Erreur pubs:", error);
//     return [];
//   }
// });

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const actuDetail = await getActuDetails(params.id);
//   return {
//     title: actuDetail.title,
//     openGraph: {
//       images: [{ url: actuDetail.imageUne }],
//     },
//   };
// }

// export default async function ActuReportageDetailPage({ params }: Props) {
//   const [actuDetail, pubs] = await Promise.all([
//     getActuDetails(params.id),
//     getPubImages()
//   ]);

//   if (!actuDetail) {
//     return <div className="text-center text-red-500 mt-10">Article introuvable</div>;
//   }

//   const pub = pubs[0];

//   return (
//     <>
//       <HeroSection />

//       <div className="max-w-7xl mx-auto my-12 px-6 flex flex-col xl:flex-row xl:items-start items-center relative">
        
//         <div className="w-full md:w-[80%] lg:w-[70%] lg:mr-[40px] mb-6 lg:mb-0">
//           <h1 className="text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
//             {actuDetail.title}
//           </h1>

//           {/* Image principale sans optimisation Next.js */}
//           <img
//             src={actuDetail.imageUne}
//             alt={actuDetail.title}
//             className="w-full rounded-lg shadow-xl object-cover mb-6"
//             loading="lazy"
//           />

//           <div 
//             className="prose max-w-none text-gray-700 text-lg leading-relaxed"
//             dangerouslySetInnerHTML={{ __html: actuDetail.description }} 
//           />

//           <p className="mt-6 text-black text-lg font-semibold">
//             Écrit par : {actuDetail.auteur || "T. BERADO"}
//           </p>
//         </div>

//         {pub?.image && (
//           <>
//             <div className="hidden xl:block w-[30%] sticky top-0 bottom-0">
//               {/* Image de pub sans optimisation Next.js */}
//               <img
//                 src={pub.image}
//                 alt="Publicité"
//                 className="w-full rounded-lg shadow-lg object-cover"
//                 loading="lazy"
//               />
//             </div>

//             <div className="xl:hidden block w-[70%] mt-6">
//               <img
//                 src={pub.image}
//                 alt="Publicité"
//                 className="w-full rounded-lg shadow-lg h-[300px] object-cover"
//                 loading="lazy"
//               />
//             </div>
//           </>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// }