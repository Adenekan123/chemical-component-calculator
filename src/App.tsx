import Add from "./components/ui/add";
import Form from "./components/ui/form";

import React, {useContext } from "react";

import "./index.css";
import UiInput from "./components/ui/input";
import { MassCalcContext } from "./context/mass_calc_privider";

function App() {
  const { forms,calculate,set_mass_of_des } = useContext(MassCalcContext);
  return (
    <div className="wrapper w-full min-h-screen bg-gradient-to-tr from-[#414345] to-[#292b2c] px-0 md:px-72 py-8">
      <header className="text-center">
        <div className="px-6 md:px-0 mb-12">
          <h2 className="font-[Orbitron] font-bold text-4xl md:text-5xl text-[#a5d8ff]">
            chemEmaster.
          </h2>
          <p className="text-lg md:text-xl mt-3 text-slate-300 leading-10">
            This online calculator you can use for computing the average
            molecular weight (MW) of molecules by entering the chemical formulas
            (for example C3H4OH(COOH)3 ). Or you can choose by one of the next
            two option-lists, which contains a series of common organic
            compounds (including their chemical formula) and all the elements.
          </p>
        </div>

        <nav className="bg-[#292b2c] py-6 px-6 md:px-12 sticky top-0 z-10 grid grid-cols-3 gap-x-6 gap-y-8 items-center border-b border-slate-700">
          <UiInput
            type="number"
            placeholder="Mass of DES"
            name="mass_of_des"
            id="mass_of_des"
            required
            onChange={(e)=> set_mass_of_des(Number(e.target.value))}
          />
          <span className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-slate-300 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </span>
          <div className="mt-auto text-right pt-3 md:pt-0 ">
            <button
              type="submit"
              className="block w-full bg-slate-400 px-3 p-3 rounded-sm text-xl font-[600] hover:bg-slate-600"
              onClick={calculate}
            >
              Calculate
            </button>
          </div>
        </nav>
        <section className="main text-sm font-[Lato] grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 bg-[#323436] px-6 md:px-12 py-8 shadow-lg">
          {forms.map((form, index) => (
            <Form key={"form" + index} values={form} index={index} />
          ))}
          <Add />
        </section>
      </header>
    </div>
  );
}

export default App;
