import { useState, useContext } from "react"
import { useHistory } from "react-router-dom";
import { RecipesContext } from "../../../App";

export const usePageEdit = () => {

	const [storedRecipes, setStoredRecipes] = useContext(RecipesContext);
	console.log('storedRecipes', storedRecipes)
	const { title, slug, img } = storedRecipes.find(recipe => +recipe.id === +match.params.id);
	
	let [editedTitle, setEditedTitle] = useState(title);
	let [editedSlug, setEditedSlug] = useState(slug);
	let [editedImg, setEditedImg] = useState(img);

	const history = useHistory();
	
	// useEffect(() => {
	// 	console.log('editedTitle', { editedTitle });
	// }, [editedTitle]);

	const handleSubmit = e => {
		e.preventDefault();
		//console.log("SUBMIT");

		const updatedRecipes = storedRecipes.map(recipe => +recipe.id === +match.params.id 
			? {...recipe, title: editedTitle, slug: editedSlug, img: editedImg }
			: recipe )

		//console.log('updatedRecipes', updatedRecipes)
		setStoredRecipes(updatedRecipes);	
			//console.log('match', match)
			history.push(`/edit/${match.params.id}/${match.params.recipe}/`);
	}

	return { handleSubmit, editedTitle, editedSlug, editedImg }
}