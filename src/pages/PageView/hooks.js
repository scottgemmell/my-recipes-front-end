import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "../../api/recipesApi";

export const usePageView = () => {

	const params = useParams();
	console.log("params", params);
	const { data:recipe } = useGetRecipeByIdQuery(params.id);
	//const recipe = list && list.find(recipe => recipe.slug === params.recipe);

	return {
		recipe
	}
}