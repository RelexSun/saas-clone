import React from "react";
import Lable from "./lable";
import { LableVariant } from "../../../types/enum/lable";
import LongCard from "./long-cards";
import {
  IconBrandReact,
  IconBrandPython,
  IconBrandWordpress,
  IconWebhook,
} from "@tabler/icons-react";
import in1 from "../../../public/in1.jpg";
import in2 from "../../../public/in2.jpg";
import in3 from "../../../public/in3.jpg";
import in4 from "../../../public/in4.jpg";
import in5 from "../../../public/in5.png";
import Image from "next/image";

const LongCardItems = [
  {
    icon: <IconBrandReact />,
    title: "Joomla Supported",
  },
  {
    icon: <IconBrandWordpress />,
    title: "Wordpress Intregrations",
  },
  {
    icon: <IconBrandPython />,
    title: "Python Core Installed",
  },
  {
    icon: <IconWebhook />,
    title: "Woo-commerce Support",
  },
];

export default function Integrations() {
  return (
    <div className="bg-[#f8f8f8] w-full h-auto pb-32 pt-36">
      <div className="max-w-[1200px] mx-auto my-0 flex flex-col md:flex-row px-6 xl:px-20 gap-16">
        <div className="md:w-1/2 relative">
          <div className=" space-y-8">
            <div className="flex items-end gap-7 ">
              <div className="">
                <Image src={in1} alt="in" />
              </div>
              <div className=" z-10">
                <Image src={in2} alt="in" />
              </div>
            </div>
            <div className="flex items-start gap-7">
              <div className="">
                <Image src={in3} alt="in" />
              </div>
              <div className="">
                <Image src={in4} alt="in" />
              </div>
            </div>
          </div>

          <div className="absolute top-5 -right-10 hidden sm:block">
            <Image src={in5} alt="in" />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 ">
          <div>
            <Lable variant={LableVariant.Secondary}>Integrations</Lable>
          </div>
          <h1 className="text-[#003378] text-4xl font-bold">
            The world{"'"}s most popular free CRM by number of users
          </h1>
          <p className="text-[#6480a7] text-sm">
            Free CRM system for your sales team with all the essential tools
            {"-"}
            sales funnel, pipeline management, sales reports, 360-degree
            customer view, support for repeat sales and sales automation.
          </p>
          <div className=" space-y-4 mt-5">
            {LongCardItems.map((items, index) => (
              <LongCard title={items.title} icon={items.icon} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
