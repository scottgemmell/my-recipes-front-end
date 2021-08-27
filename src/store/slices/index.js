import { recipesSlice } from "./recipesSlice";

const rootReducer = {
	recipes: recipesSlice.reducer,
}

export default rootReducer;