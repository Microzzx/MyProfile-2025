"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ReactNode } from "react";

type ProviderProps = {
  children: ReactNode;
};

export function Providers({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
