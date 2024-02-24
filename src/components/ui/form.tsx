import React, { useCallback, useContext, useMemo, useState } from "react";
import { TComponents, Tforms } from "../../types";
import { Button, Modal } from "flowbite-react";
import UiInput from "./input";
import { MassCalcContext } from "../../context/mass_calc_privider";

const Form = ({ values, index }: { values: Tforms; index: number }) => {
  const { updateFormFields, components, forms } = useContext(MassCalcContext);
  const [openModal, setOpenModal] = useState(false);

  const handleSelectComponent = useCallback(
    (component: TComponents) => {
      updateFormFields(index, "component", component);
      setOpenModal(false);
    },
    [index, updateFormFields]
  );

  const formDetails = useMemo(() => {
    return values;
  }, [values]);

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Component Lists</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col">
            {components.map((item: TComponents, index: number) =>
              item && item.components ? (
                <Button
                  color="white"
                  className="justify-start hover:bg-slate-100"
                  fullSized
                  key={index + "cmp"}
                  onClick={() => handleSelectComponent(item)}
                >
                  {item.components}
                </Button>
              ) : null
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
      <form className="flex flex-col gap-y-6 bg-[#28292b] rounded-lg py-8 px-12 shadow-md">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          <div className="flex flex-col gap-y-2 text-left span">
            <div className="block">
              <label htmlFor="mratio" className="text-slate-300 text-lg">
                Select Component:
              </label>
            </div>
            <Button
              className="p-3 h-full bg-[#313335] rounded-sm text-white border-0 outline-white focus:outline-white shadow-none"
              onClick={() => setOpenModal(true)}
            >
              {formDetails.component ? formDetails.component.components : ""}
            </Button>
          </div>

          <UiInput
            label="Molecular Weight"
            type="number"
            value={
              formDetails.component.mw ? Number(formDetails.component.mw) : ""
            }
            required
            readOnly
          />
        </div>
        <UiInput
          label="Molar ratio"
          type="number"
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
              <span className="text-slate-300">Mass of components (g)</span> <span>=</span>{" "}
              <span>{formDetails.result.toLocaleString()}</span>
            </>
          ) : null}
        </h3>
      </form>
    </>
  );
};

export default Form;
