import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ISearch } from "../models/ISearch";
import { SEARCH_URL } from "../constants/apis";

export const searchAPI = createApi({
    reducerPath: "searchAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: SEARCH_URL
    }),
    endpoints: (build) => ({
        getSearchData: build.query<ISearch[], { type: string }>({
            query: (item) => ({
                url: "search",
                method: "GET",
                params: item
            })
        })
    })
});
