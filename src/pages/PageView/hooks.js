import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getRecipes, selectRecipes } from "../../features/recipes/recipesSlice";

export const usePageView = () => {

	//const history = useHistory();
	const params = useParams();
	//console.log("history", history);
	console.log("params.recipe", params.recipe);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	const { list } = useSelector(selectRecipes);

	const recipe = list.find(recipe => recipe.slug === params.recipe);

	//console.log("list", list);

	return {
		recipe
	}
}