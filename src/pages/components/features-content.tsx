import React from "react";
import Lable from "./lable";
import { LableVariant } from "../../../types/enum/lable";
import { IconEye, IconDeviceDesktop, IconCode } from "@tabler/icons-react";

export default function FeaturesContent({
  children,
  feature,
}: {
  children: string;
  feature: string;
}) {
  return (
    <div className="lg:w-1/2">
      <div className="space-y-4">
        <div>
          <Lable variant={LableVariant.Secondary}>{feature}</Lable>
        </div>
        <h1 className="text-[#003378] text-3xl font-semibold">{children}</h1>
        <p className="text-[#6480a7] text-sm">
          Free CRM system for your sales team with all the essential tools sales
          funnel, pipeline management, sales reports, 360-degree customer view,
          support for repeat sales
        </p>
      </div>
      <div className="mt-6 text-white space-y-3">
        <div className="flex items-center gap-3">
          <div className="hero-section w-12 h-12 rounded-[100%] p-1 flex items-center justify-center">
            <IconEye />
          </div>
          <p className="text-[#6480a7] font-semibold">
            Free CRM system for your sales team
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hero-section w-12 h-12 rounded-[100%] p-1 flex items-center justify-center">
            <IconDeviceDesktop />
          </div>
          <p className="text-[#6480a7] font-semibold">
            Customer view, support for repeat sales
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hero-section w-12 h-12 rounded-[100%] p-1 flex items-center justify-center">
            <IconCode />
          </div>
          <p className="text-[#6480a7] font-semibold">
            The world{"'"}s most popular free CRM
          </p>
        </div>
      </div>
    </div>
  );
}
