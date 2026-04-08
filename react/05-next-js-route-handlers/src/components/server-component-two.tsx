import fs from "fs";

function ServerComponentTwo() {
    fs.readFileSync('src/components/server-component-one.tsx', 'utf-8')
    return (
        <h1>
           Второй серверный компонент
        </h1>
    );
}

export default ServerComponentTwo;