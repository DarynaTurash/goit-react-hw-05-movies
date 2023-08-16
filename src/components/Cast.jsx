import fetchCastDetails from "fetches/fetchCastDetails";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import CastOneActor from "./CastOneActor";
import { Container, Section } from "../commonStyles/ContainerAndSection";
import { List } from "../components/Cast.styled";

const Cast = () => {
    const [castDetails, setCastDetails] = useState([]);
    const { movieId } = useParams();
    const location = useLocation();


    const fetchAndSetCastDetails = async (id) => {
        try {
            const details = await fetchCastDetails(id);
            setCastDetails(details); 
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAndSetCastDetails(movieId);
    }, [movieId, location]);

    return (
        <Section>
            <Container>
            <List>
                {castDetails.map(oneActor => (
                    <CastOneActor
                        key={oneActor.name}
                        name={oneActor.name}
                        photo={oneActor.profile_path}
                        character={oneActor.character}
                    />
                ))}
            </List>
            </Container>
        </Section>
    );
};

export default Cast;