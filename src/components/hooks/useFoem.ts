import React, { useCallback, useState } from "react";
import { TComponents, Tforms } from "../../types";

const intial_form_state = {
  result: 0,
  component: {
    components: "",
    mw: 0,
  },
  molar_ratio: 0,
};
const initial_forms_state: Tforms[] = [intial_form_state, intial_form_state];

const useFoem = () => {
  //   const [conter, setCounter] = useState(2);
  const [forms, setForms] = useState<Tforms[]>(initial_forms_state);

  const updateFormFields = (
    index: number,
    name: keyof Tforms,
    value: TComponents | number
  ) => {
    const newForms = forms.map((form, i) => {
      if (index === i) return { ...form, [name]: value };
      return form;
    });

    setForms(newForms);
  };

  const handleAddForm = () => setForms((prev) => [...prev, intial_form_state]);

  const handleRemoveForm = useCallback(
    (index: number) => {
      const newForms = forms.filter((_, i) => i !== index);
      setForms(newForms);
    },
    [forms]
  );

  const handleCalculation = useCallback(
    (mass_of_des: number) => {
      const newForms = forms.map((form, index) => {
        if (!form.component || !form.molar_ratio) return form;
        const { molar_ratio, component } = form;
        const otherForms = forms.filter((_, i) => i !== index);
        let numerator = otherForms.reduce((acc: number, curr: Tforms) => {
          const { component, molar_ratio } = curr;
          return (acc += molar_ratio * component.mw);
        }, 0);
        let denumerator = molar_ratio * component.mw;

        return {
          ...form,
          result: mass_of_des / (1 + numerator / denumerator),
        };
      });
      setForms(newForms);
    },
    [forms]
  );

  return {
    forms,
    updateFormFields,
    handleAddForm,
    handleRemoveForm,
    handleCalculation,
  };
};

export default useFoem;
