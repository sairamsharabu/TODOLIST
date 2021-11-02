// import logo from './logo.svg';
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
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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
