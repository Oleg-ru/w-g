import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./store/dataSlice.js";
import {useRef, useState} from "react";

function App() {
    const [showPosts, setShowPosts] = useState(false)
    const {posts, isLoading, error} = useSelector(state => state.data);

    const fetchPromise = useRef(null);

    const dispatch = useDispatch();
    const fetchPosts = () => {
        fetchPromise.current = dispatch(fetchData('https://jsonplaceholder.typicode.com/posts'));
    };
    const handleShowPosts = () => {
        if (posts.length > 0) {
            setShowPosts(true)
        }
    };

    const handleCancelFetch = () => {
        if (fetchPromise.current) {
            fetchPromise.current.abort()
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
            {isLoading && (
                <button onClick={handleCancelFetch}>Отменить запрос</button>
            )}
            {error && <p className='border border-b-orange-500 text-red-500 p-2 rounded'>Ошибка: {error}</p>}
            {showPosts && <ul>
                {
                    posts.map(post => (
                        <li key={post.id} className="border p-2 m-1 rounded list-none flex flex-col items-start">
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
