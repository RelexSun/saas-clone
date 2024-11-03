import Image from "next/image";
import logo from "../../../public/logo1.png";
import Button from "./button";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar({
  sectionRefs,
  setIsOpen,
}: {
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
  setIsOpen: (value: boolean) => void;
}) {
  const [navActive, setNavActive] = useState<boolean>(false);
  const nav = [
    "Home",
    "Integrations",
    "Feature",
    "Process",
    "Testimonial",
    "Blog",
  ];

  useEffect(() => {
    const changeBackground = () => {
      setNavActive(window.scrollY >= 100);
    };
    window.addEventListener("scroll", changeBackground);

    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <div
      className={
        navActive
          ? "bg-black fixed top-[-10px] w-full z-[100] transition ease-in-out translate-y-1 duration-300 delay-150"
          : "w-full absolute z-[100]"
      }
    >
      <div
        className={
          navActive
            ? "  z-[100] text-white flex items-center justify-between lg:items-center lg:justify-between gap-6 lg:gap-0 lg:flex-row  px-2 lg:px-4 xl:px-10 py-5 max-w-[1440px] mx-auto my-0"
            : "text-white flex items-center justify-between lg:items-center lg:justify-between gap-6 lg:gap-0 lg:flex-row max-w-[1440px] px-2 lg:px-4 xl:px-10 py-5 mx-auto my-0"
        }
      >
        <div className="flex gap-7 justify-center items-center ">
          <div className="min-w-[50px]">
            <Image src={logo} alt="logo" />
          </div>
          {!navActive && (
            <div className="border-l px-7 border-[#5c8ed0]">
              <span className=" text-cyan-600 text-sm">Support</span>
              <p className="text-sm font-semibold">info@webmail.com</p>
            </div>
          )}
        </div>
        <div className="hidden  lg:flex items-center justify-between gap-12">
          <ul className="flex gap-9 xl:gap-12 font-bold text-[15px] ">
            {nav.map((item, index) => (
              <li key={index}>
                <Link
                  href=""
                  className="nav-link relative"
                  onClick={(e) => {
                    e.preventDefault();
                    sectionRefs[item]?.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="secondary" className="w-[120px] text-sm">
            Try For Free
          </Button>
        </div>
        <div className="lg:hidden">
          <IconMenu2 onClick={() => setIsOpen(true)} />
        </div>
      </div>
    </div>
  );
}
