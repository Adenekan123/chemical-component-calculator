import React, { useContext } from "react";
import { MassCalcContext } from "../../context/mass_calc_privider";

const Add = () => {
  const {handleAddForm} = useContext(MassCalcContext)
  return (
    <div className="flex justify-center items-center bg-[#28292b] rounded-md py-8 px-12 shadow-md min-h-[260px]">
      <div className="-inline-block p-6 bg-[#484b4d] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
          onClick={handleAddForm}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
    </div>
  );
};

export default Add;
