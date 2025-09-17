import { useState } from "react";
import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";

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
    }])

function onTaskClick(taskId){
  const newTasks = tasks.map(task => {
    if (task.id === taskId){
      return {...task, isCompleted: !task.isCompleted}
    }

    return task;
  })
  setTasks(newTasks);
}

function onDeleteTask(taskId){
  const newTasks = tasks.filter(task => task.id !== taskId);
  setTasks(newTasks);
}

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
        <h1 className="text-3xl m-8 text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask /> 
        <Tasks tasks = {tasks} onTaskClick={onTaskClick} onDeleteTask={onDeleteTask}/>
        </div>
    </div>
  )
}

export default App;