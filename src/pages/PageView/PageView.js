import React from "react";
import { Link } from "react-router-dom";
import { SubTitle, Title } from "../../common";
import { MdRestaurant } from "react-icons/md";
import IngredientsList from "../../common/IngredientsList";
import { usePageView } from "./hooks";

function PageView() {

	const { recipe, isLoading, handleDelete } = usePageView();

	return (
		<main className="layer">
			<div className="layer__inner">
				{isLoading && "Loading..."}
				{recipe && <div>
					<Title text="View" />

					<h2>
						{recipe.title}
					</h2>
					<p>
						<Link
							className="App-link"
							to={`/edit/${recipe.id}/${recipe.slug}/`}
						>
							Edit
						</Link>&nbsp;|&nbsp;
						<button
							className="App-link"
							onClick={() => handleDelete(recipe.id)}
						>
							Delete
						</button>
					</p>

					<p>
						Lorem ipsum <b>{recipe.title}</b> dolor sit amet consectetur adipisicing elit. Perferendis sapiente eum officia.
					</p>

					{recipe.ingredients && <>
						<SubTitle text="Ingredients" icon={MdRestaurant} />
						<IngredientsList ingredients={recipe.ingredients} />
					</>}
					
				</div>}
			</div>
		</main>
	)
}

export default PageView
