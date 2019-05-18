import React from "react";
import PropTypes from "prop-types";
import "./farm-tab-panel.scss";

const FarmTabPanel = ({ content }) => (
  <div className="farm-tab-panel">
    {content.map((item, index) => (
      <div className="farm-tab-panel__item" key={index}>
        <div className="farm-tab-panel__item-title">{item.title}</div>
        <div className="farm-tab-panel__item-price">{item.price}</div>
      </div>
    ))}
  </div>
);

FarmTabPanel.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FarmTabPanel;
