import React from "react";
import cn from "../../utils/cn";

interface CustomRadioProps {
  label: string;
  value: string;
  name: string;
  checked: boolean;
  color?: string; // Accepts Tailwind colors like "blue-500", "red-500"
  onChange: (value: string) => void;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  label,
  value,
  name,
  checked,
  onChange,
}) => {
  return (
    <label
      className={cn(
        "flex gap-[1.6rem] items-center h-[4.8rem] border px-[2.4rem] rounded-[0.4rem] space-x-2 cursor-pointer focus-within:border-lime",
        "hover:border-lime mb-[1.2rem]",
        checked ? "bg-lime/15 border-lime" : ""
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="hidden"
      />
      <div
        className={`w-[2.4rem] h-[2.4rem] rounded-full border-[0.2rem]  flex items-center justify-center transition-all ${
          checked ? `border-lime` : "border-slate-700"
        }`}
      >
        {checked && (
          <div className={`w-[1rem] h-[1rem] bg-lime rounded-full`}></div>
        )}
      </div>
      <span className="text-gray-700 text-preset-3 tracking-normal">
        {label}
      </span>
    </label>
  );
};

export default CustomRadio;
