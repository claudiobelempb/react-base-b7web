import { useState } from "react";
import { InputDefault } from "./components/InputDefault";

function App() {
  const [valueText, setValueText] = useState("");

  const handleOnChanger = (value) => {
    setValueText(value);
  };

  return (
    <div className="App">
      <>
        <h1>Lista de Tarefas</h1>

        <InputDefault type={"search"} onChanger={handleOnChanger} />

        <hr />

        <span>Texto procurado {valueText}</span>
      </>
    </div>
  );
}

export default App;
