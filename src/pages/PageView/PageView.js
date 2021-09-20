import React from "react";
import { Link } from "react-router-dom";
import { IngredientsList, SubTitle, LoadingPanel, LoadingThumb, Title } from "../../common";
import { MdRestaurant } from "react-icons/md";
import { usePageView } from "./hooks";

function PageView() {

	const { recipe, isFetching, isLoading, isDeleting, handleDelete } = usePageView();

	return (
		<main className="layer">
			<div className="layer__inner">
				
				<div>
					<Title text="View" />

					{(isFetching || isLoading || isDeleting) && <LoadingThumb />}

					{(!isFetching && !isLoading && !isDeleting) && <>
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

						<SubTitle text="Ingredients" icon={MdRestaurant} />

						{!recipe.ingredients && <LoadingPanel />}

						{recipe.ingredients && <IngredientsList ingredients={recipe.ingredients} />}
					</>}
					
				</div>
			</div>
		</main>
	)
}

export default PageView
