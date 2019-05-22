import React from "react";
import PropTypes from "prop-types";
import GalleryImage from "../gallery-image";
import "./gallery.scss";

const Gallery = ({ images }) => (
  <div className="gallery">
    {images.map(image => (
      <GalleryImage key={image.key} image={image} />
    ))}
  </div>
);

Gallery.propTypes = {
  images: PropTypes.array.isRequired
};

export default Gallery;
