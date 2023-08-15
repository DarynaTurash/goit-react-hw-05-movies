import API_KEY from "utils/api.key";
import axios from 'axios';

async function fetchTrendindFilms() {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
        return response.data.results;
    } catch(error) {
        console.log(error);
    }
};

export default fetchTrendindFilms;
