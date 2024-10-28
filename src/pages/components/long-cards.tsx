import { IconArrowNarrowRight } from "@tabler/icons-react";

interface LongCardProps {
  title: string;
  icon: JSX.Element;
}

export default function LongCard({ items }: { items: LongCardProps }) {
  return (
    <div className="flex items-center justify-between pt-5 pb-4 px-10 bg-white">
      <div className="flex items-center gap-6">
        <div className="text-[#3186f8]">{items.icon}</div>
        <h1 className="text-[#003378] font-bold">{items.title}</h1>
      </div>
      <div className=" text-[#cfd8e4]">
        <IconArrowNarrowRight />
      </div>
    </div>
  );
}
