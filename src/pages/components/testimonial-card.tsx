import React from "react";
import { TestimonialProps } from "../../../types/interfaces/testimonial";
import pf from "../../../public/tst1.png";
import Image from "next/image";

export default function TestimonialCard({ ...items }: TestimonialProps) {
  return (
    <div className="bg-white shadow-sm p-6 flex flex-col max-w-[350px] gap-4">
      <div>
        <span className="text-[#6480a7] text-sm">{items.content}</span>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <Image src={pf} alt="pf" />
        </div>
        <div className="flex flex-col">
          <span className="text-[#003378] text-lg font-semibold">
            {items.name}
          </span>
          <div>{/*stars */}</div>
        </div>
      </div>
    </div>
  );
}
