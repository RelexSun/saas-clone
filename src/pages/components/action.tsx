import Lable from "./lable";
import { LableVariant } from "../../../types/enum/lable";
import banner from "../../../public/csh3.png";
import Image from "next/image";
import Button from "./button";

export default function Action() {
  return (
    <div className="max-w-[1200px] mx-auto my-0 hero-section">
      <div className="relative">
        <div className="text-center max-w-[800px] mx-auto my-0 text-white py-24  flex flex-col items-center gap-6">
          <div className="space-y-3 z-10">
            <div>
              <Lable variant={LableVariant.Primary}>Call to Action</Lable>
            </div>
            <h1 className="text-4xl font-bold">Get This App Now, As a Trail</h1>
          </div>
          <span className="text-[#adcdf9] text-base  z-10">
            Free CRM system for your sales team with all the essential tools
            sales funnel, pipeline management, sales reports, 360-degree
            customer view, support for repeat sales
          </span>
          <div className="flex flex-col md:flex-row items-center gap-4  z-10">
            <Button variant="primary">Get Started Now</Button>
            <Button variant="secondary">Contact Us</Button>
          </div>
        </div>
        <div className="absolute top-10 right-20">
          <Image src={banner} alt="banner" />
        </div>
        <div className="absolute top-20 right-36">
          <Image src={banner} alt="banner" />
        </div>
        <div className="absolute bottom-10 left-20">
          <Image src={banner} alt="banner" />
        </div>
        <div className="absolute bottom-20 left-36">
          <Image src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
}
