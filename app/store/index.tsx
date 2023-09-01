import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { spaceObjectsAPI } from "../services/spaceObjects";
import { newsAPI } from "../services/news";

const reducers = combineReducers({
    [spaceObjectsAPI.reducerPath]: spaceObjectsAPI.reducer,
    [newsAPI.reducerPath]: newsAPI.reducer
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware().concat(spaceObjectsAPI.middleware, newsAPI.middleware)
});

export type TypeRootState = ReturnType<typeof store.getState>;
