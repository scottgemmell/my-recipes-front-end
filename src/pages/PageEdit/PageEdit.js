import React from "react";
import { LoadingPanel, Title } from "../../common";
import { usePageEdit } from "./hooks";
import { Button, ButtonGroup, FormControl, FormLabel, Radio, RadioGroup, Stack, Input, Text, Textarea } from "@chakra-ui/react";

function PageEdit() {

	const { 
		handleSubmit, 
		editedTitle, 
		editedSlug, 
		editedImg,
		editedIngredients,
		setEditedTitle,
		setEditedSlug,
		setEditedImg,
		setEditedIngredients,
		isLoading, 
		isFetching,
	 } = usePageEdit();

	return (
		<main className="layer">
			<div className="layer__inner">
				<Stack>
					<Title text="Edit" />
					{/* <p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p> */}

					{(isLoading || isFetching) && <LoadingPanel />}
					{(!isLoading && !isFetching) && <form 
						className="form" 
						onSubmit={handleSubmit}
					>

						<FormControl id="title" my={6}>
							<FormLabel>
								Title
							</FormLabel>
							<Input 
								size="lg" 
								type="text" 
								defaultValue={editedTitle} 
								onChange={e => setEditedTitle(e.target.value)} 
							/>
						</FormControl>

						<FormControl id="slug" my={6}>
							<FormLabel>
								Slug
								<Text color="silver" style={{ float: "right" }}>
									[unique]
								</Text>
							</FormLabel>
							<Input
								size="lg" 
								defaultValue={editedSlug} 
								onChange={e => setEditedSlug(e.target.value)} 
							/>
						</FormControl>

						<FormControl id="url" my={6}>
							<FormLabel>
								Image URL
							</FormLabel>
							<Input 
								size="lg" 
								defaultValue={editedImg} 
								onChange={e => setEditedImg(e.target.value)} 
								/>
						</FormControl>

						<FormControl id="description" my={6}>
							<FormLabel>
								Description
								<Text color="silver" style={{ float: "right" }}>
									[optional]
								</Text>
							</FormLabel>
							<Textarea size="lg" />
						</FormControl>

						<FormControl id="ingredients" my={6}>
							<FormLabel>
								Show ingredients?
							</FormLabel>
							<RadioGroup defaultValue={editedIngredients} 
								onChange={value => setEditedIngredients(value)} my={6}>
								<Stack spacing={5} direction="row">
									<Radio value="true">
										Yes
									</Radio>
									<Radio value="false">
										No
									</Radio>
								</Stack>
							</RadioGroup>
						</FormControl>

						<ButtonGroup style={{ float: "right" }}>
							<Button colorScheme="blue" size="lg" variant="outline">
								Undo
							</Button>
							<Button type="submit" colorScheme="blue" size="lg">
								Submit
							</Button>
						</ButtonGroup>
					</form>}
				</Stack>
			</div>
		</main>
	)
}

export default PageEdit;
