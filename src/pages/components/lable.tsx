import { LableVariant } from "../../../types/enum/lable";

type LableProps = {
  variant: LableVariant;
  children: string;
};

const Lable = ({ variant, children }: LableProps) => {
  return (
    <button
      className={` font-bold text-sm px-4 py-2 ${
        variant === LableVariant.Primary
          ? "text-white bg-[#0e65d9]"
          : "bg-[#f3f7ff] text-[#0e65d9]"
      }`}
    >
      <span>{children}</span>
    </button>
  );
};

export default Lable;
