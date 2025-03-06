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
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#B38E13] text-black py-6 sm:py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 sm:gap-0 px-4">
        {/* Sections texte */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 sm:items-start">
          {/* Colonne gauche */}
          <div className="flex flex-col space-y-2 font-sans text-base font-normal">
            <p className="hover:text-gray-700 cursor-pointer">Actualités</p>
            <p className="hover:text-gray-700 cursor-pointer">Événements</p>
            <p className="hover:text-gray-700 cursor-pointer">Boutique</p>
          </div>
          
          {/* Colonne centrale */}
          <div className="flex flex-col space-y-2 font-sans text-base font-normal">
            <p className="hover:text-gray-700 cursor-pointer">Just Rent</p>
            <p className="hover:text-gray-700 cursor-pointer">Membre</p>
            <p className="hover:text-gray-700 cursor-pointer">Contact</p>
          </div>
        </div>
        
        {/* Réseaux sociaux + Contact */}
        <div className="flex flex-col items-center sm:items-end text-center sm:text-right space-y-4">
          <div className="flex space-x-4">
            <FaFacebook size={20} className="hover:text-gray-700 cursor-pointer" />
            <FaInstagram size={20} className="hover:text-gray-700 cursor-pointer" />
            <FaLinkedin size={20} className="hover:text-gray-700 cursor-pointer" />
            <FaYoutube size={20} className="hover:text-gray-700 cursor-pointer" />
          </div>
          
          {/* Contact Info */}
          <p className="text-sm font-medium">032 93 867 87 - justrideus@gmail.com</p>
          <p className="text-xs">Immeuble Corona Plaza, Andranomena, Antananarivo, Madagascar</p>
        </div>
      </div>
    </footer>
  );
}
