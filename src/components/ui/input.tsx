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
    <div className="flex flex-col gap-y-2 text-left">
      <label htmlFor="mratio" className="text-slate-300 text-lg">
        {label ? label + ":" : ""}
      </label>
      <input
        {...rest}
        className="p-4 bg-[#313335] rounded-sm text-white border-0 outline-white focus:outline-white shadow-none"
      />
    </div>
  );
};

export default UiInput;
