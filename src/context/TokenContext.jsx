import { createContext, useState } from "react";


export const TokenContext = createContext();


export const TokenProvider = ({ children }) => {

    const [token, setToken] = useState(null); /* Context para guardar el token */
    const [log, setLog] = useState(false);/* Context para guardar que sí existe el token */


    return (
        <TokenContext.Provider value={{ token, setToken, log, setLog }}>
            {children}
        </TokenContext.Provider>
    )
}