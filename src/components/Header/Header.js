import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

function Header() {
   return (
		<Menu inverted>
			<Container>
				<Menu.Item name="StarWars API" />
				<Menu.Item name="films" />
				<Menu.Item name="person" />
				<Menu.Item name="planets" />
				<Menu.Item name="starships" />
				<Menu.Item name="species" />
				<Menu.Item name="vehicles" />
			</Container>
		</Menu>
	);
}

export default Header;
