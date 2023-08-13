import { API_KEY } from "utils/api.key";
import axios from 'axios';
import { parseISO, getYear } from 'date-fns';

export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
        const data = response.data;

        const id = data.id;
        const title = data.title || data.name;
        const poster = data.poster_path;
        const releaseDate = parseISO(`${data.release_date}`);
        const releaseYear = getYear(releaseDate);
        const overView = data.overview;
        const genres = data.genres.map(genre => genre.name).join(', ');
        const userScore = (data.vote_average * 10).toFixed(0);

        return {
            id,
            title,
            poster,
            releaseYear,
            overView,
            genres,
            userScore
        };

    } catch(error) {
        console.log(error);
    }
};