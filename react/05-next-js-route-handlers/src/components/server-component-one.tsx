import fs from "fs";
import ServerComponentTwo from "@/components/server-component-two";
import ClientComponentOne from "@/components/client-component-one";

function ServerComponentOne() {
    console.log('Я серверный компонент?')
    fs.readFileSync('src/components/server-component-one.tsx', 'utf-8')
    return (
        <>
            <h1>
                Первый серверный компонент
            </h1>
            {/*<ServerComponentTwo />*/}
            {/*<ClientComponentOne />*/}
        </>
    );
}

export default ServerComponentOne;