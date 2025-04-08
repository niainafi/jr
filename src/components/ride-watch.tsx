"use client";
{/*import React from "react";

const RideWatch = () => {
  return (
    <section className="bg-white py-8 md:py-10 px-6 font-roboto w-full">
      <div className="max-w-8xl mx-auto ">
        {/* Titre avec plus d'espace en bas 
        <h2 className="text-3xl font-bold uppercase text-center mb-8 md:mb-10">Ride & Watch</h2>
                
        <div className="flex flex-col lg:flex-row items-stretch h-full sm:h-[950px] md:h-[990px] lg:h-[550px] xl:h-[490px] 2xl:h-[450px] overflow-hidden">


          {/* Vidéo YouTube - 60% de la largeur 
          <div className="lg:w-3/5 relative">
            <iframe
              className="w-full h-full aspect-video shadow-lg"
              src="https://www.youtube.com/embed/Fn60q0sDI_U"
              title="Just Ride Mada - Test Moto"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Texte de présentation - 40% de la largeur - Aligné à gauche 
          <div className="lg:w-2/5 bg-accent text-white p-6 flex flex-col justify-start items-start text-left shadow-lg pt-6 md:pt-10">
            <h3 className="text-2xl font-bold">Vivez la moto autrement !</h3>

            {/* ✅ Ligne sous le titre descendue 
            <div className="flex mt-3 md:mt-4">
              <hr className="border-white bg-white h-1 w-16 md:w-24" />
            </div>

            {/* ✅ Texte descendu 
            <p className="text-lg leading-relaxed mt-6 md:mt-10">
              {`Sur notre chaîne YouTube, on teste, analyse et met en scène les motos avec passion et expertise.`}<br />
              {`Test drives, unboxings, vidéos funs et instructives, tout y est pour allier plaisir et technicité.`}<br />
              {`Que vous soyez curieux ou passionné, embarquez avec nous et découvrez la moto sous un nouvel angle !`}
            </p>
            
            {/* ✅ Abonnement descendu 
            <p className="mt-6 md:mt-8 font-bold text-lg">
              {`Abonne-toi pour ne rien manquer :`} <br />
              {`tests, lancements, unboxings et toutes les nouveautés moto !`}
            </p>

            {/* ✅ Bouton "Voir toutes les vidéos" bien positionné en bas à droite 
            <div className="mt-auto w-full flex justify-end">
              <a 
                href="https://www.youtube.com/@justridemada" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-accent font-bold px-5 py-2 border border-white rounded-md hover:bg-gray-200 transition"
              >
                Voir toutes les vidéos →
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RideWatch;
*/}

import React, { useState, useEffect } from "react";

