import React from "react";
import { TiShoppingCart } from "react-icons/ti";
type BtnShopProps = React.HTMLAttributes<HTMLDivElement>;

export default function BtnShop({ ...props }: BtnShopProps) {
  return (
    <div
      className="btn-shop p-4 flex items-center hover:cursor-pointer relative"
      {...props}
    >
      <div className="relative">
        <TiShoppingCart color="white" />
        <span className="bg-red-500 w-4 h-4 text-[0.7rem] font-bold flex items-center justify-center text-white p-1 rounded-full absolute bottom-0 right-0">
          3
        </span>
      </div>
    </div>
  );
}
