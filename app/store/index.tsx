import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(),
});

export type TypeRootState = ReturnType<typeof store.getState>;