const RideWatch = () => {
  const [videoId, setVideoId] = useState<string | null>(null); // ID de la vidéo
  const [loading, setLoading] = useState<boolean>(true); // État de chargement
  const [error, setError] = useState<string | null>(null); // État d'erreur

  useEffect(() => {
    // On définit directement l'ID de la vidéo que vous avez fourni
    const latestVideoId = "X0EttXCTrKY";  // Remplacer par l'ID de votre vidéo

    // Vérification que l'ID de la vidéo est valide
    if (latestVideoId) {
      setVideoId(latestVideoId); // Mise à jour de l'état avec l'ID de la vidéo
      setLoading(false); // On arrête le chargement
    } else {
      setError("No video found.");
      setLoading(false);
    }
  }, []); // L'effet s'exécute une seule fois, lors du premier rendu

  return (
    <section className="bg-white py-8 md:py-10 px-6 font-roboto w-full">
      <div className="max-w-8xl mx-auto">
        {/* Titre avec plus d'espace en bas */}
        <h2 className="text-3xl font-bold uppercase text-center mb-8 md:mb-10">Ride & Watch</h2>

        <div className="flex flex-col lg:flex-row items-stretch h-full sm:h-[950px] md:h-[990px] lg:h-[550px] xl:h-[490px] 2xl:h-[450px] overflow-hidden">
          {/* Vidéo YouTube - 60% de la largeur */}
          <div className="lg:w-3/5 relative">
            {loading ? (
              <p>Loading video...</p> // Afficher un message pendant que la vidéo se charge
            ) : error ? (
              <p>{error}</p> // Afficher un message d'erreur si quelque chose va mal
            ) : videoId ? (
              <iframe
                className="w-full h-full aspect-video shadow-lg"
                src={`https://www.youtube.com/embed/${videoId}`} // Utilisation de l'ID de la vidéo
                title="Just Ride Mada - Test Moto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <p>No video available.</p> // Afficher un message si aucune vidéo n'est trouvée
            )}
          </div>

          {/* Texte de présentation - 40% de la largeur - Aligné à gauche */}
          <div className="lg:w-2/5 bg-accent text-white p-6 flex flex-col justify-start items-start text-left shadow-lg pt-6 md:pt-10">
            <h3 className="text-2xl font-bold">Vivez la moto autrement !</h3>

            {/* ✅ Ligne sous le titre descendue */}
            <div className="flex mt-3 md:mt-4">
              <hr className="border-white bg-white h-1 w-16 md:w-24" />
            </div>

            {/* ✅ Texte descendu */}
            <p className="text-lg leading-relaxed mt-6 md:mt-10">
              {`Sur notre chaîne YouTube, on teste, analyse et met en scène les motos avec passion et expertise.`}
              <br />
              {`Test drives, unboxings, vidéos funs et instructives, tout y est pour allier plaisir et technicité.`}
              <br />
              {`Que vous soyez curieux ou passionné, embarquez avec nous et découvrez la moto sous un nouvel angle !`}
            </p>

            {/* ✅ Abonnement descendu */}
            <p className="mt-6 md:mt-8 font-bold text-lg">
              {`Abonne-toi pour ne rien manquer :`} <br />
              {`tests, lancements, unboxings et toutes les nouveautés moto !`}
            </p>

            {/* ✅ Bouton "Voir toutes les vidéos" bien positionné en bas à droite */}
            <div className="mt-auto w-full flex justify-end">
              <a
                href="https://www.youtube.com/@justridemada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-accent font-bold px-5 py-2 border border-white rounded-md hover:bg-gray-200 transition"
              >
                Voir toutes les vidéos →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RideWatch;



{/*import React, { useState, useEffect } from "react";

const RideWatch = () => {
  const [videoId, setVideoId] = useState<string | null>(null); // ID de la vidéo
  const [loading, setLoading] = useState<boolean>(true); // État de chargement
  const [error, setError] = useState<string | null>(null); // État d'erreur

  useEffect(() => {
    const apiKey = "AIzaSyDG3amHbDjqXMfkcIFOV1QnQkjfklcnlyI"; // Votre clé API YouTube
    const channelId = "UCxxxxxxxxxxxxxxxxx"; // Remplacer par l'ID de votre chaîne YouTube

    // Fonction pour récupérer la vidéo la plus récente
    const fetchLatestVideo = async () => {
      try {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const latestVideoId = data.items[0].id.videoId;
          setVideoId(latestVideoId); // Mettre à jour l'ID de la vidéo
        } else {
          setError("No videos found.");
        }
      } catch (error) {
        console.error("Error fetching the latest video:", error);
        setError("An error occurred while fetching the latest video.");
      }
    };

    fetchLatestVideo(); // Appel initial pour récupérer la vidéo la plus récente

    // Mettre en place un intervalle pour récupérer la vidéo toutes les 60 secondes (ajustez selon vos besoins)
    const intervalId = setInterval(fetchLatestVideo, 60000); // 60000 ms = 1 minute

    // Nettoyer l'intervalle lors du démontage du composant pour éviter les fuites de mémoire
    return () => clearInterval(intervalId);
  }, []); // L'effet s'exécute une seule fois, au moment du montage du composant

  return (
    <section className="bg-white py-8 md:py-10 px-6 font-roboto w-full">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl font-bold uppercase text-center mb-8 md:mb-10">Ride & Watch</h2>

        <div className="flex flex-col lg:flex-row items-stretch h-full sm:h-[950px] md:h-[990px] lg:h-[550px] xl:h-[490px] 2xl:h-[450px] overflow-hidden">
          <div className="lg:w-3/5 relative">
            {loading ? (
              <p>Loading video...</p>
            ) : error ? (
              <p>{error}</p>
            ) : videoId ? (
              <iframe
                className="w-full h-full aspect-video shadow-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Just Ride Mada - Test Moto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <p>No video available.</p>
            )}
          </div>

          <div className="lg:w-2/5 bg-accent text-white p-6 flex flex-col justify-start items-start text-left shadow-lg pt-6 md:pt-10">
            <h3 className="text-2xl font-bold">Vivez la moto autrement !</h3>
            <div className="flex mt-3 md:mt-4">
              <hr className="border-white bg-white h-1 w-16 md:w-24" />
            </div>
            <p className="text-lg leading-relaxed mt-6 md:mt-10">
              Sur notre chaîne YouTube, on teste, analyse et met en scène les motos avec passion et expertise.
              Test drives, unboxings, vidéos funs et instructives, tout y est pour allier plaisir et technicité.
              Que vous soyez curieux ou passionné, embarquez avec nous et découvrez la moto sous un nouvel angle !
            </p>

            <p className="mt-6 md:mt-8 font-bold text-lg">
              Abonne-toi pour ne rien manquer : <br />
              tests, lancements, unboxings et toutes les nouveautés moto !
            </p>

            <div className="mt-auto w-full flex justify-end">
              <a
                href="https://www.youtube.com/@justridemada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-accent font-bold px-5 py-2 border border-white rounded-md hover:bg-gray-200 transition"
              >
                Voir toutes les vidéos →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RideWatch;
*/}
