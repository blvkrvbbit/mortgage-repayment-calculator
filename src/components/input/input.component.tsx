import { ReactNode } from "react";
import cn from "../../utils/cn";

type Props = {
  prefix?: ReactNode | null;
  suffix?: ReactNode | null;
  name?: string;
  placeholder?: string;
  title?: string;
  error?: boolean;
  handleChange?: () => void;
};

const Input = ({
  prefix,
  suffix,
  name,
  placeholder = "",
  title = "",
  error = false,
  handleChange,
}: Props) => {
  // Prepare for certain states
  return (
    <div className="mb-[2.4rem]">
      {title.length > 0 && (
        <label
          className="text-preset-4 mb-[1.2rem] block capitalize"
          htmlFor=""
        >
          {title}
        </label>
      )}
      <div
        className={cn(
          "group flex items-center h-[4.8rem]  border border-slate-500  focus-within:border-lime",
          "rounded-tl-[0.4rem] rounded-bl-[0.4rem] rounded-[0.4rem] text-preset-4",
          error ? "border-red" : "",
          suffix && "flex-row-reverse"
        )}
      >
        <span
          className={cn(
            "bg-slate-100 text-slate-700 border-slate-700 text-preset-4",
            "group-focus-within:bg-lime",
            " h-full px-[1.6rem]  text-center rounded-tl-[0.4rem] rounded-bl-[0.4rem]",
            "flex items-center justify-center text-preset-4 font-bold",
            error && "bg-red font-bold text-white",
            suffix &&
              "rounded-tl-[0rem] rounded-bl-[0rem] rounded-tr-[0.4rem] rounded-br-[0.4rem]"
          )}
        >
          {prefix && prefix}
          {suffix && suffix}
        </span>

        <input
          type="text"
          placeholder={placeholder}
          className={cn(
            "peer w-full text-preset-4  outline-none bg-transparent",
            "pl-[1.6rem]"
          )}
          name={name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Input;
