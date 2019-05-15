import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./service.scss";

const Service = ({ image, linkPath, text, title }) => (
  <div className="service">
    <div className="service__image">
      <img src={image.source} alt={image.altText} />
    </div>
    <div className="service__content">
      <div className="service__content-title">{title}</div>
      <div className="service__content-text">{text}</div>
      <Link to={`/${linkPath}`} className="nav_link">
        Find Out More
      </Link>
    </div>
  </div>
);

Service.propTypes = {
  image: PropTypes.shape({
    altText: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  }),
  linkPath: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default Service;
