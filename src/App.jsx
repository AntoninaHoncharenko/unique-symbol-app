import { useState, useEffect, useRef } from "react";
import { findUniqueSymbol } from "./utils/findSymbol";

function App() {
  const ref = useRef(null);
  const [text, setText] = useState("");
  const [uniqueSymbol, setUniqueSymbol] = useState(null);

  useEffect(() => {
    const symbol = findUniqueSymbol(text);
    setUniqueSymbol(symbol);
  }, [text]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = ref.current.value;
    setText(data);
  };

  const handleReset = () => {
    ref.current.value = "";
    setText("");
    setUniqueSymbol(null);
  };

  return (
    <>
      <h1>Find your unique symbol</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Enter a text</label>
        <textarea id="text" ref={ref}></textarea>
        <button type="submit">Find</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      <div>
        <p>Unique Symbol:</p>
        {uniqueSymbol && <span>{uniqueSymbol}</span>}
      </div>
    </>
  );
}

export default App;
