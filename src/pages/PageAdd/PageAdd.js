import React from "react";
import { Title } from "../../common";

const PageAdd = () => {
	return (
		<main className="layer">
			<div className="layer__inner">
				<div>
					<Title text="Add" />

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>

					<form className="form">
						<div className="field">
							<div className="field__title">
								<label htmlFor="">
									Title
								</label>
							</div>
							<div className="field__controls">
								<input type="text"/>
							</div>
						</div>

						<div className="field">
							<div className="field__title">
								<label htmlFor="">
									Slug
								</label>
							</div>
							<div className="field__controls">
								<input type="text"/>
							</div>
						</div>

						<div className="field">
							<div className="field__title">
								<label htmlFor="">
									Image URL
								</label>
							</div>
							<div className="field__controls">
								<input type="text"/>
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

export default PageAdd;
