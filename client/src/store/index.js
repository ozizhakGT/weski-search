import {createContext, useReducer} from "react";
import reducers from "../reducers";

export const GlobalContext = createContext(null);

export default function Provider({ children }) {
    const metadata = useReducer(reducers.metadata, null);
    const rooms = useReducer(reducers.rooms, []);

    return (
        <GlobalContext.Provider value={{ metadata, rooms }}>
            {children}
        </GlobalContext.Provider>
    )
}