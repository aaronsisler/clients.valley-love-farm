import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./image.scss";

const Image = ({ altText, className, src }) => (
  <img className={cn("image", className)} src={src} alt={altText} />
);

Image.propTypes = {
  altText: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default Image;
