import React, { useCallback, useContext, useMemo, useState } from "react";
import { TComponents, Tforms } from "../../types";
import { Button, Modal } from "flowbite-react";
import UiInput from "./input";
import { MassCalcContext } from "../../context/mass_calc_privider";
import { ComponentModal } from "./modal";

const Form = ({ values, index }: { values: Tforms; index: number }) => {
  const { updateFormFields, components, forms } = useContext(MassCalcContext);
  const [openModal, setOpenModal] = useState(false);

  const formDetails = useMemo(() => {
    return values;
  }, [values]);

  const selectComponent = useCallback(
    (component: TComponents) => {
      updateFormFields(index, "component", component);
      setOpenModal(false);
    },
    [index, updateFormFields]
  );

  return (
    <>
      <ComponentModal
        list={components}
        selectComponent={selectComponent}
        show={openModal}
        close={() => setOpenModal(false)}
      />
      <form className="flex flex-col gap-y-6 bg-[#28292b] rounded-lg py-8 px-6 md:px-12 shadow-md">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          <div className="relative gap-y-2 text-left span">
            <UiInput
              label="Select component"
              name="component"
              placeholder="type / select"
              onChange={({ target }) =>
                updateFormFields(index, "component", {
                  ...values.component,
                  components: target.value,
                })
              }
              value={
                formDetails.component ? formDetails.component.components : ""
              }
              required
            />
            <Button
              color="secondary"
              className=" rounded-none absolute right-2 h-10 w-10  bottom-0 -translate-y-[10px]  bg-gray-700 text-white"
              onClick={() => setOpenModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Button>
          </div>

          <UiInput
            label="Molecular Weight"
            placeholder="Enter here"
            type="number"
            value={
              formDetails.component.mw ? Number(formDetails.component.mw) : ""
            }
            required
            onChange={({ target }) =>
              updateFormFields(index, "component", {
                ...values.component,
                mw: Number(target.value),
              })
            }
          />
        </div>
        <UiInput
          label="Molar ratio"
          type="number"
          placeholder="Enter here"
          name="molar_ratio"
          id="molar_ratio"
          value={formDetails.molar_ratio ? Number(formDetails.molar_ratio) : ""}
          onChange={(e) =>
            updateFormFields(index, "molar_ratio", Number(e.target.value))
          }
          required
        />

        <h3 className="text-xl flex gap-x-12 justify-center font-bold text-[#a5d8ff]">
          {" "}
          {formDetails.result ? (
            <>
              <span className="text-slate-300">Mass of components (g)</span>{" "}
              <span>=</span> <span>{formDetails.result.toLocaleString()}</span>
            </>
          ) : null}
        </h3>
      </form>
    </>
  );
};

export default Form;
