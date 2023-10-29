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
@media only screen and (max-width: 600px) {
      background-color: lightblue;
      height : auto;
  }
`;

export const TajName = styled.span`
color : #30373C;
font-size: larger;
font-weight: 800;
`;

export const TajLogo = styled.img`
width : 2em;
height : 2em;
margin : 0.5em;
`;

export const RightContainer = styled.div`
padding-left :40em;
@media only screen and (max-width: 600px) {
  padding-left :5em;
}
`;

export const NavBarBtn = styled.button`
padding : 0.5em;
left: 50em;
margin : 1em;
background-color:  rgb(213, 255, 186);
width : 8em;
box-shadow: 1px 1px 5px grey;
border-radius: 1em;
border: solid 0.5px greenyellow;
`;