import { ChevronRightIcon, TrashIcon } from "lucide-react"

function Tasks({tasks, onTaskClick, onDeleteTask}){ 
    return (
        <ul className="space-y-4 p-6 bg-slate-600 rounded-md shadow">
        {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
            <button 
            onClick={() => onTaskClick(task.id)} 
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md 
            ${task.isCompleted && 'line-through'
            }`}
            >
                {task.title}
            </button>
            <button className="bg-slate-400 p-2 rounded-md text-white transition-all duration-300 ease-in-out hover:scale-95">
                <ChevronRightIcon />
            </button>
            <button onClick={() => onDeleteTask(task.id)} className="bg-slate-400 p-2 rounded-md text-white transition-all duration-300 ease-in-out hover:scale-95">
                <TrashIcon />
            </button>
        </li>
    ))}
        </ul>
    );
}

export default Tasks