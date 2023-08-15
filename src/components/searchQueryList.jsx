import { Link, useLocation } from "react-router-dom";

const SearchQueryList = ({ list }) => {
    const location = useLocation();
    return (
        <div>
            <ul>
                {list.map((film) => (<li key={film.id}><Link to={`/movies/${film.id}`} state={{ from: location }}>{film.original_title || film.name}</Link></li> ))}
            </ul>
        </div>
    );
};

export default SearchQueryList;