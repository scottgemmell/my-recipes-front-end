import React from 'react'
import { MealsListItem } from "../common";


function MealsList(recipes) {

	return (
		<ul className="recipes-list">
			{recipes.map((recipe, i) =>
				<MealsListItem recipe={recipe} key={i} />
			)}
		</ul>
	)
}

export default MealsList
