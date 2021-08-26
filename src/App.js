import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { PageAdd, PageBrowse, PageLogin, PageProfile, PageView } from "./pages/";

import { Main } from "./components";
import { SiteFooter, SiteHeader } from "./common";
import './assets/scss/App.scss';

function App() {

	

	return (
		<div className="App">
			<Router>
				<SiteHeader />
				<Main>
					<Switch>
						<Route 
							exact={true}
							path={["/", "/list/"]} 
							component={PageBrowse} 
						/>
						<Route 
							exact={true}
							path={"/profile/"} 
							component={PageProfile}
						/>
						<Route 
							exact={true}
							path={"/add/"} 
							component={PageAdd}
						/>
						{/* <Route 
							exact={true}
							path={"/register/"} 
							component={PageRegister}
						/>*/}
						<Route 
							exact={true}
							path={"/login/"} 
							component={PageLogin}
						/>
						<Route 
							path={`/view/:id/:recipe/`} 
							component={PageView}
						/>
						{/* <Route 
							path={`/edit/:id/:recipe/`} 
							component={PageEdit}
						/>  */}
						<Redirect to="/login/" />
					</Switch>
				</Main>
				<SiteFooter />
			</Router>
		</div>
	);
}

export default App;
