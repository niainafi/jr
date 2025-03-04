import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-600 text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 sm:gap-0 px-4">
        {/* Colonne gauche */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 sm:items-start">
          <div className="flex flex-col space-y-2 font-sans text-base font-normal text-white">
            <p className="hover:text-gray-200 cursor-pointer">Actualités</p>
            <p className="hover:text-gray-200 cursor-pointer">Événements</p>
            <p className="hover:text-gray-200 cursor-pointer">Boutique</p>
          </div>

          {/* Colonne centrale */}
          <div className="flex flex-col space-y-2 font-sans text-base font-normal text-white">
            <p className="hover:text-gray-200 cursor-pointer">Just Rent</p>
            <p className="hover:text-gray-200 cursor-pointer">Membre</p>
            <p className="hover:text-gray-200 cursor-pointer">Contact</p>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center sm:justify-end space-x-4 mt-6 sm:mt-0">
          <FaFacebook size={20} className="hover:text-gray-300 cursor-pointer" />
          <FaInstagram size={20} className="hover:text-gray-300 cursor-pointer" />
          <FaLinkedin size={20} className="hover:text-gray-300 cursor-pointer" />
          <FaYoutube size={20} className="hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
