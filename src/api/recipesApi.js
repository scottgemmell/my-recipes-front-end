import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "./helpers";

const getRecipes = createAsyncThunk(
	"recipes/getRecipes",
	async () => {
		return await get("/recipes").then(res => res.data);
	}
);

export default getRecipes;