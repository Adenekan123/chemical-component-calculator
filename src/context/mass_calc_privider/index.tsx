import React, { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";
import useFoem from "../../components/hooks/useFoem";
import { TComponents, Tforms, TinitialContext } from "../../types";



const initialContext:TinitialContext = {
  components:[],
  set_mass_of_des: (n:number)=>{},
  forms:[],
  handleAddForm:()=>{},
  handleRemoveForm:(index:number)=>{},
  updateFormFields:(index: number,
    name: keyof Tforms,
    value: TComponents | number)=>{},
    calculate:()=>{}
}
export const MassCalcContext = createContext<TinitialContext>(initialContext);



const MassCalcProvider = ({children}:{children:ReactNode}) => {
  const [components, setComponents] = useState<TComponents[]>([]);
  const [mass_of_des, set_mass_of_des] = useState(0);
  const {
    forms,
    handleAddForm,
    handleRemoveForm,
    updateFormFields,
    handleCalculation,
  } = useFoem();

  const getComponentsAsync = useCallback(async () => {
    try {
      const request = await fetch("../data.json");
      const response = await request.json();
      if (response && Array.isArray(response)) setComponents(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const calculate = useCallback(()=>{
    if(!mass_of_des) return alert("Enter Mass Des");
    handleCalculation(mass_of_des)
  },[mass_of_des,handleCalculation])

  useEffect(() => {
    getComponentsAsync();
  }, []);

  const value = {components,forms,set_mass_of_des,handleAddForm,handleRemoveForm,updateFormFields,calculate}
  return <MassCalcContext.Provider value={value}>{children}</MassCalcContext.Provider>;
};

export default MassCalcProvider;
