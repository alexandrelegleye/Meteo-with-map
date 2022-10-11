import { configureStore } from "@reduxjs/toolkit";
import AdressReducer from "../reducers/adressReducers";

const store = configureStore({
  reducer: {
    adress: AdressReducer,
  },
});

export default store;