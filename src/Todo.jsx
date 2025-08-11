import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Todo()
{
    let [todos,seTodo]=useState([{task:"sample text",id:uuidv4()}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>
    {
        seTodo((prevTodo)=>
        {
           return [...prevTodo,{task:newTodo,id:uuidv4()}];
        });
        setNewTodo("");
    }
    let updateValue=(event)=>{
        setNewTodo(event.target.value);
    }
    let todoDelete=(id)=>{
        seTodo((prevTodos)=>prevTodos.filter((prevTodos)=>prevTodos.id!=id));
    }
let UpperCaseAll = () => {
    seTodo(
        todos.map((todo) => {
        return {
            ...todo,
            task: todo.task.toUpperCase(),
        };
    }));
};

   let OneUpdate=(id)=>{
      seTodo(
        todos.map((todo) => {
        if(todo.id==id)
        {
            return {
            ...todo,
            task: todo.task.toUpperCase(),
           };
        }
        else{
            return todo;
        }
    }));
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
                (todo)=>
                (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;  &nbsp;  &nbsp; 
                        <button onClick={()=>todoDelete(todo.id)}>Delete</button>
                        <button onClick={()=>OneUpdate(todo.id)}>UpperCase One</button>
                    </li>
                )
                )
                }
        </ul>
        <button onClick={UpperCaseAll}>Upper case all</button>
       </div>
    );
}