import React from "react";
import { MdSearch } from "react-icons/md";
import { MealsListItem, SubTitle, Title } from "../../common";
import { usePageHome } from "./hooks";

function PageHome() {

	const { data:list } = usePageHome();
		
	return (
		<div className="layer">
			{list && <div className="layer__inner">
				<Title text="List" />

				<SubTitle text="Search results" icon={MdSearch} />

				<ul className="recipes-list">
					{list && list.map((recipe, idx) => (<MealsListItem key={idx} {...recipe} />))}
				</ul>

			</div>}
		</div>
	)
}

export default PageHome
