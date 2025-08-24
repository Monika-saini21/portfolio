import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "../features/darkmode";


export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
    
  }
});

export default store;