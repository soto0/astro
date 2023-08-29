import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ISpace } from "../models/ISpace";
import { SPACE_URL } from "../constants/apis";

export const spaceAPI = createApi({
    reducerPath: "spaceAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: SPACE_URL
    }),
    endpoints: (build) => ({
        getSpaceData: build.query<ISpace[], { type: string } | { q: string | undefined }>({
            query: (item) => ({
                url: "space",
                method: "GET",
                params: item
            })
        })
    })
});
