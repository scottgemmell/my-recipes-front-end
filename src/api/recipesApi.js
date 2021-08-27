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
		// postRecipeById: builder.query({
		// 	query: (id) => `recipes/${id}`,
		// }),
		updateRecipeById: builder.mutation({
			// note: an optional `queryFn` may be used in place of `query`
			query: ({ id, ...patch }) => ({
			  url: `recipes/${id}`,
			  method: "PATCH",
			  body: patch,
			}),
			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response) => response,
			// invalidatesTags: ['Post'],
			// onQueryStarted is useful for optimistic updates
			// The 2nd parameter is the destructured `MutationLifecycleApi`
			// async onQueryStarted(
			//   arg,
			//   { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
			// ) {},
			// The 2nd parameter is the destructured `MutationCacheLifecycleApi`
			// async onCacheEntryAdded(
			//   arg,
			//   {
			// 	dispatch,
			// 	getState,
			// 	extra,
			// 	requestId,
			// 	cacheEntryRemoved,
			// 	cacheDataLoaded,
			// 	getCacheEntry,
			//   }
			// ) {},
		})
		// getPokemonByName: builder.query({
		// 	query: (name) => `pokemon/${name}`,
		// }),
	}),
});

export const { useGetRecipesQuery, useGetRecipeByIdQuery, useUpdateRecipeByIdMutation } = recipesApi;