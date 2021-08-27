import { createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "../../api/";

export const recipesSlice = createSlice({
	name: "recipes",
	initialState: {
		list: [],
		status: null
	},
	reducers: {

	},
	extraReducers: {
		[getRecipes.pending]: (state, action) => {
			state.status = "loading"
		},
		[getRecipes.fulfilled]: (state, action) => {
			state.list = action.payload
			state.status = "success"
		},
		[getRecipes.rejected]: (state, action) => {
			state.status = "failed"
		}
	}
});

export const selectRecipes = state => state.recipes;

export const selectRecipe = (state, rec) => state.recipes.list.find(recipe => +recipe.id === 1);