import React from "react";
import Lable from "./lable";
import { LableVariant } from "../../../types/enum/lable";
import Card from "./card";
import { CardProps } from "../../../types/interfaces/card";
import f1 from "../../../public/f1.png";
import f2 from "../../../public/f2.png";
import f3 from "../../../public/f3.png";

const CardItems: CardProps[] = [
  {
    icon: f1,
    title: "Manage Sales",
    desc: "Our visual sales pipeline",
    details: [
      "Easily customize your sales",
      "Keep track of hours worked in",
      "Best CRM software of 2019",
      "Top 7 web productivity tools",
      "Our mobile apps let you access",
    ],
  },
  {
    icon: f2,
    title: "Customize your CRM",
    desc: "Our visual sales pipeline",
    details: [
      "Easily customize your sales",
      "Keep track of hours worked in",
      "Best CRM software of 2019",
      "Top 7 web productivity tools",
      "Our mobile apps let you access",
    ],
  },
  {
    icon: f3,
    title: "Work anywhere",
    desc: "Our visual sales pipeline",
    details: [
      "Easily customize your sales",
      "Keep track of hours worked in",
      "Best CRM software of 2019",
      "Top 7 web productivity tools",
      "Our mobile apps let you access",
    ],
  },
];

export default function CoreFeature() {
  return (
    <div className="text-center max-w-[1440px] mx-auto my-0 flex flex-col gap-12 py-10 xl:p-20 sm:mt-5">
      <div className="flex flex-col gap-3 max-w-[515px] mx-auto my-0">
        <div>
          <Lable variant={LableVariant.Secondary}>Core Feature</Lable>
        </div>
        <h1 className="text-[#003378] font-semibold text-4xl">
          Discover How Your Business Can Work Smarter!
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:flex-wrap">
        {CardItems.map((item) => (
          <Card items={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}
