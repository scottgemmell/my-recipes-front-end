import { createSlice } from "@reduxjs/toolkit";
import { recipesApi } from "../../api";

export const recipesSlice = createSlice({
	name: "recipes",
	initialState: {
		list: [],
		status: null
	},
	reducers: {

	},
	extraReducers: {
		[recipesApi.reducerPath.pending]: state => {
			state.status = "loading"
		},
		[recipesApi.reducerPath.fulfilled]: (state, action) => {
			state.list = action.payload
			state.status = "success"
		},
		[recipesApi.reducerPath.rejected]: state => {
			state.status = "failed"
		}
	}
});

