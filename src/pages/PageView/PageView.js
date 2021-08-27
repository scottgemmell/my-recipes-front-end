import React from "react";
import { Link } from "react-router-dom";
import { SubTitle, Title } from "../../common";
import { MdRestaurant } from "react-icons/md";
import IngredientsList from "../../common/IngredientsList";
import { usePageView } from "./hooks";

function PageView() {

	const { recipe } = usePageView();

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
