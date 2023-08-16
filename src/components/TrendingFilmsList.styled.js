import { Link } from 'react-router-dom';
import styled from "styled-components";


export const Title = styled.h1`
margin: 0;
`;

export const List = styled.ul`
padding-left: 15px;
`;

export const FilmLink = styled(Link)`
text-decoration: 0;
cursor: pointer;
color: black;
transition: font-weight 250ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 250ms cubic-bezier(0.25, 0.1, 0.25, 1);


&:hover,
&:focus {
color: #FE9A05;
font-weight: 800;
transform: scale(1.1);
}`;