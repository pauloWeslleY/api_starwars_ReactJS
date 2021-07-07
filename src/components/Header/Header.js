import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Header() {
   return (
		<Menu inverted>
			<Container>
				<Link to="/">
					<Menu.Item name="Starwars API" />
				</Link>
				<Link to="/films">
					<Menu.Item name="films" />
				</Link>
				<Link to="/people">
					<Menu.Item name="person" />
				</Link>
				<Link to="/planets">
					<Menu.Item name="planets" />
				</Link>
				<Link to="/starships">
					<Menu.Item name="starships" />
				</Link>
				<Link to="/species">
					<Menu.Item name="species" />
				</Link>
				<Link to="/vehicles">
					<Menu.Item name="vehicles" />
				</Link>
			</Container>
		</Menu>
	);
}

export default Header;
