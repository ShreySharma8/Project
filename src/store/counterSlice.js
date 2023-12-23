import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmt: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmt } = counterSlice.actions; // Corrected line

export default counterSlice.reducer;