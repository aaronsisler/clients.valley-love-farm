import React from "react";
import Image from "../../atoms/image";
import PropTypes from "prop-types";

import "./benefit-card.scss";

const BenefitCard = ({ image, text, title }) => (
  <div className="benefit-card">
    <Image
      className="benefit-card__image"
      src={image.src}
      altText={image.altText}
    />
    <div className="benefit-card__content">
      <div className="benefit-card__content-title">{title}</div>
      <div className="benefit-card__content-text">{text}</div>
    </div>
  </div>
);

BenefitCard.propTypes = {
  image: PropTypes.shape({
    altText: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }),
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default BenefitCard;
