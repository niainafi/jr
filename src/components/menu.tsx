"use client"; 

import React from 'react';
import MenuItem from './menu-item';
import BtnShop from './btn-shop';
import CloseIcon from './icons/close-icon';
import MenuIcon from './icons/menu-icon';

const menus = [
  { nom: 'Actualités', href: '/actualités' },
  { nom: 'Événements', href: '/evenements' },
  { nom: 'Boutique', href: '/boutique' },
  { nom: 'Just Rent', href: '/just-rent' },
  { nom: 'LVPM', href: '/lvpm' },
  { nom: 'Membre', href: '/' },
  { nom: 'Contact', href: '/' },
];

export default function Menu() {
  return (
    <div className="relative flex items-center">
      {/* ✅ Menu Desktop */}
      <ul className="hidden lg:flex space-x-6 items-center text-white">
        {menus.map((menu, index) => (
          <li key={index}>
            <MenuItem nom={menu.nom} href={menu.href} />
          </li>
        ))}
      </ul>

      {/* ✅ Bouton d'achat */}
      <BtnShop />

      {/* ✅ MENU BURGER POUR MOBILE */}
      <div className="lg:hidden flex items-center">
     
        <input type="checkbox" id="menu-toggle" className="peer hidden" />

        {/* ✅ Icône Burger */}
        <label htmlFor="menu-toggle" className="cursor-pointer z-50">
          <MenuIcon width={30} height={30} stroke="#fff" />
        </label>

        {/* ✅ Menu mobile (affiché seulement si checkbox cochée) */}
        <div className="fixed inset-0 bg-black bg-opacity-80 transition-transform transform translate-x-full peer-checked:translate-x-0 z-40">
          <div className="absolute top-0 right-0 w-64 h-full bg-gray-900 text-white p-6 shadow-lg">
            {/* ✅ Icône de fermeture */}
            <div className="flex justify-end">
              <label htmlFor="menu-toggle" className="cursor-pointer">
                <CloseIcon width={25} height={25} color="white" />
              </label>
            </div>

            {/* ✅ Liens du menu */}
            <ul className="mt-6 space-y-4">
              {menus.map((menu, index) => (
                <li key={index} className="hover:text-accent transition">
                  <MenuItem nom={menu.nom} href={menu.href} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
