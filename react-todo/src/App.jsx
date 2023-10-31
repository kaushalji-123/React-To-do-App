import {useState} from 'react';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [InputVal, setInputVal] = useState("");  

  function writeTodo(e){
    setInputVal(e.target.value)
    console.log(InputVal);
  } 
  function addTodo(){
    if(InputVal!=""){
    setTodos(prevTodos => [...prevTodos,InputVal]);
    setInputVal("");}
  }
function delTodo(todoIndex){
  setTodos((prevTodos) =>
  prevTodos.filter((prevTodo,prevTodoIndex) =>
  {
    return prevTodoIndex != todoIndex;
  })
  );
  console.log(todos);
}
console.log(todos);
  return (
    <main>
      <div className="wrapper">
      <h1>React ToDo List  </h1>
      <div className="input-container">
        <input 
        type="text"
        placeholder='Add Your Task'  value={InputVal}
        onChange={writeTodo}
        />
        <button onClick={addTodo}> Add Task</button>
      </div>
      <div className="container">{
        todos.map((todo,index)=>{
          return(
            <div className="todo" key={index}>
              <p>{todo}</p>
            <div className="action">
              <input type="checkbox" />
              <button onClick={()=> delTodo(index )} >Delete</button>
            </div> 
        </div>
          )
          })
      }
      </div>
      </div>
    </main>
  );
}

export default App
