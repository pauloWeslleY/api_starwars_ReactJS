import React, { useEffect, useState } from 'react';

export default function Films(props) {
   const [movies, setMovies] = useState([]);
	useEffect(() => {
		fetch('https://swapi.dev/api/films/')
			.then(res => res.json())
			.then(data => setMovies(data.results))
	}, [])

	const Films = movies.map((movies) => {
		return (
			<>
				<div>
					<h1>{movies.title}</h1>
				</div>
			</>
		);
	})

   return (
      <>
			<h1>{Films}</h1>
      </>
   )
}
