import { useLocation } from "react-router-dom";
import { Title, List, FilmLink } from "../components/TrendingFilmsList.styled";
import { Section, Container} from "../commonStyles/ContainerAndSection";
import PropTypes from 'prop-types';

const TrendingFilmsList = ({ list }) => {
    const location = useLocation();
    return (
        <Section>
            <Container>
                    <Title>Trending today</Title>
                    <List>
                        {list.map((film) => (<li key={film.id}><FilmLink to={`/movies/${film.id}`} state={{ from: location }}>{film.original_title || film.name}</FilmLink></li> ))}
                    </List>
            </Container>
        </Section>
    );
};

TrendingFilmsList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          original_title: PropTypes.string,
          name: PropTypes.string,
        })),
};

export default TrendingFilmsList;