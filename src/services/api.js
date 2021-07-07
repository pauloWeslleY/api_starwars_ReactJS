import axios from 'axios';

export const swapiGet = (param) => {
	return axios.get(`https://swapi.dev/api/${param}`);
}

// const [people, setPeople] = useState([]);
// useEffect(() => {
// 	axios.get("http://swapi.dev/api/people/?_limit=30&page=1&format=json")
// 		.then((response) => {
// 			setPeople(response.data.results);
// 		});
// }, []);

