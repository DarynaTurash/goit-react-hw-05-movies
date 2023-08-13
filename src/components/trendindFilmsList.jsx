import { Link } from "react-router-dom";

export const TrendingFilmsList = ({ list }) => {
    return (
        <div>
            <ul>
                {list.map((film) => (<li key={film.id}><Link to={`/movies/${film.id}`}>{film.original_title || film.name}</Link></li> ))}
            </ul>
        </div>
    );
};