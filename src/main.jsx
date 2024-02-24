import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import MassCalcProvider from "./context/mass_calc_privider/index.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Flowbite>
      <MassCalcProvider>
        <App />
      </MassCalcProvider>
      <DarkThemeToggle />
    </Flowbite>
  </React.StrictMode>
);
