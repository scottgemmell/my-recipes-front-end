import React from 'react'
import { IngredientsListItem } from "../common";


function IngredientsList({ ingredients }) {

	return (
		<ul className="ingredients-list">
			{ingredients.map((ingredient, i) =>
				<IngredientsListItem ingredient={ingredient} key={i} />
			)}
		</ul>
	)
}

export default IngredientsList
