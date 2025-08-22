import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 1;

const reviewSlice = createSlice({
  name: "reviewCount",
  initialState,
  reducers: {
    next: (state) => {
      if (state < 3) {
        return state + 1;
      }
      return 1;
    },
    prev: (state) => {
      if (state > 1) {
        return state - 1;
      }
      return 3;
    },
  },
});

export const { next, prev } = reviewSlice.actions;
export default reviewSlice.reducer;
