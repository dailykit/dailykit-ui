import React from "react";

import PropTypes from "prop-types";

import Styles from "./styles";

export const Text = ({ id, name, hasError, placeholder, ...rest }) => {
  return (
    <Styles.Text
      id={id}
      name={name}
      type="text"
      hasError={hasError}
      placeholder={placeholder}
      {...rest}
    />
  );
};

Text.propTypes = {
  hasError: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};
