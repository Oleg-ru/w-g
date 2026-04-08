'use client'

import React, {useState} from "react";
import ClientComponentTwo from "@/components/client-component-two";
import ServerComponentOne from "@/components/server-component-one";

function ClientComponentOne({children} : {children: React.ReactNode}) {
    const [isValidate, setIsValidate] = useState(false)
    return (
        <>
            <h1>
                Первый клиентский компонент
            </h1>
            {/*<ClientComponentTwo />*/}
            {/*<ServerComponentOne />*/}
            {children}
        </>
    );
}

export default ClientComponentOne;