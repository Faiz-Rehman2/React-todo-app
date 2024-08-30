import { useState , useRef } from "react"

const App = () => {
  const [todo , setTodo] = useState([]);
  const todoVal = useRef()

  const addTodo = (event)=>{
    event.preventDefault();
    todo.push(todoVal.current.value)
    setTodo([...todo]);
    todoVal.current.value = ""  
  }

  const deleteTodo = (index)=>{
    todo.splice(index , 1);
    setTodo([...todo]);
  }

  const editTodo = (index)=>{
    const editedVal = prompt("enter value");
    todo.splice(index , 1 , editedVal);
    setTodo([...todo]);
    
  }


  return (
    <>

    <h1>Todo App</h1>
    <form onSubmit={addTodo}>
      <input type="text" placeholder="Enter todos" ref={todoVal} />
      <button type="submit">submit</button>
    </form>
    <ul>
      {todo.map((item , index)=>{
        return <div key={index}>
          <li >{item}</li>
          <button onClick={()=> deleteTodo(index)}>delete</button>
          <button onClick={()=> editTodo(index) }>edit</button>
        </div>
      })}
    </ul>
    
    </>
  )
}

export default App