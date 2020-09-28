import React, {useReducer, useContext, createContext} from "react";
import reducer from "./reducers";
import {SET} from "./actionTypes";

// interfaces
interface IStore {
    locale: string
}

interface IActions {
    setLanguage(locale: string): any,
}

let initialState: any;
// context
const ApplicationContext = createContext<[IStore, IActions]>(initialState);


const Store = ({children}: any) => {

    const initialState: IStore = {
        locale: "tr"
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const actions: IActions = {
        setLanguage(locale: string): any {
            dispatch({type:SET,locale})
        }
    }

    return (
        <ApplicationContext.Provider value={[
            state as IStore,
            {...actions}
        ]}>
            {children}
        </ApplicationContext.Provider>
    )
}

export const useApplicationState = () => {
    return useContext(ApplicationContext);
}

export default Store



