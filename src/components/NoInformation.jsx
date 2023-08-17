import { Container, Section } from "../commonStyles/ContainerAndSection";
import { BackLink } from "../pages/NotFound.styled";

const NoInformation = () => {
    return (
        <Section>
            <Container>
            <h1>Sorry, we did not get any information</h1>
            <BackLink to='/'>Go back to main page</BackLink>
            </Container>
        </Section>
    );
};

export default NoInformation;