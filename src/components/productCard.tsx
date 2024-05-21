import React from "react";
import Image from "next/image";
import { TCupom, produtosURL } from "@/lib/constants";
type ProductCardProps = {
  cupom: TCupom;
};

export default async function ProductCard({ cupom }: ProductCardProps) {
  return (
    <div className="hover:shadow-md hover:shadow-black relative flex flex-col justify-center items-center ">
      <Image
        className=" object-fit"
        src="https://cupons.kfcbrasil.com.br/cupons/wp-content/uploads/2024/04/7cupom-externob.png"
        alt={cupom.name}
        width={356}
        height={128}
      />
      <div className="w-full h-56 justify-center items-center absolute top-80 flex flex-col flex-1 border-2 bg-white border-black ">
        <h3 className="uppercase text-black font-bold text-lg">{cupom.name}</h3>
        <p className="text-kfcRed font-medium uppercase text-sm">
          {cupom.includes}
        </p>
        <div className="flex font-extrabold">
          <small className="text-kfcRed text-xs">R$</small>
          <h2 className="text-kfcRed text-5xl">{cupom.price}</h2>
        </div>
      </div>
    </div>
  );
}
