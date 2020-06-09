import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const FormError = ({ error }) => (
  <div className="form_error">
    <FontAwesomeIcon icon={faExclamationCircle} size="lg" color="red" />
    &nbsp;&nbsp;{error}
  </div>
);

FormError.propTypes = {
  error: PropTypes.string
};

export default FormError;
