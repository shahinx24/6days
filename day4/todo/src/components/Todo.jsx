import { useState } from "react";
import "./todo.css"

export default function Todo() {
    const [task, setTask] = useState("")
    const [store, setStore] = useState([])
    const [ID, setId] = useState(1)

    function Add(){
        const newTask = { id: ID, text:task}
        setStore((prev)=>[...prev,newTask])
        setId((prev)=>prev+1)
        setTask("")
    }
    function dlt(id){
        setStore(store.filter((item)=>item.id !== id))
    }

    return (
        <div className="todo">
            <input onChange={(e) => setTask(e.target.value)} 
            value={task} className="input"
            placeholder="Enter Todo Task" />
            <button className="btn" onClick={Add} >Add Todo</button>
            <ul className="ul">
                {store.map((item)=>(
                    <li className="li" key={item.id}>{item.text}
                    <button className="btn-dgr" onClick={()=>dlt(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}