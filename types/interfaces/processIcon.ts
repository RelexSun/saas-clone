import { StaticImageData } from "next/image";

export type ProcessProps = {
  title: string;
  icon: StaticImageData | string;
  order: string;
};
