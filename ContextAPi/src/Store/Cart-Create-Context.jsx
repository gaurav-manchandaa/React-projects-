import {createContext} from "react";

export  const CartContext = createContext({
    item :[],
    additemcontext :()=>{},
    updateitemcontext :()=>{}
})