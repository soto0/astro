import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { INews } from "../models/INews";
import { SPACE_URL } from "../constants/apis";

export const newsAPI = createApi({
    reducerPath: "newsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: SPACE_URL
    }),
    endpoints: (build) => ({
        getNewsData: build.query<INews[], void>({
            query: () => ({
                url: "news",
                method: "GET"
            })
        })
    })
});
