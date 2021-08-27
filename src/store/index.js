import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../store/recipes/recipesSlice";

export default configureStore({
  reducer: {
	recipes: recipesReducer,
  },
});
