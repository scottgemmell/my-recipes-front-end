import { useHistory, useParams } from "react-router-dom";
import { useGetRecipeByIdQuery, useDeleteRecipeMutation } from "../../api/recipesApi";

export const usePageView = () => {

	const params = useParams();
	const history = useHistory();

	const { data:recipe, isLoading, isFetching } = useGetRecipeByIdQuery(+params.id);
	const [deleteRecipe, { isDeleting }] = useDeleteRecipeMutation();

	const handleDelete = (idx) => {
		deleteRecipe(idx)
			.then(history.push("/"));
	};

	return {
		recipe,
		handleDelete,
		isFetching,
		isLoading,
		isDeleting,
	}
}