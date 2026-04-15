import './App.css'
import {useSelector} from "react-redux";

function App() {

  const allData = useSelector(state => state.data.posts);

  return (
    <>
      <button onClick={}>Получить posts</button>
      <button onClick={}>Показать posts</button>
    </>
  )
}

export default App
