// import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-accent text-white py-6 sm:py-8">
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 sm:gap-0 px-4">
//         {/* Colonne gauche */}
//         <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 sm:items-start">
//           <div className="flex flex-col space-y-2 font-sans text-base font-normal text-white">
//             <p className="hover:text-gray-200 cursor-pointer">Actualités</p>
//             <p className="hover:text-gray-200 cursor-pointer">Événements</p>
//             <p className="hover:text-gray-200 cursor-pointer">Boutique</p>
//           </div>

//           {/* Colonne centrale */}
//           <div className="flex flex-col space-y-2 font-sans text-base font-normal text-white">
//             <p className="hover:text-gray-200 cursor-pointer">Just Rent</p>
//             <p className="hover:text-gray-200 cursor-pointer">Membre</p>
//             <p className="hover:text-gray-200 cursor-pointer">Contact</p>
//           </div>
//         </div>

//         {/* Réseaux sociaux */}
//         <div className="flex justify-center sm:justify-end space-x-4 mt-6 sm:mt-0">
//           <FaFacebook size={20} className="hover:text-gray-300 cursor-pointer" />
//           <FaInstagram size={20} className="hover:text-gray-300 cursor-pointer" />
//           <FaLinkedin size={20} className="hover:text-gray-300 cursor-pointer" />
//           <FaYoutube size={20} className="hover:text-gray-300 cursor-pointer" />
//         </div>
//       </div>
//     </footer>
//   );
// }

 {/*
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
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto">
        {/* Sections texte 
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 sm:items-center ml-10 w-full">
          {/* Colonne gauche
          <ul className="flex flex-col font-sans text-base font-normal footer-list ">
=======
      <div className="mx-auto max-w-8xl w-full">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-10 items-start lg:items-center justify-between gap-10 md:gap-8 ml-5 sm:ml-10">
          {/* Colonne gauche */}
          <ul className="flex flex-col font-sans text-base font-normal footer-list ml-10 lg:ml-0 w-full">
>>>>>>> 39dfa45cb6d0ff07281e64961ee4edc14dba49e0
            <li className="hover:text-gray-700 cursor-pointer">Actualités</li>
            <li className="hover:text-gray-700 cursor-pointer">Événements</li>
            <li className="hover:text-gray-700 cursor-pointer">Boutique</li>
          </ul>

<<<<<<< HEAD
          {/* Colonne centrale 
          <ul className="flex flex-col font-sans text-base font-normal footer-list">
=======
          {/* Colonne centrale */}
          <ul className="flex flex-col font-sans text-base font-normal footer-list w-full">
>>>>>>> 39dfa45cb6d0ff07281e64961ee4edc14dba49e0
            <li className="hover:text-gray-700 cursor-pointer">Just Rent</li>
            <li className="hover:text-gray-700 cursor-pointer">Membre</li>
            <li className="hover:text-gray-700 cursor-pointer">Contact</li>
          </ul>
<<<<<<< HEAD
          <SocialMedia />
          {/* Réseaux sociaux + Contact 
        <div className="flex flex-col items-center sm:items-end text-center sm:text-right space-y-4">
          {/* Contact Info 
          <div className="flex flex-col">
            <p className="text-xl font-medium">
=======

          {/* Réseaux sociaux */}
          <div className="col-span-2 lg:col-span-2 w-full">
            <SocialMedia />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start text-left space-y-2 col-span-2 lg:col-span-3 w-full">
            <p className="text-xl font-medium whitespace-break-spaces sm:whitespace-nowrap">
>>>>>>> 39dfa45cb6d0ff07281e64961ee4edc14dba49e0
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
*/}

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
      <div className="max-w-7xl mx-auto">
        {/* Sections texte */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 sm:items-center ml-10 w-full">
          {/* Colonne gauche*/}
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
          <SocialMedia />
          {/* Réseaux sociaux + Contact*/} 
        <div className="flex flex-col items-center sm:items-end text-center sm:text-right space-y-4">
          {/* Contact Info */}
          <div className="flex flex-col items-start text-left space-y-2 col-span-2 lg:col-span-3 w-full">
            <p className="text-xl font-medium whitespace-break-spaces sm:whitespace-nowrap">
              032 93 867 87 - justrideus@gmail.com
            </p>
            <p className="text-xs whitespace-break-spaces sm:whitespace-nowrap">
              Immeuble Corona Plaza, Andranomena, Antananarivo, Madagascar
            </p>
          </div>
        </div>
        <aside className="flex flex-col lg:justify-end lg:items-end">
          <h2 className="text-xl">
            <span className="font-bold">SUIVEZ</span>-<span>NOUS</span>
          </h2>
          <PubFooter />
          <p className="text-xs text-black">
            © Copyright JustRide {new Date().getFullYear()}
          </p>
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