import { IconCheck } from "@tabler/icons-react";
import { CardProps } from "../../../types/interfaces/card";
import Image from "next/image";

export default function Card({ items }: { items: CardProps }) {
  return (
    <div className="py-12 px-11 flex flex-col items-center border-[#eff3f7] border hover:shadow-lg hover:border-none">
      <div className="mb-7">
        <div className="flex items-center justify-between gap-4">
          <div>
            <Image src={items.icon} alt={items.title} />
          </div>
          <div className="text-left">
            <h1 className="text-lg text-[#003378] font-bold">{items.title}</h1>
            <p className="text-sm text-[#6480a7]">{items.desc}</p>
          </div>
        </div>
        <div className="w-full border-[#eff3f7] border mt-5"></div>
      </div>
      <div>
        {items.details.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-base  mb-5 text-[#3186f8]"
          >
            <IconCheck stroke={2} className="" />
            <p className=" text-[#6480a7]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
