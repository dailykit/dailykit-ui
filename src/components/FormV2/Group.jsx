import React from "react";

import PropTypes from "prop-types";

import Styles from "./styles";

export const Group = ({ children }) => {
  return <Styles.Section>{children}</Styles.Section>;
};

Group.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
