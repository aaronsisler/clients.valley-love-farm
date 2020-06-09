import React from "react";
import PropTypes from "prop-types";
import "./gallery-image.scss";

const GalleryImage = ({ image }) => (
  <div className="gallery-image">
    <img src={image.source} alt={image.altText} />
  </div>
);

GalleryImage.propTypes = {
  image: PropTypes.shape({
    altText: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  })
};

export default GalleryImage;
