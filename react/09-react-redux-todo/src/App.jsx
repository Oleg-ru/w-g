import './App.css'
import {useState} from "react";

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
      <label>
        <input type="text"
               className="border border-blue-500 p-2"
               value={text}
               onChange={(e) => handleInput(e.target.value)}
        />
        <button onClick={addTodo}>Добавить задачу</button>
      </label>
      <ul>
        {todos.map(todo => <li key={todo.id}>
          <input type="checkbox"
                 checked={todo.completed}
                 onChange={() => toggleCompleted(todo.id)}
          />
          <span className={`${todo.completed ? 'line-through' : ''}`}>
            {todo.text}
          </span>
          <button onClick={() => {deleteTodo(todo.id)}}>❌</button>
        </li>)}
      </ul>
    </div>
  )
}

export default App
