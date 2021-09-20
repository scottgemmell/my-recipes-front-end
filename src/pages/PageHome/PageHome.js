import React from "react";
import { MdSearch } from "react-icons/md";
import { MealsListItem, SubTitle, Title, LoadingPanel } from "../../common/";
import { usePageHome } from "./hooks";

function PageHome() {

	const { list, isFetching, isLoading } = usePageHome();
		
	return (
		<div className="layer">
		
			<div className="layer__inner">
				<Title text="List" />

				{(isFetching || isLoading) && <LoadingPanel />}

				{(!isFetching && !isLoading) && <>
					<SubTitle text="Search results" icon={MdSearch} />

					 
					<ul className="recipes-list">
						{list && list.map((recipe, idx) => (<MealsListItem key={idx} {...recipe} />))}
					</ul>
				</>}

			</div>
		</div>
	)
}

export default PageHome
