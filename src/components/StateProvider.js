import React, { createContext, useContext, useReducer } from "react";

// Setup data layer
// Need this to track the basket

// This is the data layer
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
