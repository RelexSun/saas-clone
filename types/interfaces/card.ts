import { StaticImageData } from "next/image";

export interface CardProps {
  icon: StaticImageData | string;
  title: string;
  desc: string;
  details: string[];
}
