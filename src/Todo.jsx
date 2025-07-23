import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
export default function Todo()
{
    let [todos,seTodo]=useState([]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>
    {
        seTodo([...todos,newTodo]);
        setNewTodo("");
    }
    let updateValue=(event)=>{
        setNewTodo(event.target.value);
    }
    return(
       <div>
        Enter the Value:
        <input placeholder="add a task" value={newTodo} onChange={updateValue}></input>
        <br />
        <br />
        <button onClick={addNewTask}>Submit</button>
        <br />
         <br />
          <br />
        <h4> To Do List</h4>
        <ul>
            {
            todos.map
                (
                (todo)=>(<li>{todo}</li>)
                )
                }
        </ul>
       </div>
    );
}