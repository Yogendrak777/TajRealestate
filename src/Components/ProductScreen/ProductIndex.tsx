import React from "react";
import ListNavbar from "./ListNavbar";
import {
  MainContainer,
  AddressContainer,
  DetailsContainer,
  ImageAndDetailsContainer,
  RentDataDiv,
  RowDetailsContainer,
  DescriptionContainer,
  ColumnDetailsContainer
} from "./Skins";
import Carousel from "./Carousel";

export default function ProductIndex() {
  return (
    <div>
      <ListNavbar />
      <MainContainer>
        <AddressContainer> this is address bar </AddressContainer>
        <ImageAndDetailsContainer>
          <Carousel/>
          {/* <ImageContainer src={BGImage1} /> */}

          <ColumnDetailsContainer>
          <RentDataDiv>
          <button>Shortlist this Property </button>
          </RentDataDiv>  
          <RentDataDiv>
          <button>Message </button>
          </RentDataDiv>
           <RentDataDiv>
            <button>Contact the Agent </button>
           </RentDataDiv>
          </ColumnDetailsContainer>
          
          <DetailsContainer>
            <RowDetailsContainer>
              <RentDataDiv>
                <div>rent</div>
                <div>Negotiable</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>Sq.Ft</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>Deposit</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>No. of Bedroom</div>
              </RentDataDiv>
            </RowDetailsContainer>
            <RowDetailsContainer>
              <RentDataDiv>
                <div>rent</div>
                <div>Property Type</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>Preferred Tenant</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>Possession</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>Parking</div>
              </RentDataDiv>
            </RowDetailsContainer>
            <RowDetailsContainer>
              <RentDataDiv>
                <div>rent</div>
                <div>Age of Building</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>Balcony</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>Posted On</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>Furnishing Status</div>
              </RentDataDiv>
            </RowDetailsContainer>
            <RowDetailsContainer>
              <RentDataDiv>
                <div>rent</div>
                <div>Facing</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>Water Supply</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>Floor</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>Bathroom</div>
              </RentDataDiv>
            </RowDetailsContainer>
            <RowDetailsContainer>
              <RentDataDiv>
                <div>rent</div>
                <div>Non-Veg Allowed</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>Gated Security</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>Unique Views</div>
              </RentDataDiv>
              <RentDataDiv>
                <div>rent</div>
                <div>Shortlists</div>
              </RentDataDiv>
            </RowDetailsContainer>
          </DetailsContainer>
          <DescriptionContainer>
          Description 
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, temporibus dolores veniam nisi nemo accusamus pariatur quo dicta, excepturi quos odit repellendus ut consequuntur, eveniet consectetur magni eius? Cupiditate, iure!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati explicabo sequi assumenda. Adipisci non eveniet nihil corrupti impedit, placeat harum quasi quas atque doloremque commodi nam delectus, et fugiat? 
          </p>
        </DescriptionContainer>
        </ImageAndDetailsContainer>
      </MainContainer>
    </div>
  );
}
