import styled from "styled-components";

interface NavTitleProps {
  fontWeight? : '900' | '800'| '700'| '600' | '500' | '400';
  fontSize? : 'medium' | 'larger' | 'small' | 'large';
}

export const NavbarMainDiv = styled.div`
width : 100%;
height : 3em;
position: fixed;
top:0px;
background-color: white;
box-shadow: 1px 1px 7px #778899;
align-items: center;
display: flex;
flex-direction: row;
border-radius: 0 0 0.5em 0.5em;
z-index : 100;
justify-content: space-between;
`;

export const NavTitle = styled.span<NavTitleProps>`
color : #30373C;
font-size: ${(props) => (props.fontSize && props.fontSize)};
font-weight: ${(props) => (props.fontWeight && props.fontWeight)};
margin: 0 1em;
`;

export const TajLogo = styled.img`
width : 2em;
height : 2em;
margin : 0.5em;
`;

export const LogoAndName = styled.span`
align-items: center;
display: flex;
flex-direction: row;
`;

