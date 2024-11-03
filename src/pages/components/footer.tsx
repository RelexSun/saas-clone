import Image from "next/image";
import logo from "../../../public/f-logo1.png";
import icon1 from "../../../public/i-icon.png";
import icon2 from "../../../public/g-icon.png";

export default function Footer() {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="max-w-[1200px] justify-between flex flex-col md:flex-row md:items-center mx-auto my-0 p-5 pt-10 md:p-10 md:py-20">
        <div className="space-y-10">
          <div className="flex gap-7 items-center ">
            <div>
              <Image src={logo} alt="logo" />
            </div>
            <div className="border-l px-7 border-[#5c8ed0]">
              <span className=" text-cyan-600 text-sm">Copyright by</span>
              <p className="text-sm font-semibold text-[#003378]">
                Themexriver-2021
              </p>
            </div>
          </div>
          <div className="max-w-[280px] text-[#6480a7]">
            <span>
              Free <b>CRM</b> system for your sales team with all the essential
              tools sales funnel, pipeline management, sales reports,
              <b>360-degree</b>
              customer view, support for repeat sales
            </span>
          </div>
          <div>{/*icons */}</div>
        </div>
        <div className="flex items-start gap-5 sm:gap-8 md:gap-10 lg:gap-24">
          <div>
            <div className="h-full pb-9">
              <span className="text-[#003378] font-bold text-lg ">Support</span>
            </div>
            <ul className="text-[#6480a7] text-base space-y-4">
              <li>Knowledge Base</li>
              <li>Blog</li>
              <li>Developer API</li>
              <li>Contact</li>
            </ul>
            <div className="my-2">
              <Image src={icon1} alt="icon" />
            </div>
            <div>
              <Image src={icon2} alt="icon" />
            </div>
          </div>
          <div>
            <div className="h-full pb-9">
              <span className="text-[#003378] font-bold text-lg ">
                Features
              </span>
            </div>
            <ul className="text-[#6480a7] text-base space-y-4">
              <li>Sales Management</li>
              <li>Contact Management</li>
              <li>Project Management</li>
              <li>HR Management</li>
              <li>Integrations and API</li>
              <li>Gmail & G suite</li>
            </ul>
          </div>
          <div>
            <div className="h-full pb-9">
              <span className="text-[#003378] font-bold text-lg ">About</span>
            </div>
            <ul className="text-[#6480a7] text-base space-y-4">
              <li>About</li>
              <li>Affiliate Program</li>
              <li> Customer Spotlight</li>
              <li>Reseller Program</li>
              <li> Careers</li>
              <li> Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#efefef] text-[#003378] font-semibold text-base relative flex flex-row items-center gap-14 h-14 pl-6 md:pl-36">
        <span>Take a Tour</span>
        <span>Terms & Conditions</span>
        <span>Refund</span>
        <div className="absolute right-3">{/*button */}</div>
      </div>
    </div>
  );
}
