import React from "react";

import PropTypes from "prop-types";

import Styles from "./styles";

export const Label = ({ title, htmlFor, children }) => {
  return (
    <Styles.Label htmlFor={htmlFor} title={title}>
      {children}
    </Styles.Label>
  );
};

Label.propTypes = {
  title: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
