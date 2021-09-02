import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipesApi = createApi({
	reducerPath: "recipesApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
	tagTypes: ["Recipes"],
	endpoints: (builder) => ({
		getRecipes: builder.query({
			query: () => "/recipes",
			providesTags: (result) => (
				result
					? // successful query
						[
						...result.map(({ id }) => ({ type: "Recipes", id })),
						{ type: "Recipes", id: "LIST" }
						]
					: // an error occurred, but we still want to refetch this query when `{ type: 'Recipes', id: 'LIST' }` is invalidated
						[{ type: "Recipes", id: "LIST" }]
			)
					
		}),
		getRecipeById: builder.query({
			query: id => `/recipes/${id}`,
			//invalidatesTags: [{ type: "Recipes", id: "LIST" }],
			providesTags: (result, error, id) => [{ type: "Recipes", id: "LIST" }],
		}),
		// postRecipeById: builder.query({
		// 	query: (id) => `recipes/${id}`,
		// }),
		updateRecipeById: builder.mutation({
			// note: an optional `queryFn` may be used in place of `query`
			query: ({ id, ...patch }) => ({
			  url: `/recipes/${id}`,
			  method: "PATCH",
			  body: patch,
			}),
			invalidatesTags: [{ type: "Recipes", id: "LIST" }],
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
		}),
		addRecipe: builder.mutation({
			query(body) {
				return {
					url: `recipes`,
					method: 'POST',
					body,
				}
			},
			// Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
			// that newly created post could show up in any lists.
			invalidatesTags: [{ type: 'Recipes', id: 'LIST' }],
		}),
	}),
});

export const { 
	useGetRecipesQuery, 
	useGetRecipeByIdQuery, 
	useUpdateRecipeByIdMutation, 
	useAddRecipeMutation, 
} = recipesApi;