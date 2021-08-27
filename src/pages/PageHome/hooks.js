import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, selectRecipes } from "../../features/recipes/recipesSlice";

export const usePageHome = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	const { list } = useSelector(selectRecipes);
	//console.log("myRecipes", myRecipes);

	return {
		list
	}
}