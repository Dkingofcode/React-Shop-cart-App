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

const url = "https://www.course-api.com/react-useReducer-cart-project";


const AppContext = createContext();

const InitialState = {
    loading: false,
    cart: new Map(),
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

   const fetchData =  async () => {
    dispatch({ type: LOADING });  
    const response = await fetch(url);
      const cart = await response.json();
      console.log(cart);
      dispatch({ type: DISPLAY_ITEMS, payload: [...state]})
   };
    useEffect(() => {
        fetchData();
    }, []);
   

    return(
       <AppContext.Provider value={{ ...state, clearCart, remove, increase, decrease, totalAmount, totalCost, fetchData}}>
        {children}
       </AppContext.Provider> 
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};
















