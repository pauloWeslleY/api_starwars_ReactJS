import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { List, Grid } from 'semantic-ui-react'

const MoviesList = () => {
   const [moviesList, setMoviesList] = useState([]);
   useEffect(() => {
      axios.get("http://swapi.dev/api/films/?format=json")
         .then((response) => {
            setMoviesList(response.data.results);
         });
   }, []);

   const Movies = moviesList.map(films => {
      return {
         title: films.title,
         episode: films.episode_id,
         description: films.opening_crawl,
         produced: films.producer,
         debut: films.release_date,
         createdAt: films.created,
         editedAt: films.edited
      }
   })

   return (
      <>
         <Grid columns={3}>
            {Movies.map(movie => {
               return (
						<Grid.Column key={movie.id}>
							<List selection>
								<List.Item>
									<List.Content>
										<List.Header>
											<h3>{movie.title}</h3>
										</List.Header>
										<List.Description>
											<strong>Episode</strong>
											<p>{movie.episode}</p>
											<strong>Description</strong>
											<p>{movie.description}</p>
											<strong>Producer</strong>
											<p>{movie.produced}</p>
											<strong>Release Date</strong>
											<p>{movie.debut}</p>
											<strong>Created</strong>
											<p>{movie.createdAt}</p>
											<strong>Edited</strong>
											<p>{movie.editedAt}</p>
										</List.Description>
									</List.Content>
								</List.Item>
							</List>
						</Grid.Column>
					);
            })}
         </Grid>
      </>
   );
}

export default MoviesList;