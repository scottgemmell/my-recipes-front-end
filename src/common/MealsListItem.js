import React from 'react'
import { Link } from "react-router-dom";
import { MdRestaurant } from "react-icons/md";

function MealsListItem(recipe) {
	return (
		<li className="thumb">
			<div className="thumb_inner">
				<div className="thumb__meta">
					<h3>
						<Link to={`/view/${recipe.id}/${recipe.slug}/`}>
							<MdRestaurant /> {recipe.title}
						</Link>
					</h3>
				</div>
				<div className="thumb__display">
					<img src={recipe.img} alt={recipe.title} />
				</div>
			</div>
		</li>
	)
}

export default MealsListItem
