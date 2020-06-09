import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./hamburger.scss";

const Hamburger = ({ isToggled, onClick }) => {
  const toggleClassname = isToggled ? "hamburger--toggled" : undefined;

  return (
    <div className={cn("hamburger", toggleClassname)} onClick={onClick}>
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
    </div>
  );
};

Hamburger.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Hamburger;
