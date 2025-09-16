import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/tasks";

function App(){
    const [tasks, setTasks] = useState([{
      id: 1,
      title: "Estudar React",
      description: "Estudar React até o fim do curso",
      isCompleted: false
    }, {
      id: 2,
      title: "Estudar Node.js",
      description: "Estudar Node.js até o fim do curso",
      isCompleted: false
    }, {
      id: 3,
      title: "Estudar TypeScript",
      description: "Estudar TypeScript até o fim do curso",
      isCompleted: false
    }, {
      id: 4,
      title: "Estudar MongoDB",
      description: "Estudar MongoDB até o fim do curso",
      isCompleted: false
    }]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <Tasks tasks = {tasks} />
        </div>
    </div>
  )
}

export default App;