import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//? Pages
import Movies from './pages/Films';
import Person from './pages/People';
import Planets from './pages/Planets';
import Species from './pages/Species';
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";

function Routes() {
   return (
		<BrowserRouter>
			<Switch>
				<Route path="/movies" component={Movies} />
				<Route path="/person" component={Person} />
				<Route path="/planets" component={Planets} />
				<Route path="/species" component={Species} />
				<Route path="/starships" component={Starships} />
				<Route path="/vehicles" component={Vehicles} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;