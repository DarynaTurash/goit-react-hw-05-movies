import styled from "styled-components";
import { Link } from "react-router-dom";

export const ImageWrapper = styled.div`
flex-shrink: 0;
width: 350px;
height: 550px;
overflow: hidden;
`;

export const Image = styled.img`
display: block;
width: 100%;
height: 100%;
object-fit: cover;
`;

export const ContentWrapper = styled.div`
display: flex;
gap: 20px;
`;

export const MovieName = styled.h2`
margin: 0;
`;

export const OverView = styled.p`
max-width: 450px;
margin: 0;
`;

export const TitleOverView = styled.h3`
margin: 0;
margin-bottom: 10px;
margin-top: 35px;
`;

export const TitleGenres = styled.h4`
margin: 0;
margin-bottom: 10px;
margin-top: 35px;
`;

export const Genres = styled.p`
margin: 0;
`;

export const InfoWrapper = styled.div`
padding: 25px 0 25px 0;
`;

export const BackLink = styled(Link)`
width: 80px;
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