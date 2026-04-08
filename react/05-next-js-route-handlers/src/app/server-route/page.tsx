import {serverSideFunction} from "@/utils/server-utils";
//import {clientFunction} from "@/utils/client";

function ServerRoutePage() {

    const result = serverSideFunction();
    //const result = clientFunction();//клиентская функция, при включении ошибка от пакета client-only

    return (
        <div>
            🤖 Серверный компонент: {result}
        </div>
    );
}

export default  ServerRoutePage;