import Image from "next/image";
import p1 from "../../../public/p1.png";
import p2 from "../../../public/p2.png";
import p3 from "../../../public/p3.png";
import p4 from "../../../public/p4.png";

export default function SponsorBar() {
  return (
    <div className="w-full  relative">
      <div className="max-w-[900px] lg:max-w-[1200px] mx-auto my-0">
        <div className=" absolute top-[-90px] bg-white p-16 shadow-md">
          <div className="flex gap-20 items-center overflow-hidden">
            <div>
              <Image src={p1} alt="p1" />
            </div>
            <div>
              <Image src={p2} alt="p2" />
            </div>
            <div>
              <Image src={p3} alt="p3" />
            </div>
            <div className="hidden lg:block">
              <Image src={p4} alt="p4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
