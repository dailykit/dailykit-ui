import React from "react";

import {
  Panel,
  StyledTPanelHead,
  StyledTPanelBody,
  StyledTPanelFooter
} from "./styles";

export const TPanelHead = ({ children, ...props }) => (
  <StyledTPanelHead {...props}>{children}</StyledTPanelHead>
);
export const TPanelBody = ({ children, ...props }) => (
  <StyledTPanelBody {...props}>{children}</StyledTPanelBody>
);
export const TPanelFooter = ({ children, ...props }) => (
  <StyledTPanelFooter {...props}>{children}</StyledTPanelFooter>
);

const TPanel = ({ layer, visibility, children, ...props }) => (
  <Panel visibility={visibility} layer={layer} {...props}>
    <div>{children}</div>
  </Panel>
);

export default TPanel;
