import { useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { useGetRecipeByIdQuery, useUpdateRecipeByIdMutation } from "../../api/recipesApi";

export const usePageEdit = () => {

	const params = useParams();
	const { data: { title, slug, img }  } = useGetRecipeByIdQuery(+params.id);

	const [updatePost] = useUpdateRecipeByIdMutation(+params.id)
	
	let [editedTitle, setEditedTitle] = useState(title);
	let [editedSlug, setEditedSlug] = useState(slug);
	let [editedImg, setEditedImg] = useState(img);

	const history = useHistory();
	
	// useEffect(() => {
	// 	console.log('editedTitle', { editedTitle });
	// }, [editedTitle]);

	// const handleSubmit = e => {
	// 	console.log("e", e);
	// }

	const handleSubmit = e => {
		e.preventDefault();
		console.log("SUBMIT");

		updatePost({ id: +params.id, title: editedTitle, slug: editedSlug, img: editedImg })

		// const updatedRecipes = storedRecipes.map(recipe => +recipe.id === params.id 
		// 	? {...recipe, title: editedTitle, slug: editedSlug, img: editedImg }
		// 	: recipe )

		// //console.log('updatedRecipes', updatedRecipes)
		// setStoredRecipes(updatedRecipes);	
		// 	//console.log('match', match)
		// 	history.push(`/edit/${params.id}/${params.recipe}/`);
		// history.push(`/view/${params.id}/${params.recipe}/`);
		history.push(`/`);
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