import './App.css'
import {useState} from "react";
import TodoList from "./assets/component/TodoList.jsx";
import InputTask from "./assets/component/InputTask.jsx";
import {useDispatch} from "react-redux";
import {addTodo} from "./store/todoSlice.js";

function App() {

  const [text, setText] = useState('')
  const [todos, setTodos] = useState([]);

  const dispatch = useDispatch();

  const handleInput = (newText) => {
    setText(newText);
  };
  const addTask = () => {
    if (text.trim()) {
      dispatch(addTodo({text}))
      setText('')
    }
  };

  return (
    <div className="border p-4">
      <InputTask handleInput={handleInput} addTodo={addTask} text={text}/>
      <TodoList/>
    </div>
  )
}

export default App
