import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ISpaceObjects } from "../models/ISpaceObjects";
import { SPACE_URL } from "../constants/apis";

export const spaceObjectsAPI = createApi({
    reducerPath: "spaceObjectsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: SPACE_URL
    }),
    endpoints: (build) => ({
        getSpaceData: build.query<ISpaceObjects[], { type: string } | { q: string | undefined }>({
            query: (item) => ({
                url: "space",
                method: "GET",
                params: item
            })
        })
    })
});