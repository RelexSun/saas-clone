import Image from "next/image";
import FeaturesContent from "./features-content";
import f1 from "../../../public/fp1.jpg";
import f2 from "../../../public/fp2.jpg";
import f3 from "../../../public/fp3.jpg";

export default function FeaturesSection() {
  return (
    <div className="w-full bg-[#f8f8f8] pb-14">
      <div className="max-w-[1440px] mx-auto my-0 space-y-24">
        <div className=" md:w-4/5 xl:w-3/4 mx-auto my-0 bg-white  lg:flex items-center xl:px-20 xl:pt-20 xl:pb-16 relative p-5 md:p-10">
          <div className="">
            <FeaturesContent feature="Features #01">
              CRM for sales teams
            </FeaturesContent>
          </div>
          <div className="lg:absolute lg:-right-24 lg:w-[500px] xl:w-[600px] max-w-full">
            <Image src={f1} alt="feature 1" />
          </div>
        </div>
        <div className=" md:w-4/5 xl:w-3/4 mx-auto my-0 bg-white  lg:flex items-center xl:px-20 xl:pt-20 xl:pb-16 relative p-5 md:p-10">
          <div className="flex justify-end">
            <FeaturesContent feature="Features #02">
              Sales funnel automation
            </FeaturesContent>
          </div>
          <div className="lg:absolute lg:-left-24 lg:w-[500px] xl:w-[600px] max-w-full">
            <Image src={f2} alt="feature 1" />
          </div>
        </div>
        <div className=" md:w-4/5 xl:w-3/4 mx-auto my-0 bg-white  lg:flex items-center xl:px-20 xl:pt-20 xl:pb-16 relative p-5 md:p-10">
          <div className="">
            <FeaturesContent feature="Features #03">
              Marketing Intelligence
            </FeaturesContent>
          </div>
          <div className="lg:absolute lg:-right-24 lg:w-[500px] xl:w-[600px] max-w-full">
            <Image src={f3} alt="feature 1" />
          </div>
        </div>
      </div>
    </div>
  );
}
