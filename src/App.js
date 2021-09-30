import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { InputDefault } from "./components/InputDefault";

function App() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleName = (value) => {
    setName(value);
  };

  useEffect(() => {
    setTasks([
      { id: 1, title: "Comprar o bolo", done: false },
      { id: 2, title: "Pegar o cachorro no petshop", done: true },
      { id: 3, title: "Gravar aula", done: false },
    ]);
  }, []);

  return (
    <div className="App">
      <>
        <h1>Lista de Tarefas</h1>

        <InputDefault type={"search"} onChangerInput={() => console.log(1)} />

        <hr />

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.done && (
                <del>
                  {task.id}: {task.title} - {task.done.toString()}
                </del>
              )}

              {!task.done && (
                <>
                  {task.id}: {task.title} - {task.done.toString()}
                </>
              )}
            </li>
          ))}
        </ul>
      </>
    </div>
  );
}

export default App;
