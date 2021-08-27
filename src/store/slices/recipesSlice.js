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
		[getRecipes.pending]: state => {
			state.status = "loading"
		},
		[getRecipes.fulfilled]: (state, action) => {
			state.list = action.payload
			state.status = "success"
		},
		[getRecipes.rejected]: state => {
			state.status = "failed"
		}
	}
});

