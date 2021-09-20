import React from "react";
import { LoadingPanel, Title } from "../../common";
import { usePageAdd } from "./hooks";

function PageEdit() {

	const { 
		handleSubmit, 
		editedTitle, 
		editedSlug, 
		editedImg,
		setEditedTitle,
		setEditedSlug,
		setEditedImg,
		isLoading, 
		isFetching,
	 } = usePageAdd();

	return (
		<main className="layer">
			<div className="layer__inner">
				<div>
					<Title text="Add" />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>

					{(isLoading || isFetching) && <LoadingPanel />}
					{(!isLoading && !isFetching) && <form 
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
					</form>}
				</div>
			</div>
		</main>
	)
}

export default PageEdit;
