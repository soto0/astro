import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { spaceAPI } from "../services/search";
import { newsAPI } from "../services/news";

const reducers = combineReducers({
    [spaceAPI.reducerPath]: spaceAPI.reducer,
    [newsAPI.reducerPath]: newsAPI.reducer
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware().concat(spaceAPI.middleware, newsAPI.middleware)
});

export type TypeRootState = ReturnType<typeof store.getState>;
