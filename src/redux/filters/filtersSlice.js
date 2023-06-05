import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filtersSlice = createSlice({
  name: "filter",
  initialState: {
  status: statusFilters.all,
},
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    }
  }
})
export const { setStatusFilter } = filtersSlice.actions;
export default filtersSlice;