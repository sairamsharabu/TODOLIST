
import React from 'react';
import './App.css';
import TodoList from './todolist';
function App() {
  const[name,setName]=React.useState("");
  const[todos,settodos]=React.useState([]);
  const subHandler=e=>{
    e.preventDefault();
    const nt=[...todos,name];
    settodos(nt);
    setName("");
  }
  const deleteHandler=(indexValue)=>{
    const nt=todos.filter((todo,index)=>index !== indexValue);
    settodos(nt);
  }
  return (
    <div>
      
    <center>
      
          <h5 id="h">TO DO MANAGEMENT APPLICATION</h5>
          <form onSubmit={subHandler}>
            
            <input type="text"  value={name} onChange={(text)=>setName(text.target.value)}></input>&nbsp;&nbsp;
            <input type="submit" name="add" value="add" style={{background:"red"}}></input>
          </form>
          <TodoList todolist={todos} deleteHandler={deleteHandler} ></TodoList>
       
    </center>

    </div>
  );
}

export default App;
