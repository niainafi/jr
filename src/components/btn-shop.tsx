import React from "react";

type BtnShopProps = React.HTMLAttributes<HTMLDivElement>;

export default function BtnShop({ ...props }: BtnShopProps) {
  return (
    <div
      className="btn-shop p-4 flex items-center hover:cursor-pointer relative"
      {...props}
    >
      <div className="relative">
        <img
          src="/images/boutique/caddie.png"
          alt="Caddie"
          className="w-10 h-12" // Vous pouvez ajuster la taille en fonction de vos besoins
        />
        <span className="w-auto h-auto text-[0.9rem] font-bold flex items-center justify-center text-red-500 p-1 rounded-full absolute bottom-0 right-0">
        
        </span>
      </div>
    </div>
  );
}
