import React from "react";
import styled, { css } from "styled-components";

const Button = ({ children, variant }) => (
  <StyledButton variant={variant}>{children}</StyledButton>
);

export default Button;

const handleVariant = variant => {
  switch (variant) {
    case "primary":
      return "blue";
    case "danger":
      return "red";
    default:
      return "blue";
  }
};

const StyledButton = styled.button(
  ({ variant }) => css`
    border: none;
    padding: 0 12px;
    height: 40px;
    color: #fff;
    background: ${handleVariant(variant)};
  `
);
