"use client";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const socialMedias = [
  {
    name: "Facebook",
    icon: (
      <FaFacebook size={20} className="hover:text-gray-300 cursor-pointer" />
    ),
    url: "https://www.facebook.com/justrent.fr",
  },
  {
    name: "Instagram",
    icon: (
      <FaInstagram size={20} className="hover:text-gray-300 cursor-pointer" />
    ),
    url: "https://www.instagram.com/justrent.fr/",
  },
  {
    name: "LinkedIn",
    icon: (
      <FaLinkedin size={20} className="hover:text-gray-300 cursor-pointer" />
    ),
    url: "https://www.linkedin.com/company/justrent-fr/",
  },
  {
    name: "YouTube",
    icon: (
      <FaYoutube size={20} className="hover:text-gray-300 cursor-pointer" />
    ),
    url: "https://www.youtube.com/@justrent.fr",
  },
];
export default function Footer() {
  return (
    <footer className="bg-accent text-black py-6 sm:py-8">
      <div className="mx-auto max-w-8xl w-full">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-10 items-start lg:items-center justify-between gap-10 md:gap-8 ml-5 sm:ml-10">
          {/* Colonne gauche */}
          <ul className="flex flex-col font-sans text-base font-normal footer-list ml-10 lg:ml-0 w-full">
            <li className="hover:text-gray-700 cursor-pointer">Actualités</li>
            <li className="hover:text-gray-700 cursor-pointer">Événements</li>
            <li className="hover:text-gray-700 cursor-pointer">Boutique</li>
          </ul>

          {/* Colonne centrale */}
          <ul className="flex flex-col font-sans text-base font-normal footer-list w-full">
            <li className="hover:text-gray-700 cursor-pointer">Just Rent</li>
            <li className="hover:text-gray-700 cursor-pointer">Membre</li>
            <li className="hover:text-gray-700 cursor-pointer">Contact</li>
          </ul>

          {/* Réseaux sociaux */}
          <div className="col-span-2 lg:col-span-2 w-full">
            <SocialMedia />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start text-left space-y-2 col-span-2 lg:col-span-3 w-full">
            <p className="text-xl font-medium whitespace-break-spaces sm:whitespace-nowrap">
              032 93 867 87 - justrentus@gmail.com
            </p>
            <p className="text-xl font-medium whitespace-break-spaces sm:whitespace-nowrap">
              032 93 867 87 - justrideus@gmail.com
            </p>
            <p className="text-xs whitespace-break-spaces sm:whitespace-nowrap">
              Immeuble Corona Plaza, Andranomena, Antananarivo, Madagascar
            </p>
          </div>

          {/* Section droite : Suivez-nous & Pub */}
          <aside className="flex flex-col items-start  col-span-2 lg:col-span-2 w-full">
            <div className="flex flex-col lg:items-end">
              <h2 className="text-xl">
                <span className="font-bold">SUIVEZ</span>-<span>NOUS</span>
              </h2>
              <PubFooter />
              <p className="text-xs text-black">
                © Copyright JustRide {new Date().getFullYear()}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </footer>
  );
}

function SocialMedia() {
  return (
    <ul className="flex space-x-3">
      {socialMedias.map((socialMedia) => (
        <SocialMediaItem key={socialMedia.name}>
          <a href={socialMedia.url} target="_blank" rel="noopener noreferrer">
            {socialMedia.icon}
          </a>
        </SocialMediaItem>
      ))}
    </ul>
  );
}

function SocialMediaItem({ children }: { children: React.ReactNode }) {
  return <li className="h-10 w-10 border border-black rounded-full flex items-center justify-center">{children}</li>;
}

function PubFooter(){
  return(
    <div>
      <div className="relative  h-[170px]">
      <a href="https://www.facebook.com/profile.php?id=61558253842790" target="_blank" rel="noopener noreferrer">
          <div className="rounded-3xl w-[260px] h-[120px] overflow-hidden">
            <Image
              src="/images/pub/pub-footer.webp"
              alt="Pub Footer"
              width={300}
              height={60}
              objectFit="cover"
              loading="lazy"
              className="object-cover"
            />
          </div>
        </a>
        <div className="absolute left-5 bottom-[10%] border-accent border-4 rounded-full w-[80px] h-[80px] overflow-hidden">
          <Image
            src="/images/pub/pub-footer-1.webp"
            alt="Pub Footer"
            width={80}
            height={80}
            objectFit="cover"
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}