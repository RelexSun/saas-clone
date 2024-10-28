import Image from "next/image";
import logo from "../../../public/logo1.png";

export default function NavBar() {
  const nav = [
    "Home",
    "Integrations",
    "Feature",
    "Process",
    "Testimonial",
    "Blog",
  ];
  return (
    <>
      <div className="text-white flex items-center justify-between flex-col gap-6 lg:gap-0 lg:flex-row max-w-[1440px] px-10 py-5 mx-auto my-0">
        <div className="flex gap-7 justify-center items-center ">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div className="border-l px-7 border-[#5c8ed0]">
            <span className=" text-cyan-600 text-sm">Support</span>
            <p className="text-sm font-semibold">info@webmail.com</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-12">
          <ul className="flex gap-12 font-bold text-[15px] ">
            {nav.map((item, index) => (
              <li key={index}>
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
          <button>Try For Free</button>
        </div>
      </div>
    </>
  );
}
