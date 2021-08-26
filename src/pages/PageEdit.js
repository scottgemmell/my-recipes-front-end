import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { Title } from '../common/';
import { RecipesContext } from '../App';

function PageEdit({ match }) {

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

		console.log('updatedRecipes', updatedRecipes)
		setStoredRecipes(updatedRecipes);	
			console.log('match', match)
			history.push(`/edit/${match.params.id}/${match.params.recipe}/`);
	}


	return (
		<main className="layer">
			<div className="layer__inner">
				<div>
					<Title text="Edit" />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<form 
						className="form" 
						onSubmit={handleSubmit}
					>
						<div className="field">
							<div className="field__title">
								<label htmlFor="">
									Title
								</label>
							</div>
							<div className="field__controls">
								<input 
									type="text" 
									defaultValue={editedTitle} 
									onChange={e => setEditedTitle(e.target.value)} 
								/>
							</div>
						</div>
						<div className="field">
							<div className="field__title">
								<label htmlFor="">
									Slug
									<span className="field__optional">[unique]</span>
								</label>
							</div>
							<div className="field__controls">
								<input type="text" 
									defaultValue={editedSlug} 
									onChange={e => setEditedSlug(e.target.value)} 
								/>
							</div>
						</div>
						<div className="field">
							<div className="field__title">
								<label htmlFor="">
									Image URL
								</label>
							</div>
							<div className="field__controls">
								<input type="text" 
									defaultValue={editedImg} 
									onChange={e => setEditedImg(e.target.value)} 
								 />
							</div>
						</div>
						<div className="field">
							<div className="field__title">
								<label htmlFor="">
									Description
									<span className="field__optional">[optional]</span>
								</label>
							</div>
							<div className="field__controls">
								<textarea />
							</div>
						</div>
						<div className="controls">
							<button className="button">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	)
}

export default PageEdit;
