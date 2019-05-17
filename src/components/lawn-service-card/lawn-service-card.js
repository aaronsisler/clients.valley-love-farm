import React from "react";
import PropTypes from "prop-types";
import "./lawn-service-card.scss";

const LawnServiceCard = ({ pricing, title, details }) => (
  <div className="lawn-service-card">
    <div className="lawn-service-card__title">{title}</div>
    <div className="lawn-service-card__pricing">
      <div className="lawn-service-card__pricing-from">{pricing.from}</div>
      <div className="lawn-service-card__pricing-price">{pricing.price}</div>
      <div className="lawn-service-card__pricing-units">{pricing.units}</div>
    </div>
    <div className="lawn-service-card__details">
      <ul>
        {details.map((detail, index) => (
          <li className="lawn-service-card__details-detail" key={index}>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

LawnServiceCard.propTypes = {
  details: PropTypes.array.isRequired,
  pricing: PropTypes.shape({
    from: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired
  }),
  title: PropTypes.string.isRequired
};

export default LawnServiceCard;
