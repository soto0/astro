import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { searchAPI } from "../services/search";

const reducers = combineReducers({
    [searchAPI.reducerPath]: searchAPI.reducer
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(searchAPI.middleware)
});

export type TypeRootState = ReturnType<typeof store.getState>;
