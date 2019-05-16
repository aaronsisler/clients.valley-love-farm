import React from "react";
import Lawn from "../../components/lawn";
import Gallery from "../../components/gallery";
import lawnGallery from "../../content/lawn-gallery";
import LawnAdditional from "../../components/lawn-additional";
import "./lawn-container.scss";

const LawnContainer = () => (
  <div className="lawn-container">
    <Lawn />
    <br />
    <Gallery images={lawnGallery} />
    <br />
    <LawnAdditional />
  </div>
);

export default LawnContainer;
