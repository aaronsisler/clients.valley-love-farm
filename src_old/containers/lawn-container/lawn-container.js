import React from "react";
import LawnServices from "../../components/lawn-services";
import Gallery from "../../components/gallery";
import lawnGallery from "../../content/lawn-gallery";
import LawnAdditionalServices from "../../components/lawn-additional-services";
import "./lawn-container.scss";

const LawnContainer = () => (
  <div className="lawn-container">
    <LawnServices />
    <br />
    <Gallery images={lawnGallery} />
    <br />
    <LawnAdditionalServices />
  </div>
);

export default LawnContainer;
