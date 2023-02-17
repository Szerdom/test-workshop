import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const elementsApi = createApi({
  reducerPath: "elementsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getElementDetails: builder.query<{ details: string }, string>({
      query: (name) => `elements/${name}`,
    }),
  }),
});

export const { useGetElementDetailsQuery } = elementsApi;
