export type TComponents = {
  components: string;
  mw: number;
};

export type TInputs = {
  component:string;
  molecular_weight:number
  mass_of_des:number;
  molar_ratio:number
}


export type Tforms = {
  result: number;
  component: TComponents;
  molar_ratio: number;
};


export type TinitialContext = {
  components:TComponents[],
  set_mass_of_des: (n:number)=>void,
  forms:Tforms[],
  handleAddForm:()=>void,
  handleRemoveForm:(index:number)=>void,
  updateFormFields:(index: number,
    name: keyof Tforms,
    value: TComponents | number)=>void,
    calculate:()=>void
}