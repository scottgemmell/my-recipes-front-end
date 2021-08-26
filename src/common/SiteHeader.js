import React from 'react'
import { Link } from "react-router-dom";
import { MdRestaurant } from "react-icons/md";
// import { SiteTheme } from "../common";

function SiteHeader() {

	

	return (
		<div className="top layer">
			<div className="layer__inner">
				{/* <SiteTheme /> */}

				<header className="site-header">
					<div className="site-logo">
						<Link to="/">
							<MdRestaurant /> MY RECIPES
						</Link>
					</div>
					<ul className="site-nav">
						{/* <li className="site-nav__item">
							<Link
								className="App-link"
								to="/search/"
							>
								Search
							</Link>
						</li> */}
						<li className="site-nav__item">
							<Link
								className="App-link"
								to="/add/"
							>
								+Add
							</Link>
						</li>
						<li className="site-nav__item site-nav__item--right">
							<Link
								className="App-link"
								to="/register/"
							>
								Register
							</Link>
						</li>
						<li className="site-nav__item">
							<Link
								className="App-link"
								to="/login/"
							>
								login
							</Link>
						</li>
						<li className="site-nav__item">
							<Link
								className="App-link"
								to="/profile/"
							>
								Profile 
							</Link>
						</li>
					</ul>	
				</header>
				
			</div>
		</div>
	)
}

export default SiteHeader
