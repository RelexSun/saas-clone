"use client";

import React, { useState } from "react";
import Lable from "./lable";
import { LableVariant } from "../../../types/enum/lable";
import { BlogCardProps } from "../../../types/interfaces/blog";
import Image from "next/image";
import b1 from "../../../public/b1.jpg";
import b2 from "../../../public/b2.jpg";
import b3 from "../../../public/b3.jpg";
import BlogCard from "./blog-card";

const BlogCardItems: BlogCardProps[] = [
  {
    lable: "CRM Software",
    date: "24th June 2021",
    title: "TeamWave is fully integrated",
    desc: "Free CRM system for your sales team with all the essential tools sales funnel, pipeline management, sales reports.",
  },
  {
    lable: "CRM Software",
    date: "24th June 2021",
    title: "TeamWave is fully integrated",
    desc: "Free CRM system for your sales team with all the essential tools sales funnel, pipeline management, sales reports.",
  },
  {
    lable: "CRM Software",
    date: "24th June 2021",
    title: "TeamWave is fully integrated",
    desc: "Free CRM system for your sales team with all the essential tools sales funnel, pipeline management, sales reports.",
  },
];

const BlogImage = [b1, b2, b3];

export default function Blog() {
  const [active, setActive] = useState<number>(0);
  return (
    <div className="max-w-[1200px] mx-auto my-0 md:space-y-10 md:p-10 p-7 md:pt-24">
      <div className="space-y-2 mb-3">
        <Lable variant={LableVariant.Secondary}>Blog</Lable>
        <h1 className="text-[#003378] text-4xl font-semibold">News Feeds</h1>
      </div>
      <div className="lg:flex gap-3 hidden sm:block">
        {BlogCardItems.map((item, index) => (
          <div key={index} className="bg-white flex items-center">
            <div onClick={() => setActive(index)}>
              <Image src={BlogImage[index]} alt="blog image" width={225} />
            </div>
            {active === index && (
              <BlogCard
                lable={item.lable}
                title={item.title}
                date={item.date}
                desc={item.desc}
              />
            )}
          </div>
        ))}
      </div>
      <div className="gap-3 sm:hidden">
        {BlogCardItems.map((item, index) => (
          <div key={index} className="bg-white flex items-center">
            <div onClick={() => setActive(index)}>
              <Image src={BlogImage[index]} alt="blog image" width={225} />
            </div>
            <BlogCard
              lable={item.lable}
              title={item.title}
              date={item.date}
              desc={item.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
