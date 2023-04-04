import { useState, useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";

import {
    CLEAR_CART,
    REMOVE,
    DISPLAY_ITEMS,
    INCREASE,
    DECREASE
} from './actions';

const AppContext = createContext();

const InitialState = {
    loading: false,
    cart: [],
};

export const AppProvider = ({ children }) => {
    const greeting = 'hello';
    const [state, dispatch] = useReducer(reducer, InitialState);
    return(
       <AppContext.Provider value={ greeting }>
        {children}
       </AppContext.Provider> 
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};
















