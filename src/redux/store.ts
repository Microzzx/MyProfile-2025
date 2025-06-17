import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import counterReducer from "../features/counter/counterSlice";
import musicPlayerReducer from "../features/musicPlayer/musicPlayerSlice";

const reducer = {
  counterReducer,
  musicPlayerReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//useDispatch<AppDispatch>(); to useAppDispatch();
export const useAppDispatch = () => useDispatch<AppDispatch>();
