import { useState, useEffect, useRef } from "react";
import { findUniqueSymbol } from "./utils/findSymbol";
import css from "../src/App.module.css";

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
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Find your unique symbol</h1>
        <form onSubmit={handleSubmit} className={css.form}>
          <textarea
            id="text"
            ref={ref}
            placeholder="Enter a text"
            className={css.textarea}
          ></textarea>
          <div className={css.btn_wrap}>
            <button type="submit" className={css.btn}>
              Find
            </button>
            <button type="button" onClick={handleReset} className={css.btn}>
              Reset
            </button>
          </div>
        </form>
        <div className={css.text_wrap}>
          <p className={css.text}>Unique Symbol:</p>
          <div className={css.symbol_wrap}>
            {uniqueSymbol ? (
              <p className={css.symbol}>{uniqueSymbol}</p>
            ) : (
              <p className={css.symbol}>?</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
