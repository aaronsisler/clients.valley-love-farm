import React from "react";
import PropTypes from "prop-types";
import Hyperlink from "../../atoms/hyperlink";
import Image from "../../atoms/image";

import "./farm-option.scss";

const FarmOption = ({ image, linkHref, text, title }) => (
  <div className="farm-option">
    <Image
      className="farm-option__image"
      src={image.source}
      altText={image.altText}
    />
    <div className="farm-option__content">
      <div className="farm-option__title">{title}</div>
      <div className="farm-option__text">{text}</div>
      <Hyperlink
        href={`/${linkHref}`}
        className="farm-option__nav-link"
        title="Find Out More"
      />
    </div>
  </div>
);

FarmOption.propTypes = {
  image: PropTypes.shape({
    altText: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  }),
  linkHref: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default FarmOption;
