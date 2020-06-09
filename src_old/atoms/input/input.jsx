import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./input.scss";

const Input = ({ hasError, label, name, refProp }) => (
  <div className="input">
    <input name={name} ref={refProp} required type="text" />
    <label
      htmlFor={name}
      className={cn("input__label", hasError ? "input__label--error" : "")}
    >
      <span className={cn("input__span", hasError ? "input__span--error" : "")}>
        {label}
      </span>
    </label>
  </div>
);

Input.propTypes = {
  hasError: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  refProp: PropTypes.func.isRequired
};

export default Input;
