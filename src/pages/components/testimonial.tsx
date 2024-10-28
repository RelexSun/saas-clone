import React from "react";
import { TestimonialProps } from "../../../types/interfaces/testimonial";
import tbg from "../../../public/tbg.png";
import Image from "next/image";
import TestimonialCard from "./testimonial-card";
import Lable from "./lable";
import { LableVariant } from "../../../types/enum/lable";

const TestimonialCardContent: TestimonialProps[] = [
  {
    content:
      "Free CRM system for your sales team with all the essential tools sales funnel, pipeline management, sales reports.",
    name: "Hilix B. Browni",
    icon: "",
    stars: 5,
  },
  {
    content:
      "Free CRM system for your sales team with all the essential tools sales funnel, pipeline management, sales reports.",
    name: "Hilix B. Browni",
    icon: "",
    stars: 5,
  },
  {
    content:
      "Free CRM system for your sales team with all the essential tools sales funnel, pipeline management, sales reports.",
    name: "Hilix B. Browni",
    icon: "",
    stars: 5,
  },
  {
    content:
      "Free CRM system for your sales team with all the essential tools sales funnel, pipeline management, sales reports.",
    name: "Hilix B. Browni",
    icon: "",
    stars: 5,
  },
];

export default function Testimonial() {
  return (
    <>
      <div className="relative flex flex-col space-y-16 md:space-y-0 md:flex-row items-center justify-center gap-5 bg-[#f7f7f7] p-4 lg:p-20 h-[1050px] sm:h-[900px] md:h-[700px] lg:h-[650px]">
        <div className="z-10 space-y-7">
          <TestimonialCard
            content={TestimonialCardContent[0].content}
            icon={TestimonialCardContent[0].icon}
            name={TestimonialCardContent[0].name}
            stars={TestimonialCardContent[0].stars}
          />
          <div className=" lg:-translate-x-10">
            <TestimonialCard
              content={TestimonialCardContent[1].content}
              icon={TestimonialCardContent[1].icon}
              name={TestimonialCardContent[1].name}
              stars={TestimonialCardContent[1].stars}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center z-10 text-center space-y-3">
          <Lable variant={LableVariant.Secondary}>Testimonials</Lable>
          <h1 className="text-[#003378] text-4xl font-semibold max-w-[370px]">
            See What{"’"}s Going With Our Clients
          </h1>
        </div>
        <div className="z-10 space-y-7">
          <TestimonialCard
            content={TestimonialCardContent[2].content}
            icon={TestimonialCardContent[2].icon}
            name={TestimonialCardContent[2].name}
            stars={TestimonialCardContent[2].stars}
          />
          <div className=" lg:translate-x-10">
            <TestimonialCard
              content={TestimonialCardContent[3].content}
              icon={TestimonialCardContent[3].icon}
              name={TestimonialCardContent[3].name}
              stars={TestimonialCardContent[3].stars}
            />
          </div>
        </div>

        <div className="absolute">
          <Image src={tbg} alt="tbg" />
        </div>
      </div>
      ;
    </>
  );
}
