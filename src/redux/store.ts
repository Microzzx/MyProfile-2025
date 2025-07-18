"use client";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import counterReducer from "./slices/counterSlice";
import musicPlayerReducer from "./slices/musicPlayerSlice";

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
