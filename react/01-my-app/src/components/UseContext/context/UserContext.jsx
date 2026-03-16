import {createContext} from "react";

export const UserContext = createContext(null);

export function UserProvider({children}) {
    const user = {
        name: 'Вальдемар',
        email: "example@email.ru"
    };
    return <UserContext.Provider value={user} >
        {children}
    </UserContext.Provider>
}