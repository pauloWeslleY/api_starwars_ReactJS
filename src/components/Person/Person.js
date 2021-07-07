import React, {useEffect, useState} from "react";
import {Card, Grid} from 'semantic-ui-react';
import { swapiGet } from "../../services/api";

export default function Person() {
	swapiGet()
	const [people, setPeople] = useState([]);
	const [people2, setPeople2] = useState([]);
	useEffect(() => {
		Promise.all([
			swapiGet("people/"),
			swapiGet("people/?page=2&format=json"),
		]).then((results) => {
			setPeople(results[0].data.results);
			setPeople2(results[1].data.results);
		});
	}, []);

	const person = {
		title: "Person"
	}

	return (
		<>
			<h1>{person.title}</h1>
			<Grid columns={5}>
				{people.map((people, i) => {
					return (
						<Grid.Column key={i}>
							<Card>
								<Card.Content>
									<Card.Header>{people.name}</Card.Header>
									<Card.Description>
										<strong>Height</strong>
										<p>{people.height}</p>
										<strong>Mass</strong>
										<p>{people.mass}</p>
										<strong>Gender</strong>
										<p>{people.gender}</p>
										<strong>Birth</strong>
										<p>{people.birth_year}</p>
									</Card.Description>
								</Card.Content>
							</Card>
						</Grid.Column>
					);
				})}
				{people2.map((people, i) => {
					return (
						<Grid.Column key={i}>
							<Card>
								<Card.Content>
									<Card.Header>{people.name}</Card.Header>
									<Card.Description>
										<strong>Height</strong>
										<p>{people.height}</p>
										<strong>Mass</strong>
										<p>{people.mass}</p>
										<strong>Gender</strong>
										<p>{people.gender}</p>
										<strong>Birth</strong>
										<p>{people.birth_year}</p>
									</Card.Description>
								</Card.Content>
							</Card>
						</Grid.Column>
					);
				})}
			</Grid>
		</>
	);
};

