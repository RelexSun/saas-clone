import { StaticImageData } from "next/image";

export interface TestimonialProps {
  content: string;
  name: string;
  icon: StaticImageData | string;
  stars: number;
}
