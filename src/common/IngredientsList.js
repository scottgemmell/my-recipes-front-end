import React from 'react'
import { IngredientsListItem } from "../common";

const temp = [
	{
	  "title": "Sliced tomatoes",
	  "img": "https://i.ibb.co/9vfXNB9/sliced-tomatoes.jpg"
	},
	{
	  "title": "Sliced mozarella",
	  "img": "https://i.ibb.co/DV56dwN/sliced-mozarella.jpg"
	},
	{
	  "title": "Basil",
	  "img": "https://i.ibb.co/r37VX4v/basil-leaves.jpg"
	},
	{
	  "title": "Olive oil",
	  "img": "https://i.ibb.co/q0zWpBs/olive-oil.jpg"
	},
	{
	  "title": "Salt",
	  "img": "http://placehold.it/400x300/"
	},
	{
	  "title": "Pepper",
	  "img": "http://placehold.it/400x300/"
	}
  ]

function IngredientsList({ ingredients }) {

	return (
		<ul className="ingredients-list">
			{temp.map((ingredient, i) =>
				<IngredientsListItem ingredient={ingredient} key={i} />
			)}
		</ul>
	)
}

export default IngredientsList
