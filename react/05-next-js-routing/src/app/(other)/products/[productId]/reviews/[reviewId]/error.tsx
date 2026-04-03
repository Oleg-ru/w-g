'use client'

//Данный подход перезагружает полностью всю страницу
// export default function ErrorBoundary({error}: {error: Error}) {
//     return (
//         <div className="flex justify-center items-center">
//             <div className="flex flex-col p-4 bg-red-100 text-red-900 rounded w-1/2">
//                 ⚠ {error.message}
//                 <button onClick={() => {window.location.reload()}}
//                         className="m1-2 px-3 py-1 bg-red-500 text-white w-max cursor-pointer hover:bg-red-800 rounded p-3 mt-4"
//                 >Попробовать снова</button>
//             </div>
//         </div>
//     );
// }

// export default function ErrorBoundary({error, reset}: { error: Error; reset: () => void }) {
//     return (
//         <div className="flex justify-center items-center">
//             <div className="flex flex-col p-4 bg-red-100 text-red-900 rounded w-1/2">
//                 <p>Перезагрузим только часть интерфейса но из-за серверной page (где возникает ошибка) это не решит проблему</p>
//                 ⚠ {error.message}
//                 <button onClick={reset}
//                         className="m1-2 px-3 py-1 bg-red-500 text-white w-max cursor-pointer hover:bg-red-800 rounded p-3 mt-4"
//                 >Попробовать снова
//                 </button>
//             </div>
//         </div>
//     )
// }

import {useRouter} from "next/navigation";
import {startTransition} from "react"; //плавное обновление

export default function ErrorBoundary({error, reset}: { error: Error; reset: () => void }) {
    const router = useRouter();
    const handleRetry = () => {
        startTransition(() => { //плавное обновление
            reset(); //сброс клиентского состояния
            router.refresh(); // перезагрузка серверных данных
        });
    };

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col p-4 bg-red-100 text-red-900 rounded w-1/2">
                <p>Перезагрузим только часть интерфейса но из-за серверной page (где возникает ошибка) это не решит проблему</p>
                ⚠ {error.message}
                <button onClick={handleRetry}
                        className="m1-2 px-3 py-1 bg-red-500 text-white w-max cursor-pointer hover:bg-red-800 rounded p-3 mt-4"
                >Попробовать снова
                </button>
            </div>
        </div>
    )
}