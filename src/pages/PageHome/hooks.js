import { useGetRecipesQuery } from "../../api/recipesApi";

export const usePageHome = () => {

	const { 
		data:list, 
		// error, 
		isFetching,
		isLoading, 
	} = useGetRecipesQuery();

	return {
		list,
		isFetching,
		isLoading,
	}
}