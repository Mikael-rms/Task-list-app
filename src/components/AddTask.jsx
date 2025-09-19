function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="space-y-4 p-6 bg-slate-600 rounded-md shadow flex flex-col">
            <input className="bg-slate-100 border border-slate-300 outline-slate-800 px-4 py-2 rounded-md" type="text" placeholder="Digite o título da tarefa" value={title} onChange={(event) => setTitle(event.target.value)}/>
            <input className="bg-slate-100 border border-slate-300 outline-slate-800 px-4 py-2 rounded-md" type="text" placeholder="Digite a descrição da tarefa" value={description} onChange={(event) => setDescription(event.target.value)}/>
            <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-400">Adicionar</button>
        </div>
    )
}

export default AddTask;