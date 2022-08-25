import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokeApi = createApi({
  reducerPath: "pokeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query({ query: () => "pokemon?limit=916" }),
  }),
});

export const { useGetAllPokemonQuery } = pokeApi;
