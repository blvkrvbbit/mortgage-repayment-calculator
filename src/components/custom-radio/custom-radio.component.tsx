import React from "react";
import cn from "../../utils/cn";

interface CustomRadioProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div>
      {options.map((option) => (
        <label
          className={cn(
            "flex gap-[1.6rem] items-center h-[4.8rem] border px-[2.4rem] rounded-[0.4rem] space-x-2 cursor-pointer focus-within:border-lime",
            "hover:border-lime mb-[1.2rem]",
            value === option.value ? "bg-lime/15 border-lime" : ""
          )}
          key={option.value}
          style={{ cursor: "pointer" }}
        >
          <input
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <div
            className={`w-[2.4rem] h-[2.4rem] rounded-full border-[0.2rem]  flex items-center justify-center transition-all ${
              value === option.value ? `border-lime` : "border-slate-700"
            }`}
          >
            {value === option.value && (
              <div className={`w-[1rem] h-[1rem] bg-lime rounded-full`}></div>
            )}
          </div>
          <span className="text-gray-700 text-preset-3 tracking-normal">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

// ✅ Explicitly export CustomRadioProps for better type inference
export type { CustomRadioProps };
export default CustomRadio;
