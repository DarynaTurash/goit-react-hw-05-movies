import { Input, ButtonLink, Form } from "../components/SearchBox.styled";
import { Container, Section } from "../commonStyles/ContainerAndSection";
import PropTypes from 'prop-types';

const SearchBox = ({ query, onSearch, onChange }) => {
    return (
        <Section>
            <Container>
                <Form>
                    <Input
                        type="text"
                        value={query}
                        onChange={event => onChange(event.target.value)}
                        autoFocus
                        placeholder="Enter the title of the movie..."
                    />
                    <ButtonLink
                        to={`/movies?movieName=${query}`}
                        onClick={onSearch}
                    >
                        Search
                    </ButtonLink>
                </Form>
            </Container>
        </Section>
    );
};

SearchBox.propTypes = {
    query: PropTypes.string,
    onSearch: PropTypes.func,
    onChange: PropTypes.func,
};

export default SearchBox;