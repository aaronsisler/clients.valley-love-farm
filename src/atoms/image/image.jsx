import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./image.module.scss";

const Image = ({ alt, className, src }) => (
  <img className={cn(className, styles.image)} src={src} alt={alt} />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export { Image };
