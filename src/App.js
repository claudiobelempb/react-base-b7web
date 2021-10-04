import { useState } from "react";
import { useEffect } from "react";
import { InputDefault } from "./components/InputDefault";

function App() {
  const [task, setTask] = useState([]);
  console.log(task);

  useEffect(() => {
    setTask([
      { title: "Comprar o bolo", done: false },
      { title: "Pegar o cachorro no petshop", done: true },
      { title: "Gravar aula", done: false },
    ]);
  }, []);

  function addAction(item) {
    let newTask = [...task];
    newTask.push({
      title: item,
      done: false,
    });
    setTask(newTask);
  }

  return (
    <div className="App">
      <>
        <h1>Lista de Tarefas</h1>

        <InputDefault
          placeholder={"Adicionar nova Tarefa"}
          onKeyUpInput={addAction}
        />
        <hr />

        <ul>
          {task.map((item, index) => (
            <li key={index}>
              {item.done && (
                <del>
                  {index}: {item.title} - {item.done.toString()}
                </del>
              )}

              {!item.done && (
                <>
                  {index}: {item.title} - {item.done.toString()}
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
