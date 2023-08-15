import API_KEY from "utils/api.key";
import axios from 'axios';

const fetchSearchQueryFilms = async (searchQuery) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${API_KEY}`);
        return response.data.results;
    } catch(error) {
        console.log(error);
    }
};

export default fetchSearchQueryFilms;