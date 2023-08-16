import { Container, Section } from "../commonStyles/ContainerAndSection";
import { ImageWrapper, Image, ContentWrapper, MovieName, OverView, TitleOverView, TitleGenres, Genres, InfoWrapper, BackLink } from "../components/MainInfoAboutFilm.styled";
import PropTypes from 'prop-types';

const MainInfoAboutFilm = ({ poster, title, releaseYear, userScore, overView, genres, backLink }) => {
    return (
        <Section>
            <Container>
            <BackLink to={backLink}><span>&#8592;</span> Go back</BackLink>
            <ContentWrapper>
            <ImageWrapper>
                <Image src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} />
            </ImageWrapper>
            <InfoWrapper>
                <MovieName>{title}({releaseYear})</MovieName>
                <p>User score: {userScore}%</p>
                <TitleOverView>Overview</TitleOverView>
                <OverView>{overView}</OverView>
                <TitleGenres>Genres</TitleGenres>
                <Genres>{genres}</Genres>
            </InfoWrapper>
            </ContentWrapper>
            </Container>
        </Section>
    );
};

MainInfoAboutFilm.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string,
    releaseYear: PropTypes.number,
    userScore: PropTypes.string,
    overView: PropTypes.string,
    genres: PropTypes.string,
    backLink: PropTypes.string,
};

export default MainInfoAboutFilm;