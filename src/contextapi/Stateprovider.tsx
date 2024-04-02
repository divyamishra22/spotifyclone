
 import { createContext, useContext, useReducer, useState } from "react";
import reducer, { initialState } from "./Reducers.ts";
import { StateContext } from "./StateContext.ts";
import React from 'react';

// export const StateContext = createContext(null);


type childrentype ={
  children: React.ReactNode
}


export const Stateprovider = ({children}:childrentype) => {

  const[initialStatetype,dispatch] = useReducer(reducer, initialState);
     
  <StateContext.Provider value = {{initialStatetype,dispatch, }}>
    {children}
     </StateContext.Provider>
}

  
  // export  { state, dispatch };
 

export const useStateProvider = () => useContext(StateContext);