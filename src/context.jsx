import { useState, useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import cartItems from "./data";

import {
    CLEAR_CART,
    REMOVE,
    DISPLAY_ITEMS,
    INCREASE,
    DECREASE,
    LOADING,
} from './actions';
import { getTotals } from "./utils";

const AppContext = createContext();

const InitialState = {
    loading: false,
    cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
    const greeting = 'hello';
    const [state, dispatch] = useReducer(reducer, InitialState);
    const [totalAmount, totalCost] = getTotals(state.cart);

   const clearCart = () => {
    dispatch({  type: CLEAR_CART });
   }

   const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
   }

   const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id }});
   }

   const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id }});
   }

    return(
       <AppContext.Provider value={{ ...state, clearCart, remove, increase, decrease, totalAmount, totalCost, }}>
        {children}
       </AppContext.Provider> 
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};
















