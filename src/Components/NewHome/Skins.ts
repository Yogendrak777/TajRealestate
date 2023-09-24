import styled from "styled-components"

interface ShowFiltersCardProps {
    showFiltersCard : boolean;
}

interface changeOnClickProps {
    changeOnClick : boolean;
}

export const NewHomePage = styled.div`
text-align : center;
align-items: center;
`;

export const BGImageOfHomePage = styled.img`
width: 100%;
position : absolute;
top : 0px;
left: 0px;
height : 20em;
position : absolute;
z-index  : -100;

@media only screen and (max-width: 600px) {
    top: 4em;
    height : 10em;
}
`;

export const CardOnMainHeader = styled.div`  
box-shadow: 0.5px 0.5px 4px rgb(37, 50, 44);
text-align : center;
border-radius: 1em;
position : absolute;
top : 17em;
left: 23em;
background-color: white;
width : auto;
height : auto;


@media only screen and (max-width: 600px) {
    top: 16em;
    width : 20em;
    height : 7em;
    left: 2em;
}
`;

export const CardSeperator = styled.div`
text-align : center;
margin : 0.5px;
width : auto;
height : auto;
display: flex;
flex-direction : row;
align-items: center;
`;

export const CardIconPackage = styled.div<changeOnClickProps>`
margin : 1em;
margin-left : 1.5em;
margin-right: 1.5em;
width : auto;
height : auto;
display: flex;
flex-direction : column;
${props => props.changeOnClick && ` border-bottom: solid 3px #75A340;`}
> text {
    text-align : center;
}
`;

export const IconOnCard = styled.img`
width : 4em;
height : 4em;
@media only screen and (max-width: 600px) {
    margin : 0.5em;
    width : 2em;
    height : 2em;
}
`;

export const TextOfIcon = styled.text`
text-align : center;
color : black;
font-size: 10px;
`;

export const LocationSearch = styled.input`
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

export const LocationItemList = styled.div`
box-shadow: 0.5px 0.5px 3px black;
text-align : left;
position : absolute;
background-color: white;
top : 28.5em;
left: 24em;
width : 30em;
height : 10em;
z-index: -4;
overflow : auto;
`;

export const HorizontalLine = styled.hr`
    margin-left : 2em;
    margin-right : 2em;
`;

export const LocationSearchBtn = styled.button`
background-color:  rgb(213, 255, 186);
width : 8em;
height : 3em;
box-shadow: 0.5px 0.5px 3px grey;
border-radius: 1em;
border: solid 0.5px greenyellow;
margin : 1em;
`;

export const FilterCardRight = styled(CardOnMainHeader)`
position : absolute;
top : 28em;
left: 25em;
background-color: white;
width : 45em;
height : 15em;
z-index : -5;
`;

export const BottomHeaderSection = styled(CardSeperator)<ShowFiltersCardProps>`
flex-direction : row;
position : absolute;
top : 33em;
left : 8em;
width : auto;
text-align : center;
align-items: center;
${props => props.showFiltersCard && `top : 45em;` }

@media only screen and (max-width: 600px) {
    top : 30em;
    left : 0em;
}
`;

export const AddDetailsCard = styled.div`
background-color: #75A340;
color : white;
width : 18em;
height : 14em;
box-shadow: 0.5px 0.5px 4px grey;
text-align : left;
border-radius: 1em;
margin-left : 4em;
align-items: center;
padding-left : 20px;
padding-right : 20px;

@media only screen and (max-width: 600px) {
    width : 10em;
    width : auto;
    height : auto;
}
`;

export const AddPropertyBtn = styled(LocationSearchBtn)`
width : 18em;
height : 3em;
margin-top: 2em;
`;

export const DreamPropertyBtn = styled(AddPropertyBtn)`
margin-top: 4em;
`;

export const SalesInBangaloreContainer = styled.div<ShowFiltersCardProps>`
width : 100%;
position : absolute;
top : 50em;
text-align : center;
${props => props.showFiltersCard && `top : 60em;` }
`;

export const PropertiesTittleInHome = styled.h1`
font-weight: 700;
`;

export const PropertiesInBangBody = styled(CardSeperator)`
flex-direction : row;
width : auto;
text-align : center;
align-items: center;

@media only screen and (max-width: 600px) {
    top : 30em;
    left : 0em;
}
`;

export const ImageCard = styled(AddDetailsCard)`
background-color: white;
width : 15em;
height : 15em;
margin-left : 1em;

@media only screen and (max-width: 600px) {
    width : 10em;
    width : auto;
    height : auto;
}
`;