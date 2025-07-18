import { createSlice } from "@reduxjs/toolkit";
import { RootState, store } from "../../redux/store";

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 101,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plus: (state) => {
      state.value++;
    },
  },
});

export const { plus } = counterSlice.actions;
export const counterSelector = (store: RootState) => store.counterReducer;
export default counterSlice.reducer;
