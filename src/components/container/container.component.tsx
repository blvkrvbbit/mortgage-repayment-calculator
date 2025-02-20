import { ReactNode } from "react";
import cn from "../../utils/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return <div className={cn("px-[2.4rem]", className)}>{children}</div>;
};

export default Container;
