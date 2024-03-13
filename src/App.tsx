function App() {
  return (
    <>
      <div className="tex-2xl mb-10 divide-y-2 bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        hello world
      </div>

      <div className="">
        <button className="rounded border-blue-700 bg-blue-500 px-4 py-2 text-white shadow-2xl">
          I am a button.
        </button>
        <input placeholder="Input placeholder." />
        <div className="mt-2 h-72 w-96 bg-blue-200 px-4 py-10">
          <div className="mx-20 h-40 w-20 bg-red-200"></div>
        </div>
        {/* aler dialog */}
        <div className="mx-auto w-96 rounded-md border-2 border-purple-500 bg-white p-4 shadow-md">
          <h1 className="mb-4 text-2xl font-semibold text-purple-600">
            An Important Alert
          </h1>
          <p className="mb-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            metus ornare, volutpat mauris sit amet, ornare est. Praesent massa
            nulla, lacinia sit amet neque sed, ornare porttitor ante. Nunc
            vulputate ultrices sollicitudin. Quisque in tristique felis, vel
            blandit felis. Aliquam ut vestibulum massa. Proin at lectus in risus
            ultrices interdum a fringilla nisi. Maecenas tristique augue at
            pretium consectetur.
          </p>
          <div className="space-x-1">
            <button className=" btn border-2 border-purple-600 bg-purple-400 ">
              Confirm
            </button>
            <button className="btn border-2 border-purple-600">Cancel</button>
          </div>
          <div></div>
        </div>
        <form className="container mx-auto space-y-6 rounded-md border-2 border-purple-600 bg-white p-4 text-purple-950 shadow-md">
          <div className="space-y-1">
            <label htmlFor="required" className="block text-sm font-semibold ">
              Required Field
            </label>
            <input
              id="required"
              placeholder="Required Field"
              required
              className="rounded-md border-2 border-purple-600 px-2 py-1"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="disabled" className="block text-sm font-semibold ">
              Disabled Field
            </label>
            <input
              id="disabled"
              placeholder="Disabled Field"
              disabled
              className="rounded-md border-2 border-purple-600 px-2 py-1 disabled:bg-purple-100"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="input" className="block text-sm font-semibold">
              Input Field{" "}
            </label>
            <input id="input" placeholder="Input Field" className="border-2 border-purple-600 px-2 py-1 rounded-md"/>
          </div>

          <div className="space-x-1">
            <input id="terms" type="checkbox" />
            <label htmlFor="terms">I accept the terms and conditions.</label>
          </div>

          <div className="space-x-2">
            <button className="btn-primary">Submit</button>
            <button className="text-red-600 btn-dangerous">Reset</button>
            <button disabled>Disabled</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
