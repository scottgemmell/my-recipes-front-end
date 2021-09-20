import { useState } from "react"
import { useHistory } from "react-router-dom";
import { useGetRecipesQuery, useAddRecipeMutation } from "../../api/recipesApi";

export const usePageAdd = () => {

	const { data } = useGetRecipesQuery("");
	const [addRecipe, { isFetching, isLoading }] = useAddRecipeMutation();
	
	let [editedTitle, setEditedTitle] = useState("");
	let [editedSlug, setEditedSlug] = useState("");
	let [editedImg, setEditedImg] = useState("http://placehold.it/400x300/");

	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();

		addRecipe({ 
			id: data.length+1, 
			title: editedTitle, 
			slug: editedSlug, 
			img: editedImg 
		}).then(history.push("/"));
		
	}

	return { 
		handleSubmit, 
		editedTitle, 
		editedSlug, 
		editedImg,
		setEditedTitle,
		setEditedSlug,
		setEditedImg,
		isLoading, 
		isFetching,
	}
}