import styled from "styled-components";

export const NavbarMainDiv = styled.div`
width : 100%;
height : auto;
position: fixed;
top:0px;
background-image: linear-gradient(180deg, #00BF63, transparent);
align-items: center;
display: flex;
flex-direction: row;
z-index : 100;
`;

export const TajName = styled.span`
color : #30373C;
font-size: medium;
font-weight: 700;
`;

export const TajLogo = styled.img`
width : 1.5em;
height : 1.5em;
margin : 0.5em;
`;

export const RightContainer = styled.div`
margin-left :30%;
`;

export const LoginBtn = styled.div`
background-color:  #00BF63;
color : white;
padding : 0.5em 1em; 0.5em 1em;
margin : 0.5em;
border-radius : 5px;
cursor:pointer;
font-size: small;
`;