import React from "react";
import PropTypes from "prop-types";

import styles from "./farm-card.scss";

const FarmCard = ({ price, title }) => (
  <div className={styles.farmCard}>
    <div className={styles.farmCard__title}>{title}</div>
    <div className={styles.farmCard__price}>{price}</div>
  </div>
);

FarmCard.propTypes = {
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export { FarmCard };
