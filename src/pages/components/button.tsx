import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
};

const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
};

const buttonVariants = cva(
  "py-2 px-4 font-semibold text-white transition ease-in-out duration-300  hover:bg-black",
  {
    variants: {
      variant: {
        primary: "bg-[#003378] w-[200px] h-[60px]",
        secondary:
          "border-[#6f9fe0] border-2 hover:border-black w-[160px] h-[60px]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default Button;
