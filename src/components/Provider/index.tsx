import { createContext, useState } from "react";

export const Context = createContext({} as any);

interface Provider {
    children: any
}

export const Provider = ({children}: Provider) => {
    const [currWords, setCurrWords] = useState({} as Promise<object[]>);

    const value = {currWords, setCurrWords};
    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
}
