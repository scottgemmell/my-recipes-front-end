import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, selectRecipes } from "../features/recipes/recipesSlice";
import { Link } from "react-router-dom";
import { SubTitle, Title } from '../common/';
import { MdRestaurant } from "react-icons/md";
//import { RecipesContext } from '../App';
import IngredientsList from '../common/IngredientsList';

function PageView({ match }) {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	const { list } = useSelector(selectRecipes);

	const recipe = list.find(recipe => recipe.slug === match.params.recipe);

	//console.log("list", list);

	return (
		<main className="layer">
			<div className="layer__inner">
				{recipe && <div>
					<Title text="View" />

					<h2>*{recipe.title}* - <Link
						className="App-link"
						to={`/edit/${recipe.id}/${recipe.slug}/`}
					>
						Edit
					</Link></h2>

					<p>
						Lorem ipsum <b>{recipe.title}</b> dolor sit amet consectetur adipisicing elit. Perferendis sapiente eum officia.
					</p>

					<SubTitle text="Ingredients" icon={MdRestaurant} />

					<IngredientsList ingredients={recipe.ingredients || []} />
					
				</div>}
			</div>
		</main>
	)
}

export default PageView
