import './App.css'

function App() {

    return (
        <>
            <div className="container bg-gray-600 mx-auto">
                <h1 className="text-4xl font-bold text-blue-400 text-center mt-5">React + Tailwind.css</h1>
                <div
                    className="bg-amber-700 w-35 rounded-4xl text-center mx-auto border-8 border-r-amber-200 mt-10">Блок
                    с div
                </div>
                <button
                    className="bg-emerald-500 w-1/4 rounded-full mx-auto block mt-5 hover:bg-red-400 transition-colors duration-300 p-1 animate-pulse">Кнопка
                </button>

            </div>
            <div className="flex flex-col md:flex-row justify-between items-center p-5 m-3 bg-lime-700">
                <div className="flex dlex-col items-center bg-white shadow-lg rounded-lg p-3 m-1">
                    <img
                        className="rounded-full mb-2 w-40 max-h-24 transition-transform duration-200 transform hover:scale-105"
                        src="https://icdn.lenta.ru/images/2023/03/10/03/20230310035249643/square_1280_15ab7de37f82eba42e9f0a58fbe70f09.jpg"
                        alt="Рисунок 1"/>
                    <h2 className="text-xl font-semibold"></h2>
                    <p className="text-gray-50"></p>
                </div>
                <div className="flex dlex-col items-center bg-white shadow-lg rounded-lg p-3 m-1">
                    <img
                        className="rounded-full mb-2 w-40 max-h-24 transition-transform duration-200 transform hover:scale-105"
                        src="https://media.2x2tv.ru/content/images/2020/12/------13.jpg" alt="Рисунок2"/>
                    <h2 className="text-xl font-semibold"></h2>
                    <p className="text-gray-50"></p>
                </div>
                <div className="flex dlex-col items-center bg-white shadow-lg rounded-lg p-3 m-1">
                    <img
                        className="rounded-full mb-2 w-40 max-h-24 transition-transform duration-200 transform hover:scale-105"
                        src="https://static.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png" alt="Рисунок 3"/>
                    <h2 className="text-xl font-semibold"></h2>
                    <p className="text-gray-50"></p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 bg-emerald-500">
                <div className="bg-blue-400 rounded-lg overflow-hidden"><img
                    className="w-full h-48 object-cover transition-transform duration-200 transform hover:scale-105"
                    src="https://shikimori.io/uploads/poster/characters/211202/main_2x-3fd8c4075cf0f26cd8f293f7b9570cc4.webp"
                    alt="Рисунок 4"/></div>
                <div className="bg-blue-400 rounded-lg overflow-hidden"><img
                    className="w-full h-48 object-cover transition-transform duration-200 transform hover:scale-105"
                    src="https://iv.okcdn.ru/getVideoPreview?id=7787656448516&idx=13&type=39&tkn=_VECjHI5pZPU1uL-Vyp4jHsyQDM&fn=vid_w"
                    alt="Рисунок 5"/></div>
                <div className="bg-blue-400 rounded-lg overflow-hidden"><img
                    className="w-full h-48 object-cover transition-transform duration-200 transform hover:scale-105"
                    src="https://static.okko.tv/images/v4/0c6400f4-0ac2-4f4f-897b-af7b1559a5a1" alt="Рисунок 6"/></div>
                <div className="bg-blue-400 rounded-lg overflow-hidden"><img
                    className="w-full h-48 object-cover transition-transform duration-200 transform hover:scale-105"
                    src="https://sun9-67.userapi.com/s/v1/ig2/gbtsNcMW9tYI1gF24iRg_33dwim8Zv9Rw-Kz69dpw6khyFIY7O--o0Wo9KftXcg5M-N2_BQ_fu03ADuvS7A5kmKM.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720&from=bu&cs=640x0"
                    alt="Рисунок 7"/></div>
            </div>
            <div className="flex flex-wrap justify-center p-5 bg-blue-900">
                <div className="flex dlex-col gap-2 bg-cyan-400 shadow-md rounded-lg m-3 p-4 w-64">
                    <h2 className="text-lg font-bold">Карточка 1</h2>
                    <p className="text-gray-400">Описание карточки 1</p>
                    <button className="mt-2 bg-amber-600 text-amber-950 rounded-lg py-2 cursor-pointer">Купить</button>
                </div>
                <div className="flex dlex-col gap-2 bg-cyan-400 shadow-md rounded-lg m-3 p-4 w-64">
                    <h2 className="text-lg font-bold">Карточка 2</h2>
                    <p className="text-gray-400">Описание карточки 2</p>
                    <button className="mt-2 bg-amber-600 text-amber-950 rounded-lg py-2 cursor-pointer">Купить</button>
                </div>
                <div className="flex dlex-col gap-2 bg-cyan-400 shadow-md rounded-lg m-3 p-4 w-64">
                    <h2 className="text-lg font-bold">Карточка 3</h2>
                    <p className="text-gray-400">Описание карточки 3</p>
                    <button className="mt-2 bg-amber-600 text-amber-950 rounded-lg py-2 cursor-pointer">Купить</button>
                </div>
                <div className="flex dlex-col gap-2 bg-cyan-400 shadow-md rounded-lg m-3 p-4 w-64">
                    <h2 className="text-lg font-bold">Карточка 4</h2>
                    <p className="text-gray-400">Описание карточки 4</p>
                    <button className="mt-2 bg-amber-600 text-amber-950 rounded-lg py-2 cursor-pointer">Купить</button>
                </div>
            </div>
        </>
    )
}

export default App
