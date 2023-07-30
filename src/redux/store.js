import { configureStore } from "@reduxjs/toolkit";

// Create a reducer function to handle state changes
const initialState = {
  "CPU / Processor": null,
  Motherboard: null,
  RAM: null,
  "Storage Device": null,
  "Power Supply Unit": null,
  Monitor: null,
};

const builderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHOOSE_COMPONENT":
      return { ...state, [action.componentType]: action.component };
    default:
      return state;
  }
};

// Action creator to choose a component
export const chooseComponent = (componentType, component) => {
  return { type: "CHOOSE_COMPONENT", componentType, component };
};

// Create the store with the reducer using configureStore
const store = configureStore({
  reducer: builderReducer,
});

export default store;
