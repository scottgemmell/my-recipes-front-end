import { useGetRecipesQuery } from "../../api/recipesApi";

export const usePageHome = () => {

	const { 
		data, 
		// error, 
		// isLoading 
	} = useGetRecipesQuery("");
	//console.log("=>", { data, error, isLoading });

	return {
		data
	}
}