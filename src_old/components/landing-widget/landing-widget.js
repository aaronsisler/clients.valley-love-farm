import React from "react";
import PropTypes from "prop-types";
import "./landing-widget.scss";

const LandingWidget = ({ image, text, title }) => (
  <div className="landing-widget">
    <div className="landing-widget__image">
      <img src={image.source} alt={image.altText} />
    </div>
    <div className="landing-widget__title">{title}</div>
    <div className="landing-widget__text">{text}</div>
  </div>
);

LandingWidget.propTypes = {
  image: PropTypes.shape({
    altText: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  }),
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default LandingWidget;
