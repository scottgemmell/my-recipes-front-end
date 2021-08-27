import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../api/";
import { selectRecipes } from "../../store/selectors/recipesSelectors";

export const usePageHome = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	const { list } = useSelector(selectRecipes);
	//console.log("list", list);

	return {
		list
	}
}