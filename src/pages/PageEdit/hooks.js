import { useState } from "react"
import { useParams, useHistory } from "react-router-dom";
import { useGetRecipeByIdQuery, useUpdateRecipeByIdMutation } from "../../api/recipesApi";

export const usePageEdit = () => {

	const params = useParams();
	const history = useHistory();

	const { data: { title, slug, img }  } = useGetRecipeByIdQuery(+params.id);

	const [updatePost, { isLoading, isFetching }] = useUpdateRecipeByIdMutation(+params.id)
	
	let [editedTitle, setEditedTitle] = useState(title);
	let [editedSlug, setEditedSlug] = useState(slug);
	let [editedImg, setEditedImg] = useState(img);

	const handleSubmit = e => {
		e.preventDefault();

		updatePost({ 
			id: +params.id, 
			title: editedTitle, 
			slug: editedSlug, 
			img: editedImg,
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
		setEditedTitle,
		setEditedSlug,
		setEditedImg,
	}
}