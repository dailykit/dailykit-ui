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
      <Button variant="solid" onClick={action("solid clicked")}>
        Solid
      </Button>
      <Button variant="outline" onClick={action("outline clicked")}>
        Outline
      </Button>
      <Button variant="ghost" onClick={action("ghost clicked")}>
        Ghost
      </Button>
      <Button variant="link" onClick={action("link clicked")}>
        <a href="#">Link</a>
      </Button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  button {
    margin-right: 16px;
  }
`;
