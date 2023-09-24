import styled from "styled-components"

interface GoDownProps {
    GoDown : boolean;
}

export const NavBarInList = styled.div`
width : 100%;
height : auto;
box-shadow: 0.5px 0.5px 4px rgb(37, 50, 44);
background-color: white ;
position: fixed;
z-index: 100;
align-items: center;
`;

export const CompanyLogoOnNav = styled.img`
width : 3em;
height : 3em;
margin : 0.5em;
`;

export const LocationSearchOnNav = styled.input`
width : 20em;
margin : 1em;
padding : 0.5em;
font-size : 15px;
border-radius: 1em;
font-style: italic;
padding-left : 15px;
:placeholder {
    color: #BF4F74;
}
`;

export const SearchContainer = styled.div`
padding-left :5em;
position : absolute;
top:0px;

@media only screen and (max-width: 600px) {
  padding-left :5em;
}
`;

export const LocationSearchBtnOnNav = styled.button`
background-color:  rgb(213, 255, 186);
width : 8em;
height : 3em;
box-shadow: 0.5px 0.5px 3px grey;
border-radius: 1em;
border: solid 0.5px greenyellow;
margin : 1em;
`;

export const LocationItemListOnNav = styled.div`
box-shadow: 0.5px 0.5px 3px black;
text-align : left;
position : absolute;
background-color: white;
top : 3.2em;
left: 7em;
width : 15em;
height : 10em;
z-index: -4;
overflow : auto;
`;

export const HorizontalLineOnNav = styled.hr`
    margin-left : 2em;
    margin-right : 2em;
`;

export const FilterCardOnNav = styled.div`
box-shadow: 0.5px 0.5px 4px rgb(37, 50, 44);
text-align : center;
border-radius: 1em;
position : absolute;
top : 3em;
left: 7em;
background-color: white;
width : 75em;
height : 15em;
z-index : -15;
`;


export const MainContainer = styled.div<GoDownProps>`
position : absolute;
top : 4em;
width : 100%;
height : auto;
${props => props.GoDown && `top : 20em;`}
`;

export const MainContainerListCard = styled.div`
box-shadow: 0.5px 0.5px 4px rgb(37, 50, 44);
text-align : left;
border-radius: 1em;
background-color: white;
width : auto;
height : auto;
margin: 1em;
padding : 0.5em;
`;
export const AddressContainer = styled.div`
width : 90%;
height : auto;
margin : 0.5em;
text-align : center;
align-items: center;
font-size : 20px;
font-weight : 800;
`;

export const ImageAndDetailsContainer = styled.div`
width : 100%;
height : auto;
text-align : center;
align-items: center;
display : flex;
flex-direction : row;
`;

export const ImageContainer =  styled.img`
width : 100%;
height : 20em;
margin : 0.5em;
`;

export const DetailsContainer =  styled.div`
width : 80%;
height : auto;
text-align : center;
align-items: center;
display : flex;
flex-direction : row;
`;

export const RowDetailsContainer =  styled.div`
width : 30%;
height : auto;
text-align : center;
align-items: center;
display : flex;
flex-direction : column;
`;

export const RentDataDiv = styled.div`
width : 70%;
height : auto;
text-align : center;
align-items: center;
margin : 0.5em;
padding : 1em;
border: 2px solid green ;
`;

export const SliderContainer = styled.div`
width : 40%;
height : 20em;
text-align : center;
background-color: #282c34;
padding : 3em;
`;