import styled from "styled-components";
import { Link } from "react-router-dom";

export const Input = styled.input`
font-size: 16px;
width: 250px;
padding: 10px 15px 10px 15px;
border-radius: 10px;
border: 1px solid black;
transition: border-color 250ms cubic-bezier(0.25, 0.1, 0.25, 1);
outline: none;

&:hover,
&:focus,
&:active {
    border-color: #FE9A05;
}
`;

export const ButtonLink = styled(Link)`
color: white;
background-color: #FE9A05;
border-radius: 10px;
padding: 10px 15px 10px 15px;
text-decoration: none;

&:hover,
&:focus {
    background-color: black;
}
`;

export const Form = styled.form`
display: flex;
align-items: center;
justify-content: start;
gap: 10px;
`;