import Image from "next/image";
import React from "react";
import { ProcessProps } from "../../../types/interfaces/processIcon";

export default function ProcessIcon({ ...items }: ProcessProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="shadow rounded-[100%] bg-white p-4 flex items-center justify-center w-40 h-40 relative">
        <Image src={items.icon} alt="icon" />
        <div className="hero-section w-12 h-12 rounded-[100%] p-1 flex items-center justify-center text-base font-semibold text-white absolute bottom-0 right-0">
          {items.order}
        </div>
      </div>
      <span className="text-lg font-bold text-[#003378]">{items.title}</span>
    </div>
  );
}
