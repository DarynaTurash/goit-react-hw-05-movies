import { useLocation } from "react-router-dom";
import { Container } from "../commonStyles/ContainerAndSection";
import { List, FilmLink } from "../components/QueryList.styled";
import PropTypes from 'prop-types';

const SearchQueryList = ({ list }) => {
    const location = useLocation();
    return (
        <Container>
            <List>
                {list.map((film) => (<li key={film.id}><FilmLink to={`/movies/${film.id}`} state={{ from: location }}>{film.original_title || film.name}</FilmLink></li> ))}
            </List>
        </Container>
    );
};

SearchQueryList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          original_title: PropTypes.string,
          name: PropTypes.string,
        })),
};

export default SearchQueryList;