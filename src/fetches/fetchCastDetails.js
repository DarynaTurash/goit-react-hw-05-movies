import API_KEY from "utils/api.key";
import axios from 'axios';

const fetchCastDetails = async (movieId) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
        const data = response.data;

        const castDetails = data.cast.map(actorInfo => ({
            name: actorInfo.name,
            profile_path: actorInfo.profile_path,
            character: actorInfo.character
        }));
        
        return castDetails;
    } catch (error) {
        console.log(error);
    }
};

export default fetchCastDetails;