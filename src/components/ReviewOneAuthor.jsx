import { Title } from '../components/ReviewOneAuthor.styled';
import PropTypes from 'prop-types';

const ReviewOneAuthor = ({ name, text }) => {
    return (
     <div>
        <Title>Author: {name}</Title>
        <p>{text}</p>
     </div>
    );
};

ReviewOneAuthor.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default ReviewOneAuthor;