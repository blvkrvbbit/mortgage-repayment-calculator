import { ReactNode } from "react";
import { Icon } from "@iconify/react";
import cn from "../../utils/cn";

type Props = {
  children: ReactNode;
  handleClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({ children, className, type }: Props) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-[1.2rem] px-[4rem] py-[1.6rem]",
        "bg-lime  text-preset-3 rounded-full",
        className
      )}
      type={type ? type : "button"}
    >
      <Icon icon="ph:calculator-fill" /> {children}
    </button>
  );
};

export default Button;
