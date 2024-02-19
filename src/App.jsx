
function App() {
  return (
    <div className="wrapper w-full min-h-screen bg-gradient-to-tr from-[#414345] to-[#232526] px-6 md:px-72 py-8">
      <header className="text-center">
        <h2 className="font-[Orbitron] font-bold text-4xl md:text-5xl text-[#a5d8ff]">
          chemEmaster.
        </h2>
        <p
          className="text-lg md:text-xl mt-3 text-slate-300 leading-10"
        >
          This online calculator you can use for computing the average molecular
          weight (MW) of molecules by entering the chemical formulas (for
          example C3H4OH(COOH)3 ). Or you can choose by one of the next two
          option-lists, which contains a series of common organic compounds
          (including their chemical formula) and all the elements.
        </p>

        <section className="main text-sm mt-12 font-[Lato]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="flex flex-col gap-y-2 text-left span">
              <label htmlFor="components" className="text-white text-lg">
                Organic Compounds:
              </label>
              <input
                list="components"
                name="components"
                id="components"
                className="p-4 bg-[#a5d8ff] rounded-sm"
              />
              <datalist id="components">
                <option value="Edge"></option>
                <option value="Firefox"></option>
                <option value="Chrome"></option>
                <option value="Opera"></option>
                <option value="Safari"></option>
              </datalist>
            </div>
            <div className="flex flex-col gap-y-2 text-left">
              <label htmlFor="mratio" className="text-white text-lg">
                Molecular ratio:
              </label>
              <input
                list="mratio"
                name="mratio"
                id="mratio"
                className="p-4 bg-[#a5d8ff] rounded-sm"
              />
            </div>
            <div className="mt-auto text-right pt-3 md:pt-0 ">
              <button className="block w-full bg-slate-400 px-3 p-3 rounded-sm text-xl font-[600] hover:bg-slate-600  ">
                Calculate
              </button>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
