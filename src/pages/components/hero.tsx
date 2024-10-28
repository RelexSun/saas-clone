import Lable from "./lable";
import NavBar from "./navbar";
import { LableVariant } from "../../../types/enum/lable";
import banner from "../../../public/bsh2.png";
import hero from "../../../public/bs1.png";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <>
      <div className="hero-section h-[100vh] w-[100vw] ">
        <NavBar />
        <div className="flex flex-col md:flex-row lg:justify-center gap-10 max-w-[1440px] mx-auto my-0 h-[70%] items-center z-50 relative px-10">
          <div className="flex flex-col items-start w-[400px] lg:w-[520px] gap-5">
            <div>
              <Lable variant={LableVariant.Primary}>
                Better Way To Manage Business
              </Lable>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-white font-bold text-4xl lg:text-5xl lg:leading-snug">
                Integrated CRM, Project Management
              </h1>
              <span className="text-white">
                A better way to manage your
                <b> sales, team, clients & marketing</b> - on a single platform.
                <b>Powerful, affordable & easy</b> to use software
              </span>
            </div>
            <button>Get Started Now</button>
          </div>
          <div>
            <Image src={hero} alt="dashboard" />
          </div>
        </div>
      </div>
      <div className="absolute z-0 top-52 right-48">
        <Image src={banner} alt="banner" />
      </div>
      <div className="absolute z-0 top-32 right-32">
        <Image src={banner} alt="banner" />
      </div>
      <div className="absolute z-0 bottom-14 left-32">
        <Image src={banner} alt="banner" />
      </div>
      <div className="absolute z-0 bottom-28 left-48">
        <Image src={banner} alt="banner" />
      </div>
    </>
  );
};