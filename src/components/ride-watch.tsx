"use client";
import React from "react";

const RideWatch = () => {
  const videoId = "X0EttXCTrKY"; // ID de la vidéo fixée manuellement

  return (
    <section className="bg-white py-8 md:py-10 px-6 font-roboto w-full">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl font-bold uppercase text-center mb-8 md:mb-10">Ride & Watch</h2>

        <div className="flex flex-col lg:flex-row items-stretch h-full sm:h-[950px] md:h-[990px] lg:h-[550px] xl:h-[490px] 2xl:h-[450px] overflow-hidden">
          <div className="lg:w-3/5 relative">
            <iframe
              className="w-full h-full aspect-video shadow-lg"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Just Ride Mada - Test Moto"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="lg:w-2/5 bg-accent text-white p-6 flex flex-col justify-start items-start text-left shadow-lg pt-6 md:pt-10">
            <h3 className="text-2xl font-bold">Vivez la moto autrement !</h3>
            <div className="flex mt-3 md:mt-4">
              <hr className="border-white bg-white h-1 w-16 md:w-24" />
            </div>
            <p className="text-lg leading-relaxed mt-6 md:mt-10">
              {`Sur notre chaîne YouTube, on teste, analyse et met en scène les motos avec passion et expertise.`}
              <br />
              {`Test drives, unboxings, vidéos funs et instructives, tout y est pour allier plaisir et technicité.`}
              <br />
              {`Que vous soyez curieux ou passionné, embarquez avec nous et découvrez la moto sous un nouvel angle !`}
            </p>
            <p className="mt-6 md:mt-8 font-bold text-lg">
              {`Abonne-toi pour ne rien manquer :`} <br />
              {`tests, lancements, unboxings et toutes les nouveautés moto !`}
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
