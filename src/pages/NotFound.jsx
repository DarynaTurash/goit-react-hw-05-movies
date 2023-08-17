import { BackLink } from "../pages/NotFound.styled";
import { Container, Section } from "../commonStyles/ContainerAndSection";

const NotFound = () => {
    return (
        <Section>
            <Container>
                <h1>Sorry, but this is not a valid url</h1>
                <BackLink to='/'>Go back to main page</BackLink>
            </Container>
        </Section>
    );
};

export default NotFound;