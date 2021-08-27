import { createAsyncThunk } from "@reduxjs/toolkit";

const getRecipes = createAsyncThunk(
	"recipes/getRecipes",
	async () => {
		return await fetch("http://localhost:3001/recipes").then((res) => res.json());
	}
);

export default getRecipes;