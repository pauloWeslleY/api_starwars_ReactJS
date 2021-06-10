import React, {useState, useEffect} from 'react';
import { Button } from 'semantic-ui-react';
import {Container} from 'semantic-ui-react';

//Rotas
import Routes from './routes.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Navbar
import Header from './components/Header/Header';

import "./style/App.css";

const ButtonExampleButton = () => <Button>Click Here</Button>

function App() {

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch('https://swapi.dev/api/films/')
			.then(res => res.json())
			.then(data => setMovies(data.results))
	}, [])

	console.log("Nomes do Filmes", movies);

	/* const films = movies.map((movies) => {
		return (
			<>
				<div>
					<h1>{movies.title}</h1>
				</div>
			</>
		);
	}) */

	return (
		<div className="App">
			<Routes />

			<Router>
				<Header />
				<Container>


				</Container>
			</Router>


			<ButtonExampleButton/>
		</div>
	);
}

export default App;
