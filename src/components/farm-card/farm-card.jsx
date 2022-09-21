import React from "react";
import PropTypes from "prop-types";

import styles from "./farm-card.scss";

const FarmCard = ({ price, title }) => (
  <div className={styles.farm - card}>
    <div className={styles.farm - card__title}>{title}</div>
    <div className={styles.farm - card__price}>{price}</div>
  </div>
);

FarmCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default FarmCard;
