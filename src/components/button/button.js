import React from "react";
import styled, { css } from "styled-components";

const Button = ({ children, variant, ...props }) => (
  <StyledButton variant={variant} {...props}>
    {children}
  </StyledButton>
);

export default Button;

const baseVariant = () => css`
  background: #fff;
  color: #00A7E1;
  padding: 13px 28px;
  border: 1px solid #00A7E1;
  text-transform: uppercase;
  :hover {
    background: #00A7E1;
    color: #fff;
  }
`;

const primaryActionVariant = () => css`
  background: #00A7E1;
  color: #fff;
  padding: 13px 28px;
  padding-left: 24px;
  border: 1px solid #00A7E1;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  ::before {
    content: '+';
    margin-right: 8px;
  }
`

const secondaryActionVariant = () => css`
  background: #fff;
  color: #00A7E1;
  padding: 13px 28px;
  padding-left: 24px;
  border: 1px solid #00A7E1;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  ::before {
    content: '+';
    margin-right: 8px;
  }
`

const ghostActionVariant = () => css`
  background: #fff;
  color: #00A7E1;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  ::before {
    content: '+';
    margin-right: 8px;
  }
`;

const linkVariant = () => css`
    color: #00A7E1;
    background: none;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    border: none;
  }
`;

const handleVariant = variant => {
  switch (variant) {
    case "base":
      return baseVariant();
    case "primary-action":
      return primaryActionVariant();
    case "secondary-action":
      return secondaryActionVariant();
    case "ghost-action":
      return ghostActionVariant();
    case "link":
      return linkVariant();
    default:
      return baseVariant();
  }
};

const StyledButton = styled.button(
  ({ variant }) => css`
    cursor: pointer;
    ${handleVariant(variant)};
  `
);
