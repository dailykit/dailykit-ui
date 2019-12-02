import React from "react";
import styled from "styled-components";
import { action } from "@storybook/addon-actions";
import Button from "./button";

export default {
  title: "Button"
};

export const Variants = () => {
  return (
    <ButtonWrapper>
      <Button variant="base" onClick={action("base clicked")}>
        Base
      </Button>
      <Button variant="primary-action" onClick={action("primary clicked")}>
        Primary Action
      </Button>
      <Button variant="secondary-action" onClick={action("secondary clicked")}>
        Secondary Action
      </Button>
      <Button variant="ghost-action" onClick={action("ghost clicked")}>
        Add field
      </Button>
      <Button variant="link" onClick={action("link clicked")}>
        Field Action or Link
      </Button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  button {
    margin-right: 16px;
  }
`;
