import { Link, useLocation } from "react-router-dom";

export const SearchQueryList = ({ list, query }) => {
    const location = useLocation();
    return (
        <div>
            <ul>
                {list.map((film) => (<li key={film.id}><Link to={`/movies/${film.id}`} state={{ from: location, query}}>{film.original_title || film.name}</Link></li> ))}
            </ul>
        </div>
    );
};