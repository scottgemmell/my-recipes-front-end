import React from 'react'

function IngredientsListItem({ ingredient }) {
	return (
		<li className="ingredient">
			<div className="ingredient__inner">
				<div className="ingredient__meta">
					<h3>
						{ingredient.title}
					</h3>
				</div>
				<div className="ingredient__display">
					<img src={ingredient.img} alt={ingredient.title} width="150" height="150" />
				</div>
			</div>
		</li>
	)
}

export default IngredientsListItem
