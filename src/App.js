import React from 'react';
import {Container} from 'semantic-ui-react';

//Rotas
//import Routes from './routes.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Navbar
import Header from './components/Header/Header';
//Pages
import Home from './pages/Home';
import Movies from './pages/Films';
import People from './pages/People';
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";

import "./style/App.module.css";

function App(props) {

	return (
		<div className="App">
			<Router>
				<Header />
				<Container>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/films">
							<Movies />
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/species">
							<Species />
						</Route>
						<Route exact path="/starships">
							<Starships />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
					</Switch>
				</Container>
			</Router>
		</div>
	);
}

export default App;
