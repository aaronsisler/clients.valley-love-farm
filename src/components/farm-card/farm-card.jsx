import React from "react";
import PropTypes from "prop-types";

import "./farm-card.scss";

const FarmCard = ({ price, title }) => (
  <div className="farm-card">
    <div className="farm-card__title">{title}</div>
    <div className="farm-card__price">{price}</div>
  </div>
);

FarmCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default FarmCard;
