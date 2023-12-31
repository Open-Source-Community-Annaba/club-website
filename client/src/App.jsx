import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState(
    "hello this is long text to see how the line wraps in a linux terminal"
  );
	const handleChange = (e) =>{
		setInput(e.target.value)
	}

  return (
    <>
      <div className="text-xl no-select font-bold w-full h-[100vh] bg-gray-800 text-white overflow-scroll pt-5">
        <div className="flex">
          <span className="text-green-500">guest@localhost</span>
          <span>:</span>
          <span className="text-blue-600">~</span>
          <span>$</span>
          <div className="pl-2 whitespace-pre-wrap font-normal font-mono">{input}</div>
		  <input type="text" className="bg-transparent border border-solid border-white focus:bg-white w-4 h-6 focus:outline-none text-transparent" onChange={handleChange} />
        </div>
      </div>
	  
    </>
  );
}

export default App;
