import React from "react";
import { LoaderInsideContainer, VideoContainer } from "./Skins";
import LoaderFile from "../../Components/assets/file-transfer2.gif";

export default function LoaderPD() {
  return (
    <div>
      <LoaderInsideContainer>
        <VideoContainer src={LoaderFile} alt="this slowpoke moves" />
      </LoaderInsideContainer>
    </div>
  );
}
