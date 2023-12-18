import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productReducer from "Slices/Product";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  //   middleware: (getDefaultMiddileware) => getDefaultMiddileware().concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
