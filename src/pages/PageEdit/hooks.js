import { useState } from "react"
import { useParams, useHistory } from "react-router-dom";
import { useGetRecipeByIdQuery, useUpdateRecipeByIdMutation } from "../../api/recipesApi";

export const usePageEdit = () => {

	const params = useParams();
	const history = useHistory();

	const { data: { title, slug, img, ingredients }  } = useGetRecipeByIdQuery(+params.id);

	const [updatePost, { isLoading, isFetching }] = useUpdateRecipeByIdMutation(+params.id)
	
	let [editedTitle, setEditedTitle] = useState(title);
	let [editedSlug, setEditedSlug] = useState(slug);
	let [editedImg, setEditedImg] = useState(img);
	let [editedIngredients, setEditedIngredients] = useState(ingredients);

	const handleSubmit = e => {
		e.preventDefault();

		// console.log("*", { 
		// 	id: Number(params.id), 
		// 	title: editedTitle, 
		// 	slug: editedSlug, 
		// 	img: editedImg,
		// 	ingredients: editedIngredients === "true",
		// 	isLoading, 
		// 	isFetching, 
		// });

		updatePost({ 
			id: params.id, 
			title: editedTitle, 
			slug: editedSlug, 
			img: editedImg,
			ingredients: editedIngredients === "true",
			isLoading, 
			isFetching, 
		})
			.then(history.push("/"))

	}

	return { 
		handleSubmit, 
		editedTitle, 
		editedSlug, 
		editedImg,
		editedIngredients,
		setEditedTitle,
		setEditedSlug,
		setEditedImg,
		setEditedIngredients,
	}
}