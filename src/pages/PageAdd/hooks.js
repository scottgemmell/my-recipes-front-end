import { useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { useGetRecipesQuery, useGetRecipeByIdQuery, useUpdateRecipeByIdMutation, useAddRecipeMutation } from "../../api/recipesApi";

export const usePageAdd = () => {

	const params = useParams();
	//const { data: { title, slug, img }  } = useGetRecipeByIdQuery(+params.id);

	const { data } = useGetRecipesQuery("");
	console.log("data.length", data.length+1);
	const [addRecipe] = useAddRecipeMutation();
	
	let [editedTitle, setEditedTitle] = useState("");
	let [editedSlug, setEditedSlug] = useState("");
	let [editedImg, setEditedImg] = useState("http://placehold.it/400x300/");

	const history = useHistory();
	
	// useEffect(() => {
	// 	console.log('editedTitle', { editedTitle });
	// }, [editedTitle]);

	// const handleSubmit = e => {
	// 	console.log("e", e);
	// }

	const handleSubmit = e => {
		e.preventDefault();
		console.log(
			"SUBMIT",
			{ id: data.length+1, title: editedTitle, slug: editedSlug, img: editedImg }
		);

		addRecipe({ 
			id: data.length+1, 
			title: editedTitle, 
			slug: editedSlug, 
			img: editedImg 
		}).then(history.push("/"));

		// const updatedRecipes = storedRecipes.map(recipe => +recipe.id === params.id 
		// 	? {...recipe, title: editedTitle, slug: editedSlug, img: editedImg }
		// 	: recipe )

		// //console.log('updatedRecipes', updatedRecipes)
		// setStoredRecipes(updatedRecipes);	
		// 	//console.log('match', match)
		// 	history.push(`/edit/${params.id}/${params.recipe}/`);
		
		
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