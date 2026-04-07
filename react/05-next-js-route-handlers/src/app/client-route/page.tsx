'use client'

//import {serverSideFunction} from "@/utils/server-utils";
import {clientFunction} from "@/utils/client";

function ClientRoutePage() {

    //const result = serverSideFunction(); серверная функция, при включении ошибка от пакета server-only
    const result = clientFunction();

    return (
        <div>
            🌍 Клиентский (фронт) компонент. Результат: {result}
        </div>
    );
}

export default ClientRoutePage;