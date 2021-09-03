import { useHistory, useParams } from "react-router-dom";
import { useGetRecipeByIdQuery, useDeleteRecipeMutation } from "../../api/recipesApi";

export const usePageView = () => {

	const params = useParams();
	const history = useHistory();

	const { data:recipe } = useGetRecipeByIdQuery(+params.id);
	const [deleteRecipe, { isLoading }] = useDeleteRecipeMutation();

	const handleDelete = (idx) => {
		console.log("idx",  idx );
		deleteRecipe(idx).then(history.push("/"))
		

	};

	

	return {
		recipe,
		handleDelete,
		isLoading,
	}
}