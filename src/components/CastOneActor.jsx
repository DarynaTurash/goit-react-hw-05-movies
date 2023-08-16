import { ImageWrapper, Image, Item, Name, Character, Wrapper } from "../components/CastOneActor.styled";
import userNotFoundedImage from "../images/user.jpg";
import PropTypes from 'prop-types';

const CastOneActor = ({ name, photo, character }) => {
    return (
    <Item>
    <ImageWrapper>
        {photo ? <Image src={`https://image.tmdb.org/t/p/original/${photo}`} alt={name} /> : <Image src={userNotFoundedImage} alt="User is not found" />}
    </ImageWrapper>
    <Wrapper>
    <Name>{name}</Name>
    <Character>Character: {character}</Character>
    </Wrapper>
    </Item>
    );
};

CastOneActor.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string,
    character: PropTypes.string.isRequired,
};

export default CastOneActor;