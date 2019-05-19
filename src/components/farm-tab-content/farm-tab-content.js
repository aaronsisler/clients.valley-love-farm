import React from "react";
import PropTypes from "prop-types";
import "./farm-tab-content.scss";

const FarmTabContent = ({ content }) => (
  <div className="farm-tab-content">
    {content.map((item, index) => (
      <div className="farm-tab-content__item" key={index}>
        <div className="farm-tab-content__item-title">{item.title}</div>
        <div className="farm-tab-content__item-price">{item.price}</div>
      </div>
    ))}
  </div>
);

FarmTabContent.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FarmTabContent;
