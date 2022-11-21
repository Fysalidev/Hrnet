import { configureStore } from "@reduxjs/toolkit";
import { employeesReducer } from "./reducers";

export const store = configureStore({
    reducer: {
      employees: employeesReducer,
    },
  });