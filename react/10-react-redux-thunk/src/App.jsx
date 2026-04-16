import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./store/dataSlice.js";

function App() {

  const allData = useSelector(state => state.data.posts);
    const dispatch = useDispatch();
    const fetchPosts = () => {
        dispatch(fetchData())
    };
    const showPosts = () => {
        console.log(allData)
    };

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <button className="border cursor-pointer p-2 rounded hover:bg-blue-400 hover:text-amber-300 delay-75" onClick={fetchPosts}>Получить posts</button>
      <button className="border cursor-pointer p-2 rounded hover:bg-blue-400 hover:text-amber-300 delay-75" onClick={showPosts}>Показать posts</button>
    </div>
  )
}

export default App
