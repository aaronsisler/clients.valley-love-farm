import React from "react";
import cn from "classnames";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

import styles from "./input.module.scss";

const Input = ({
  className,
  errorMessage,
  hasError,
  label,
  name,
  registerProp,
}) => (
  <TextField
    className={cn(className, styles.input)}
    error={hasError}
    label={label}
    name={name}
    helperText={hasError ? errorMessage : ""}
    {...registerProp(name)}
  />
);

Input.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  registerProp: PropTypes.func.isRequired,
};

export { Input };
