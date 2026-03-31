"use client"
import {useState} from "react";

export default function Home() {
    const [counter, setCounter] = useState(0)
  return (
    <div>
      Мое первое приложенице на Next.js
        <div>
            <h1>Приложения для счетчика:</h1>
            <h2>Значение счетчика: {counter}</h2>
            <button className="bg-amber-700 p-1 cursor-pointer rounded active:bg-amber-300 delay-10 active:text-cyan-950"
                onClick={() => {setCounter(prev => prev + 1)}}
            >Счетчик + 1</button>
        </div>
    </div>
  );
}
