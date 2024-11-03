import { useRef, useState } from "react";
import Action from "./components/action";
import Appilo from "./components/appilo";
import Blog from "./components/blog";
import CoreFeature from "./components/core-features";
import FeaturesSection from "./components/features-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Integrations from "./components/integrations";
import NavBar from "./components/navbar";
import Testimonial from "./components/testimonial";
import SideBar from "./components/sidebar";
// import SponsorBar from "./components/sponsor";

export default function Home() {
  const sectionRefs = {
    Home: useRef<HTMLDivElement>(null),
    Integrations: useRef<HTMLDivElement>(null),
    Feature: useRef<HTMLDivElement>(null),
    Process: useRef<HTMLDivElement>(null),
    Testimonial: useRef<HTMLDivElement>(null),
    Blog: useRef<HTMLDivElement>(null),
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {isOpen && (
        <>
          <div className="z-10">
            <SideBar sectionRefs={sectionRefs} />
          </div>
          <div
            className="w-full h-[100vh] bg-slate-500/50 fixed z-[99]"
            onClick={() => setIsOpen(false)}
          ></div>
        </>
      )}
      <div className="relative z-0">
        <NavBar sectionRefs={sectionRefs} setIsOpen={setIsOpen} />
        <div ref={sectionRefs.Home} className="">
          <HeroSection />
        </div>
        <CoreFeature />
        <div ref={sectionRefs.Integrations}>
          <Integrations />
        </div>
        <div ref={sectionRefs.Feature}>
          <FeaturesSection />
        </div>
        <div ref={sectionRefs.Process}>
          <Appilo />
        </div>
        <div ref={sectionRefs.Testimonial}>
          <Testimonial />
        </div>
        <div ref={sectionRefs.Blog}>
          <Blog />
        </div>
        <Action />
        <Footer />
      </div>
    </>
  );
}
