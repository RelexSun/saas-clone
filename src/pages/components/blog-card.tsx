import React from "react";
import Lable from "./lable";
import { LableVariant } from "../../../types/enum/lable";
import { IconCalendarMonth } from "@tabler/icons-react";
import { BlogCardProps } from "../../../types/interfaces/blog";

export default function BlogCard({ ...items }: BlogCardProps) {
  return (
    <div className=" pt-12 pl-11 p-5 space-y-3 max-w-[350px] shadow-sm">
      <div className="flex items-center gap-3">
        <Lable variant={LableVariant.Secondary}>{items.lable}</Lable>
        <div className="flex items-center gap-1">
          <IconCalendarMonth />
          <span className="text-[#9db0cb] text-sm font-bold">{items.date}</span>
        </div>
      </div>
      <h3 className="text-[#003378] font-semibold text-lg pb-4">
        {items.title}
      </h3>
      <span className="text-[#6480a7] text-base">{items.desc}</span>
    </div>
  );
}
