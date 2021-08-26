import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRecipes = createAsyncThunk(
	"recipes/getRecipes",
	async () => {
		return await fetch("http://localhost:3001/recipes").then((res) => res.json());
	}
);

//dispatch(getRecipes());

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

export const selectRecipes = state => state.recipes.list;

export const selectRecipe = (state, rec) => state.recipes.list.find(recipe => +recipe.id === 1);

export default recipesSlice.reducer;