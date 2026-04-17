import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./store/dataSlice.js";
import {useState} from "react";

function App() {
    const [showPosts, setShowPosts] = useState(false)

    const {posts, isLoading, error} = useSelector(state => state.data);

    const dispatch = useDispatch();
    const fetchPosts = () => {
        dispatch(fetchData())
    };
    const handleShowPosts = () => {
        if (posts.length > 0) {
            setShowPosts(true)
        }
    };

    return (
        <div className="flex flex-col gap-3 justify-center items-center">
            <button className="border cursor-pointer p-2 rounded hover:bg-blue-400 hover:text-amber-300 delay-75"
                    onClick={fetchPosts}
                    disabled={isLoading}
            >
                {isLoading ? 'Загрузка...' : 'Получить posts'}
            </button>
            <button className="border cursor-pointer p-2 rounded hover:bg-blue-400 hover:text-amber-300 delay-75"
                    onClick={handleShowPosts}>
                Показать posts
            </button>
            {error && <p className='border border-b-orange-500 text-red-500 p-2 rounded'>Ошибка: {error}</p>}
            {showPosts && <ul>
                {
                    posts.map(post => (
                        <li className="border p-2 m-1 rounded list-none flex flex-col items-start">
                            <div className="p-1">Id поста: {post.id}</div>
                            <div className="p-1">Заголовок поста: {post.title}</div>
                            <div className="p-1">Текст поста: {post.body}</div>
                        </li>
                    ))
                }
            </ul>}
        </div>
    )
}

export default App
