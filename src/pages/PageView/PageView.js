import React from "react";
import { Link } from "react-router-dom";
import { IngredientsList, SubTitle, LoadingThumb, Title } from "../../common";
import { MdRestaurant } from "react-icons/md";
import { usePageView } from "./hooks";
import { Button, ButtonGroup, Heading, Stack } from "@chakra-ui/react";

function PageView() {

	const { recipe, isFetching, isLoading, isDeleting, handleDelete } = usePageView();

	return (
		<main className="layer">
			<div className="layer__inner">
				
				<div>
					<Title text="View" />

					{(isFetching || isLoading || isDeleting) && <LoadingThumb />}

					{(!isFetching && !isLoading && !isDeleting) && <>
						<Stack my={8}>
							<Heading as="h2" size="lg">
								{recipe.title}
							</Heading>
							<ButtonGroup>
								<Button
									as={Link}
									className="App-link"
									to={`/edit/${recipe.id}/${recipe.slug}/`}
								>
									Edit
								</Button>
								<Button
									className="App-link"
									onClick={() => handleDelete(recipe.id)}
								>
									Delete
								</Button>
							</ButtonGroup>
						</Stack>

						{/* <p>
							Lorem ipsum <b>{recipe.title}</b> dolor sit amet consectetur adipisicing elit. Perferendis sapiente eum officia.
						</p> */}

						{recipe.ingredients === true && <>
							<SubTitle text="Ingredients" icon={MdRestaurant} />

							<IngredientsList ingredients={recipe.ingredients} />
						</>}
					</>}
					
				</div>
			</div>
		</main>
	)
}

export default PageView
