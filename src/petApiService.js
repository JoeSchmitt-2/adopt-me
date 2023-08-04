import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const petApi = createApi({
  reducerPath: "petApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pets-v2.dev-apis.com" }),
  endPoints: (builder) => ({
    getPet: builder.query({
      query: (id) => ({ url: "pers", params: { id } }),
      transformResponse: (response) => response.pets[0]
    })
  })
});

export const { useGetPetQuery } = petApi;
