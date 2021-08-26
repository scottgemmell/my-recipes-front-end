import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { MdSearch } from "react-icons/md";
import { MealsListItem, SubTitle, Title } from '../common';
import { getRecipes, selectRecipes } from "../features/recipes/recipesSlice";

function PageBrowse() {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	const myRecipes = useSelector(selectRecipes);
	//console.log("myRecipes", myRecipes);
	
	return (
		<div className="layer">
			<div className="layer__inner">
				<Title text="List" />

				<SubTitle text="Search results" icon={MdSearch} />

				<ul className="recipes-list">
					{myRecipes && myRecipes.map((recipe, idx) => (<MealsListItem key={idx} {...recipe} />))}
				</ul>

			</div>
		</div>
	)
}

export default PageBrowse
