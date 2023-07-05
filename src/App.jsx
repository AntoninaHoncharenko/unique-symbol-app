import { useState, useEffect } from "react";
import { findUniqueSymbol } from "./utils/findSymbol";

function App() {
  const myText = `C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup
  `;

  const [text, setText] = useState("");

  const [uniqueSymbol, setUniqueSymbol] = useState(null);

  useEffect(() => {
    setText(myText);
    const symbol = findUniqueSymbol(text);
    setUniqueSymbol(symbol);
  }, [text, myText]);

  return <>{uniqueSymbol && <div>{uniqueSymbol}</div>}</>;
}

export default App;
