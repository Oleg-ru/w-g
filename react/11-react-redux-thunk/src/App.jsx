import './App.css'
import AddTodo from "./components/AddTodo.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  return (
    <>
      <div className='flex justify-center flex-col items-center pt-4'>
        <AddTodo />
        <TodoList />
      </div>
    </>
  )
}

export default App
