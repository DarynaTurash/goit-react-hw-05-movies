import { Link } from "react-router-dom";

const AdditionalInfoAboutFilm = () => {
    return (
        <div>
            <h3>Additional information</h3>
            <ul>
            <li><Link to="cast">Cast</Link></li>
            <li><Link to="reviews">Reviews</Link></li>
            </ul>
        </div>
    );
}; 

export default AdditionalInfoAboutFilm;