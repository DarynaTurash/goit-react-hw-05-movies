import { Container, Section } from "../commonStyles/ContainerAndSection";
import { BackLink } from "../pages/NotFound.styled";

const Error404 = () => {
    return (
        <Section>
            <Container>
            <h1>Error, something went wrong, please try again</h1>
            <BackLink to='/'>Go back to main page</BackLink>
            </Container>
        </Section>
    );
};

export default Error404;