import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { spaceAPI } from "../services/search";

const reducers = combineReducers({
    [spaceAPI.reducerPath]: spaceAPI.reducer
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(spaceAPI.middleware)
});

export type TypeRootState = ReturnType<typeof store.getState>;
