import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";

interface LongCardProps {
  title: string;
  icon: JSX.Element;
}

export default function LongCard({ title, icon }: LongCardProps) {
  return (
    <Link
      href="#"
      className="flex items-center justify-between pt-5 pb-4 px-10 long-card bg-white"
    >
      <div className="flex items-center gap-6">
        <div className="text-[#3186f8]">{icon}</div>
        <h1 className="text-[#003378] font-bold">{title}</h1>
      </div>
      <div className=" text-[#cfd8e4]">
        <IconArrowNarrowRight />
      </div>
    </Link>
  );
}
