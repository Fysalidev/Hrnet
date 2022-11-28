import { createSlice } from "@reduxjs/toolkit";
import { list } from "../data/mockEmployees";

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
  },

  reducers: {
    add: (state, action) => {
      state.employees.push(action.payload);
    },

    fixture: (state) => {
      list.map((mokedEmployee) => state.employees.push(mokedEmployee));
    },

    reset: (state) => {
      state.employees = [];
    },
  },
});

export const { add } = employeesSlice.actions;
export const employeesReducer = employeesSlice.reducer;
