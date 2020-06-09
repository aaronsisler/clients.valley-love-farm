import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./option.scss";

const Option = ({ image, linkPath, text, title }) => (
  <div className="option">
    <div className="option__image">
      <img src={image.source} alt={image.altText} />
    </div>
    <div className="option__content">
      <div className="option__content-title">{title}</div>
      <div className="option__content-text">{text}</div>
      <Link to={`/${linkPath}`} className="nav_link">
        Find Out More
      </Link>
    </div>
  </div>
);

Option.propTypes = {
  image: PropTypes.shape({
    altText: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  }),
  linkPath: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default Option;
