import React, { HTMLAttributes } from "react";

export interface TInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

const UiInput = ({ label, ...rest }: TInput) => {
  return (
    <div className="flex flex-col gap-y-3 text-left md:text-lg">
      <label htmlFor="mratio" className="text-slate-300">
        {label ? label + ":" : ""}
      </label>
      <input
        {...rest}
        className="p-4 bg-[#313335] rounded-sm text-white border-0 outline-white focus:outline-white shadow-none placeholder:text-slate-400 block w-full"
      />
    </div>
  );
};

export default UiInput;
