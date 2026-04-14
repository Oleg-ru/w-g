import './App.css'
import {useState} from "react";
import TodoList from "./assets/component/TodoList.jsx";
import InputTask from "./assets/component/InputTask.jsx";

function App() {

  const [text, setText] = useState('')
  const [todos, setTodos] = useState([]);

  const handleInput = (newText) => {
    setText(newText);
  };
  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: text,
        completed: false,
      }]);
      setText('')
    }
  };

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : {...todo}))
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  return (
    <div className="border p-4">
      <InputTask handleInput={handleInput} addTodo={addTodo} text={text}/>
      <TodoList todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
