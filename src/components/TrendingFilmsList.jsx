import { Link, useLocation } from "react-router-dom";

const TrendingFilmsList = ({ list }) => {
    const location = useLocation();
    return (
        <section>
            <ul>
                {list.map((film) => (<li key={film.id}><Link to={`/movies/${film.id}`} state={{ from: location }}>{film.original_title || film.name}</Link></li> ))}
            </ul>
        </section>
    );
};

export default TrendingFilmsList;