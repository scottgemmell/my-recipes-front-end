import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "../../api/recipesApi";

export const usePageView = () => {

	const params = useParams();
	const { data:recipe } = useGetRecipeByIdQuery(+params.id);

	return {
		recipe
	}
}