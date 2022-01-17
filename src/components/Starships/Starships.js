import React, { useState, useEffect } from 'react';
import { Grid, Card, Message} from 'semantic-ui-react';
import { swapiGet } from '../../services/api';


export default function StarshipsSW() {
   swapiGet()
   const [starships, setStarships] = useState([]);
   const [starships2, setStarships2] = useState([]);
   // const [starships3, setStarships3] = useState([]);
   // const [starships4, setStarships4] = useState([]);
   useEffect(() => {
      Promise.all([
         swapiGet("starships/"),
         swapiGet("starships/?page=2&format=json"),
         swapiGet("starships/?page=3&format=json"),
         swapiGet("starships/?page=4&format=json"),
      ]).then((results) => {
         setStarships(results[0].data.results);
         setStarships2(results[1].data.results);
         // setStarships3(results[2].data.results);
         // setStarships4(results[3].data.results);
      });
   }, []);
   console.log(starships, 'work');

   const StarshipsAll = starships.map(starships => {
      return {
			name: starships.name,
			model: starships.model,
			fabricator: starships.manufacturer,
			max_speed: starships.max_atmosphering_speed,
			passengers: starships.passengers,
         capacity: starships.cargo_capacity,
         rating: starships.hyperdrive_rating,
         class: starships.starship_class,
         mglt: starships.MGLT
		};
   });
   const Starships = starships2.map(starships => {
      return {
			name: starships.name,
			model: starships.model,
			fabricator: starships.manufacturer,
			max_speed: starships.max_atmosphering_speed,
			passengers: starships.passengers,
         capacity: starships.cargo_capacity,
         rating: starships.hyperdrive_rating,
         class: starships.starship_class,
         mglt: starships.MGLT
		};
   });
   // const StarshipsAll1 = starships.map(starships => {
   //    return {
	// 		name: starships.name,
	// 		model: starships.model,
	// 		fabricator: starships.manufacturer,
	// 		max_speed: starships.max_atmosphering_speed,
	// 		passengers: starships.passengers,
   //       capacity: starships.cargo_capacity,
   //       rating: starships.hyperdrive_rating,
   //       class: starships.starship_class,
   //       mglt: starships.MGLT
	// 	};
   // });

   const names = {
      title: "Starships"
   }
   return (
		<>
         <Grid columns={5}>
            {StarshipsAll.map((starships) => {
               return (
                  <Grid.Column key={starships.id}>
                     <Card.Group>
                        <Card fluid color='red'>
                           <Card.Content>
                              <Card.Header>
                                 <h2>{starships.name}</h2>
                              </Card.Header>
                              <Card.Description>
                                 <strong>Model</strong>
                                 <p>{starships.model}</p>
                                 <strong>Fabricator</strong>
                                 <p>{starships.fabricator}</p>
                                 <strong>Max_speed</strong>
                                 <p>{starships.max_speed}</p>
                                 <strong>Passengers</strong>
                                 <p>{starships.passengers}</p>
                              </Card.Description>
                           </Card.Content>
                        </Card>
                     </Card.Group>
                  </Grid.Column>
               );
            })}
         </Grid>
         <Message floating color='red'><h1>{ names.title }</h1></Message>
         <Grid columns={5}>
            {Starships.map((starships) => {
               return (
                  <Grid.Column key={starships.id}>
                     <Card.Group>
                        <Card fluid color='teal'>
                           <Card.Content>
                              <Card.Header>
                                 <h2>{starships.name}</h2>
                              </Card.Header>
                              <Card.Description>
                                 <strong>Model</strong>
                                 <p>{starships.model}</p>
                                 <strong>Fabricator</strong>
                                 <p>{starships.fabricator}</p>
                                 <strong>Max_speed</strong>
                                 <p>{starships.max_speed}</p>
                                 <strong>Passengers</strong>
                                 <p>{starships.passengers}</p>
                              </Card.Description>
                           </Card.Content>
                        </Card>
                     </Card.Group>
                  </Grid.Column>
               );
            })}
         </Grid>
		</>
	);
}

