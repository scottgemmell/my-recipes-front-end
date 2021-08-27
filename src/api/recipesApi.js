import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipesApi = createApi({
	reducerPath: "recipesApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
	endpoints: (builder) => ({
		getRecipes: builder.query({
			query: () => "recipes",
		}),
		getRecipeById: builder.query({
			query: (id) => `recipes/${id}`,
		}),
		// getPokemonByName: builder.query({
		// 	query: (name) => `pokemon/${name}`,
		// }),
	}),
});

export const { useGetRecipesQuery, useGetRecipeByIdQuery } = recipesApi;