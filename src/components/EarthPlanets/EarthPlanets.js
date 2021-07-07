import React, { useEffect, useState} from "react";
import { Grid, List, Tab, Container } from "semantic-ui-react";
import { swapiGet } from "../../services/api";
// import PlanetLogo from '../../assets/planets.svg'

import styles from './planets.module.css'

const PlanetsWorld = () => {
   swapiGet()
   const [planets, setPlanets] = useState([]);
   const [planets2, setPlanets2] = useState([]);
   const [planets3, setPlanets3] = useState([]);
   const [planets4, setPlanets4] = useState([]);
   const [planets5, setPlanets5] = useState([]);
   const [planets6, setPlanets6] = useState([]);
   useEffect(() => {
      Promise.all([
         swapiGet("planets/"),
			swapiGet("planets/?page=2&format=json"),
			swapiGet("planets/?page=3&format=json"),
			swapiGet("planets/?page=4&format=json"),
			swapiGet("planets/?page=5&format=json"),
			swapiGet("planets/?page=6&format=json"),
		]).then((results) => {
			setPlanets(results[0].data.results);
			setPlanets2(results[1].data.results);
			setPlanets3(results[2].data.results);
			setPlanets4(results[3].data.results);
			setPlanets5(results[4].data.results);
			setPlanets6(results[5].data.results);
		});
   }, [])

   const Earth = planets.map(planets => {
      return {
			name: planets.name,
			rotation: planets.rotation_period,
			orbital: planets.orbital_period,
			diameter: planets.diameter,
			climate: planets.climate,
			gravity: planets.gravity,
			terrain: planets.terrain,
			surface: planets.surface_water,
			population: planets.population,
		};
   })
   const Earth1 = planets2.map(planets => {
      return {
			name: planets.name,
			rotation: planets.rotation_period,
			orbital: planets.orbital_period,
			diameter: planets.diameter,
			climate: planets.climate,
			gravity: planets.gravity,
			terrain: planets.terrain,
			surface: planets.surface_water,
			population: planets.population,
		};
   })
   const Earth3 = planets3.map(planets => {
      return {
			name: planets.name,
			rotation: planets.rotation_period,
			orbital: planets.orbital_period,
			diameter: planets.diameter,
			climate: planets.climate,
			gravity: planets.gravity,
			terrain: planets.terrain,
			surface: planets.surface_water,
			population: planets.population,
		};
   })
   const Earth4 = planets4.map(planets => {
      return {
			name: planets.name,
			rotation: planets.rotation_period,
			orbital: planets.orbital_period,
			diameter: planets.diameter,
			climate: planets.climate,
			gravity: planets.gravity,
			terrain: planets.terrain,
			surface: planets.surface_water,
			population: planets.population,
		};
   })
   const Earth5 = planets5.map(planets => {
      return {
			name: planets.name,
			rotation: planets.rotation_period,
			orbital: planets.orbital_period,
			diameter: planets.diameter,
			climate: planets.climate,
			gravity: planets.gravity,
			terrain: planets.terrain,
			surface: planets.surface_water,
			population: planets.population,
		};
   })
   const Earth6 = planets6.map(planets => {
      return {
			name: planets.name,
			rotation: planets.rotation_period,
			orbital: planets.orbital_period,
			diameter: planets.diameter,
			climate: planets.climate,
			gravity: planets.gravity,
			terrain: planets.terrain,
			surface: planets.surface_water,
			population: planets.population,
		};
   })

   const panes = [
		{
			menuItem: "Planets 1",
			render: () => (
				<Container>
					<Tab.Pane className={styles.navigationTab} attached={false}>
						<Grid columns={5}>
							{Earth.map((planets) => {
								return (
									<Grid.Column key={planets.id}>
										<List.Item>
											<List.Content>
												<List.Header>
													<h2>{planets.name}</h2>
												</List.Header>
												<List.Description>
													<strong>Rotation</strong>
													<p>{planets.rotation}</p>
													<strong>Orbital</strong>
													<p>{planets.orbital}</p>
													<strong>Diameter</strong>
													<p>{planets.diameter}</p>
													<strong>Climate</strong>
													<p>{planets.climate}</p>
													<strong>Gravity</strong>
													<p>{planets.gravity}</p>
													<strong>Terrain</strong>
													<p>{planets.Terrain}</p>
													<strong>Surface</strong>
													<p>{planets.surface}</p>
													<strong>Population</strong>
													<p>{planets.population}</p>
												</List.Description>
											</List.Content>
										</List.Item>
									</Grid.Column>
								);
							})}
						</Grid>
					</Tab.Pane>
				</Container>
			),
		},
		{
			menuItem: "Planets 2",
			render: () => (
				<Container>
					<Tab.Pane attached={false}>
						<Grid columns={5}>
							{Earth1.map((planets) => {
								return (
									<Grid.Column key={planets.id}>
										<List.Item>
											<List.Content>
												<List.Header>
													<h2>{planets.name}</h2>
												</List.Header>
												<List.Description>
													<strong>Rotation</strong>
													<p>{planets.rotation}</p>
													<strong>Orbital</strong>
													<p>{planets.orbital}</p>
													<strong>Diameter</strong>
													<p>{planets.diameter}</p>
													<strong>Climate</strong>
													<p>{planets.climate}</p>
													<strong>Gravity</strong>
													<p>{planets.gravity}</p>
													<strong>Terrain</strong>
													<p>{planets.Terrain}</p>
													<strong>Surface</strong>
													<p>{planets.surface}</p>
													<strong>Population</strong>
													<p>{planets.population}</p>
												</List.Description>
											</List.Content>
										</List.Item>
									</Grid.Column>
								);
							})}
						</Grid>
					</Tab.Pane>
				</Container>
			),
		},
		{
			menuItem: "Planets 3",
			render: () => (
				<Container>
					<Tab.Pane attached={false}>
						<Grid columns={5}>
							{Earth3.map((planets) => {
								return (
									<Grid.Column key={planets.id}>
										<List.Item>
											<List.Content>
												<List.Header>
													<h2>{planets.name}</h2>
												</List.Header>
												<List.Description>
													<strong>Rotation</strong>
													<p>{planets.rotation}</p>
													<strong>Orbital</strong>
													<p>{planets.orbital}</p>
													<strong>Diameter</strong>
													<p>{planets.diameter}</p>
													<strong>Climate</strong>
													<p>{planets.climate}</p>
													<strong>Gravity</strong>
													<p>{planets.gravity}</p>
													<strong>Terrain</strong>
													<p>{planets.Terrain}</p>
													<strong>Surface</strong>
													<p>{planets.surface}</p>
													<strong>Population</strong>
													<p>{planets.population}</p>
												</List.Description>
											</List.Content>
										</List.Item>
									</Grid.Column>
								);
							})}
						</Grid>
					</Tab.Pane>
				</Container>
			),
		},
		{
			menuItem: "Planets 4",
			render: () => (
				<Container>
					<Tab.Pane attached={false}>
						<Grid columns={5}>
							{Earth4.map((planets) => {
								return (
									<Grid.Column key={planets.id}>
										<List.Item>
											<List.Content>
												<List.Header>
													<h2>{planets.name}</h2>
												</List.Header>
												<List.Description>
													<strong>Rotation</strong>
													<p>{planets.rotation}</p>
													<strong>Orbital</strong>
													<p>{planets.orbital}</p>
													<strong>Diameter</strong>
													<p>{planets.diameter}</p>
													<strong>Climate</strong>
													<p>{planets.climate}</p>
													<strong>Gravity</strong>
													<p>{planets.gravity}</p>
													<strong>Terrain</strong>
													<p>{planets.Terrain}</p>
													<strong>Surface</strong>
													<p>{planets.surface}</p>
													<strong>Population</strong>
													<p>{planets.population}</p>
												</List.Description>
											</List.Content>
										</List.Item>
									</Grid.Column>
								);
							})}
						</Grid>
					</Tab.Pane>
				</Container>
			),
		},
		{
			menuItem: "Planets 5",
			render: () => (
				<Container>
					<Tab.Pane attached={false}>
						<Grid columns={5}>
							{Earth5.map((planets) => {
								return (
									<Grid.Column key={planets.id}>
										<List.Item>
											<List.Content>
												<List.Header>
													<h2>{planets.name}</h2>
												</List.Header>
												<List.Description>
													<strong>Rotation</strong>
													<p>{planets.rotation}</p>
													<strong>Orbital</strong>
													<p>{planets.orbital}</p>
													<strong>Diameter</strong>
													<p>{planets.diameter}</p>
													<strong>Climate</strong>
													<p>{planets.climate}</p>
													<strong>Gravity</strong>
													<p>{planets.gravity}</p>
													<strong>Terrain</strong>
													<p>{planets.Terrain}</p>
													<strong>Surface</strong>
													<p>{planets.surface}</p>
													<strong>Population</strong>
													<p>{planets.population}</p>
												</List.Description>
											</List.Content>
										</List.Item>
									</Grid.Column>
								);
							})}
						</Grid>
					</Tab.Pane>
				</Container>
			),
		},
		{
			menuItem: "Planets 6",
			render: () => (
				<Container>
					<Tab.Pane attached={false}>
						<Grid columns={5}>
							{Earth6.map((planets) => {
								return (
									<Grid.Column key={planets.id}>
										<List.Item>
											<List.Content>
												<List.Header>
													<h2>{planets.name}</h2>
												</List.Header>
												<List.Description>
													<strong>Rotation</strong>
													<p>{planets.rotation}</p>
													<strong>Orbital</strong>
													<p>{planets.orbital}</p>
													<strong>Diameter</strong>
													<p>{planets.diameter}</p>
													<strong>Climate</strong>
													<p>{planets.climate}</p>
													<strong>Gravity</strong>
													<p>{planets.gravity}</p>
													<strong>Terrain</strong>
													<p>{planets.Terrain}</p>
													<strong>Surface</strong>
													<p>{planets.surface}</p>
													<strong>Population</strong>
													<p>{planets.population}</p>
												</List.Description>
											</List.Content>
										</List.Item>
									</Grid.Column>
								);
							})}
						</Grid>
					</Tab.Pane>
				</Container>
			),
		},
	];

   return (
		<Container>
			<Tab
				position="center"
				menu={{ secondary: true, pointing: true }}
				panes={panes}
			/>
		</Container>
	);

}

export default PlanetsWorld;