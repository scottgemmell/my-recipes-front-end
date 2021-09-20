import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { 
	PageAdd, 
	PageEdit, 
	PageHome, 
	PageLogin, 
	PageProfile, 
	PageRegister,
	PageView, 
} from "./pages/";
import { Main, SiteFooter, SiteHeader } from "./common";
import "./assets/scss/App.scss";

//export const RecipesContext = React.createContext([]);

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
							component={PageHome} 
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
						
						<Route 
							exact={true}
							path={"/register/"} 
							component={PageRegister}
						/>
						<Route 
							exact={true}
							path={"/login/"} 
							component={PageLogin}
						/>
						<Route 
							path={`/view/:id/:recipe/`} 
							component={PageView}
						/>
						<Route 
							path={`/edit/:id/:recipe/`} 
							component={PageEdit}
						/> 
						<Redirect to="/login/" />
					</Switch>
				</Main>
				<SiteFooter />
			</Router>
		</div>
	);
}

export default App;
