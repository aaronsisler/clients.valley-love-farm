import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./hamburger.module.scss";

const Hamburger = ({ isToggled, onClick }) => {
  const toggleClassname = isToggled ? styles.hamburgerToggled : undefined;

  return (
    <div className={cn(styles.hamburger, toggleClassname)} onClick={onClick}>
      <div className={styles.hamburger__line}></div>
      <div className={styles.hamburger__line}></div>
      <div className={styles.hamburger__line}></div>
    </div>
  );
};

Hamburger.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { Hamburger };
