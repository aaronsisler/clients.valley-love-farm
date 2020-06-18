import React from "react";
import Hyperlink from "../../atoms/hyperlink";
import Image from "../../atoms/image";
import PropTypes from "prop-types";

import "./service-option.scss";

const ServiceOption = ({ image, linkPath, text, title }) => (
  <div className="service-option">
    <Image
      className="service-option__image"
      src={image.source}
      altText={image.altText}
    />
    <div className="service-option__content">
      <div className="service-option__content-title">{title}</div>
      <div className="service-option__content-text">{text}</div>
      <Hyperlink
        href={`/${linkPath}`}
        className="service-option__nav_link"
        title="Find Out More"
      />
    </div>
  </div>
);

ServiceOption.propTypes = {
  image: PropTypes.shape({
    altText: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  }),
  linkPath: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default ServiceOption;
