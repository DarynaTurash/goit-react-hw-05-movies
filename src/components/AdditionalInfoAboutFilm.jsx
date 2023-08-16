import { Container } from "../commonStyles/ContainerAndSection";
import { Title, Section, List, LinkItem } from "../components/AdditionalInfoAboutFilm.styled";

const AdditionalInfoAboutFilm = () => {
    return (
        <Section>
            <Container>
                <Title>Additional information</Title>
                <List>
                    <li><LinkItem to="cast"><span>&#8594;</span> Cast</LinkItem></li>
                    <li><LinkItem to="reviews"><span>&#8594;</span> Reviews</LinkItem></li>
                </List>
            </Container>
        </Section>
    );
}; 

export default AdditionalInfoAboutFilm;