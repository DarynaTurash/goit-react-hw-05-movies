import { API_KEY } from "utils/api.key";
import axios from 'axios';

export const fetchReviews = async (movieId) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`);
        const data = response.data;

        const reviewDetails = data.results.map(review => ({
            author: review.author,
            text: review.content,
            id: review.id,
        }));
        
        return reviewDetails;
    } catch (error) {
        console.log(error);
    }
};