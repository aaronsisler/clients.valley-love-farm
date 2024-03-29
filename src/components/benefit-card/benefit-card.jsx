import React from "react";
import PropTypes from "prop-types";

import { Image } from "../../atoms/image";

import styles from "./benefit-card.module.scss";

const BenefitCard = ({ image, text, title }) => (
  <div className={styles.benefitCard}>
    <Image
      className={styles.benefitCard__image}
      src={image.src}
      alt={image.altText}
    />
    <div className={styles.benefitCard__content}>
      <div className={styles.benefitCard__contentTitle}>{title}</div>
      <div className={styles.benefitCard__contentText}>{text}</div>
    </div>
  </div>
);

BenefitCard.propTypes = {
  image: PropTypes.shape({
    altText: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export { BenefitCard };
