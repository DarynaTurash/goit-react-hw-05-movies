import styled from "styled-components";

export const ImageWrapper = styled.div`
flex-shrink: 0;
width: 230px;
height: 270px;
overflow: hidden;
`;

export const Image = styled.img`
display: block;
width: 100%;
height: 100%;
object-fit: cover;
`;

export const Item = styled.li`
width: calc((100% - 80px) / 5);
`;

export const Name = styled.p`
font-size: 21px;
font-weight: 600;
text-align: center;
margin: 0;
`;

export const Character = styled.p`
text-align: center;
margin: 0;
margin-top: 10px;
`;

export const Wrapper = styled.div`
padding: 15px;
`;

