import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h3`
margin: 0;
margin-bottom: 20px;
`;

export const Section = styled.section`
padding-top: 20px;
padding-bottom: 20px;
margin-top: 20px;
`;

export const List = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`;


export const LinkItem = styled(Link)`
text-decoration: 0;
cursor: pointer;
color: black;

&:hover,
&:focus,
&:active {
color: #FE9A05;
}

`;

