import styled from "styled-components";

interface ColumnAlign {
  Align?: string;
  Margin? : string;
  Width? : string;
}
interface RowAlign {
  Align?: string;
  Margin? : string;
}

export const MobBaseContainer = styled.div`
  width: auto;
  margin-top: 3em;
  padding-bottom: 5em;
  height: auto;
  text-align: left;
  justify-content: left;
  align-items: left;
  overflow-y: auto;
  display : flex;
  flex-direction : column;
`;

export const MobImageContainer = styled.div`
  width: auto;
  height: 15em;
  z-index: 0;
`;

export const MobImage = styled.img`
  width: 100%;
  height: 15em;
`;

export const ImageTittle = styled.div`
  background-color: black;
  color: white;
  position: absolute;
  top: 7em;
  right: 4%;
  padding: 0.5em;
  font-size: 10px;
  width: auto;
`;

export const MobImageIcon = styled.img`
  width: 15%;
  height: 1em;
`;

export const SliderContainer = styled.div`
width : 85%;
height : 25em;
text-align : center;
padding : 1em;
cursor: pointer;
`;

export const ImageContainer =  styled.img`
width : 100%;
height : 20em;
`;

export const PopUpContainer = styled.div`
position: fixed;
top: 0;
left: 0; 
right: 0;
bottom: 0;
background-color: black;
z-index: 2;
opacity : 0.8;
width: 100%;
height: auto; 
`;

export const PopUpInsideContainer = styled.div`
position: absolute;
top: 7em;
left: 0em;
display : flex;
flex-direction : column;
width: 100%;
height: 25em; 
z-index: 5;
text-align: center;
justify-content: center;
align-items: center;
`;

export const PropertyName = styled.h3`
font-size : 20px;
font-weight : 500;
margin: 0.5em 0.8em;
`;

export const PropertyAddress = styled.h3`
font-size : 14px;
font-weight : 400;
margin: 0.5em 1.2em;
`;

export const PropertyPrices = styled.h3`
font-size : 24px;
font-weight : 600;
margin: 0.5em 0.8em;
`;

export const PropertyOverviewTittle = styled.h5`
font-weight : 550;
margin: 0.5em 1.2em;
font-size: medium;
`;

export const Column = styled.section<ColumnAlign>`
  width: ${(props) => (props.Width ? props.Width : "auto")};
  height: auto;
  text-align: ${(props) => (props.Align ? props.Align : "center")};
  justify-content: ${(props) => (props.Align ? props.Align : "center")};
  align-items: ${(props) => (props.Align ? props.Align : "center")};
  display : flex;
  flex-direction : column;
  margin : ${(props) => (props.Margin ? props.Margin : "0 0")};
`;

export const Row = styled.section<RowAlign>`
  width: auto;
  height: auto;
  text-align: ${(props) => (props.Align ? props.Align : "center")};
  justify-content: ${(props) => (props.Align ? props.Align : "center")};
  align-items: ${(props) => (props.Align ? props.Align : "center")};
  display : flex;
  flex-direction : row;
  margin : ${(props) => (props.Margin ? props.Margin : "0 0")};
`;

export const OverviewTittle = styled.span`
font-size : medium;
font-weight : 300;
`;

export const OverviewData = styled.span`
font-size : 14px;
font-weight : 600;
`;

export const OverviewImage = styled.span`
text-align: center;
justify-content: center;
align-items: center;
display : flex;
flex-direction : column;
`;

export const AmenitiesContainer = styled.div`
width: 100%;
height: auto;
text-align: center;
justify-content: space-evenly;
align-items: center;
display: flex;
flex-wrap: wrap;
background-color: white;
`;

export const AmenitiesDiv = styled.div`
width: 30%;
height: 4em;
text-align: center;
justify-content: center;
align-items: center;
display: flex;
box-shadow: 0.5px 0.5px 4px #778899;
background: radial-gradient(#E5F8EF, white );
border-radius: 0.3em;
padding: 1em;
margin : 3%;
`;

export const FloorPlanDiv = styled.span`
text-align: center;
justify-content: center;
align-items: center;
display : flex;
flex-direction : column;
width : 100%;
height : auto;
`;

export const FloorPlanImage = styled.img`
text-align: center;
justify-content: center;
align-items: center;
display : flex;
flex-direction : column;
width : 92%;
height : 15em;
`;

export const FloorPlanTittle = styled.span`
margin : 0.5em;
font-size : 15px;
`;

export const PropertyNameAndLike = styled.div`
width: 95%;
height: auto;
margin-top: 0.4em;
text-align: center;
justify-content: space-between;
align-items: center;
display: flex;
flex-wrap: wrap;
background-color: white;
`;

export const LoaderInsideContainer = styled.div`
display : flex;
flex-direction : column;
width: 100%;
height: 80vh; 
z-index: 5;
text-align: center;
justify-content: center;
align-items: center;
`;

export const VideoContainer = styled.img`
width : 50%;
height : auto;
`;

export const Description = styled.p`
display : flex;
flex-direction : column;
width :auto;
height : auto;
margin: 0 1.2em;
text-align: justify;
`;