import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const Header = styled.header`
padding: 18px 0;
border-bottom: 1px solid black;
background-color: black;
`;

export const Navigation = styled.nav`
display: flex;
align-items: center;
justify-content: start;
gap: 25px;
`;

export const Link = styled(NavLink)`
color: white;
font-size: 20px;
font-weight: 800;
transition: transform 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
text-decoration: none;


&:hover,
&:focus {
    transform: scale(1.1);
}
&.active {
    color: #FE9A05;
}
`;

