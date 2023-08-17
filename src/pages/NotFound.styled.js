import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
width: 180px;
display: block;
text-decoration: none;
text-align: center;
background-color: #FE9A05;
color: white;
border-radius: 10px;
padding: 10px 15px 10px 15px;
margin: 0;
margin-bottom: 15px;
transition: background-color 250ms cubic-bezier(0.25, 0.1, 0.25, 1);

&:hover,
&:focus {
    background-color: black;
}
`;