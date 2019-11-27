import React from "react";
import styled, { css } from "styled-components";

const Button = ({ children, variant, ...props }) => (
  <StyledButton variant={variant} {...props}>
    {children}
  </StyledButton>
);

export default Button;

const solidVariant = () => css`
  background: #4262ff;
  color: #fff;
  border-radius: 4px;
  padding: 0 12px;
  height: 40px;
  border: none;
  :hover {
    background: #2b4df5;
  }
`;

const outlineVariant = () => css`
  background: transparent;
  color: #4262ff;
  border-radius: 4px;
  padding: 0 12px;
  height: 40px;
  border: 1px solid #4262ff;
  :hover {
    color: #fff;
    background: #4262ff;
  }
`;

const ghostVariant = () => css`
  background: transparent;
  color: #4262ff;
  border-radius: 4px;
  padding: 0 12px;
  height: 40px;
  border: none;
  :hover {
    background: #e9eff5;
  }
`;

const linkVariant = () => css`
  background: transparent;
  text-transform: uppercase;
  border: none;
  a {
    color: #4262ff;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

const handleVariant = variant => {
  switch (variant) {
    case "solid":
      return solidVariant();
    case "outline":
      return outlineVariant();
    case "ghost":
      return ghostVariant();
    case "link":
      return linkVariant();
    default:
      return solidVariant();
  }
};

const StyledButton = styled.button(
  ({ variant }) => css`
    cursor: pointer;
    ${handleVariant(variant)};
  `
);
