import cn from "../../utils/cn";

interface CustomInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  suffix,
  prefix,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div className={cn("mb-[2.4rem]", className)}>
      {label.length > 0 && (
        <label
          className="text-preset-4 mb-[1.2rem] block capitalize"
          htmlFor=""
        >
          {label}
        </label>
      )}
      <div
        className={cn(
          "group flex items-center h-[4.8rem]  border border-slate-500  focus-within:border-lime",
          "rounded-tl-[0.4rem] rounded-bl-[0.4rem] rounded-[0.4rem] text-preset-4",
          // error ? "border-red" : "",
          suffix && "flex-row-reverse"
        )}
      >
        <span
          className={cn(
            "bg-slate-100 text-slate-700 border-slate-700 text-preset-4",
            "group-focus-within:bg-lime",
            " h-full px-[1.6rem]  text-center rounded-tl-[0.4rem] rounded-bl-[0.4rem]",
            "flex items-center justify-center text-preset-4 font-bold",
            // error && "bg-red font-bold text-white",
            suffix &&
              "rounded-tl-[0rem] rounded-bl-[0rem] rounded-tr-[0.4rem] rounded-br-[0.4rem]"
          )}
        >
          {prefix && prefix}
          {suffix && suffix}
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "peer w-full text-preset-4  outline-none bg-transparent",
            "pl-[1.6rem]"
          )}
          // style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
      </div>
    </div>
  );
};

export default CustomInput;
