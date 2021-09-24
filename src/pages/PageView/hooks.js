import { useHistory, useParams } from "react-router-dom";
import { 
	useGetRecipeByIdQuery, 
	useDeleteRecipeMutation, 
	//useGetIngredientsByIdsQuery,
} from "../../api/recipesApi";

export const usePageView = () => {

	const params = useParams();
	const history = useHistory();

	const { data:recipe, isLoading, isFetching } = useGetRecipeByIdQuery(+params.id);
	const [deleteRecipe, { isDeleting }] = useDeleteRecipeMutation();
	// console.log("recipe", recipe)

	// const ing = useGetIngredientsByIdsQuery(recipe.ingredients || "");
	// console.log("ing", ing)

	const handleDelete = (idx) => {
		deleteRecipe(idx)
			.then(history.push("/"));
	};

	return {
		recipe,
		//ingredients,
		handleDelete,
		isFetching,
		isLoading,
		isDeleting,
	}
}