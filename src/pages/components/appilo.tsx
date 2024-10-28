import React from "react";
import Lable from "./lable";
import { LableVariant } from "../../../types/enum/lable";
import Image from "next/image";
import bg from "../../../public/pp1.png";
import ProcessIcon from "./appilo-icon";
import pf1 from "../../../public/pf1.png";
import pf2 from "../../../public/pf2.png";
import pf3 from "../../../public/pf3.png";
import pf4 from "../../../public/pf4.png";
import pf5 from "../../../public/pf5.png";
import { ProcessProps } from "../../../types/interfaces/processIcon";

const process: ProcessProps[] = [
  {
    icon: pf1,
    title: "Communications",
    order: "01",
  },
  {
    icon: pf2,
    title: "Task & Projects",
    order: "02",
  },
  {
    icon: pf3,
    title: "CRM",
    order: "03",
  },
  {
    icon: pf4,
    title: "Support Center",
    order: "04",
  },
  {
    icon: pf5,
    title: "WP Themes",
    order: "05",
  },
];

export default function Appilo() {
  return (
    <div className="bg-white h-[1050px] sm:h-[900px] md:h-[700px]  lg:h-[650px] pt-16 p-5  lg:px-10 lg:pt-20 ">
      <div className="max-w-[1200px] mx-auto my-0 space-y-10 text-center">
        <div className="space-y-4">
          <div>
            <Lable variant={LableVariant.Secondary}>Process</Lable>
          </div>
          <h1 className="text-[#003378] text-3xl font-semibold">
            What Is Appilo
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly items-center relative">
          {process.map((items, index) =>
            index % 2 === 0 ? (
              <div key={index} className="z-10">
                <ProcessIcon
                  title={items.title}
                  icon={items.icon}
                  order={items.order}
                />
              </div>
            ) : (
              <div key={index} className="pt-24 z-10">
                <ProcessIcon
                  title={items.title}
                  icon={items.icon}
                  order={items.order}
                />
              </div>
            )
          )}
          <div className="absolute top-0 hidden lg:block">
            <Image src={bg} alt="bg" />
          </div>
        </div>
      </div>
    </div>
  );
}
