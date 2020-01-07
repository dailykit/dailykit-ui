import styled, { css } from "styled-components";

export const Panel = styled.div(
  ({ visibility, layer }) => css`
    right: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: ${layer};
    position: absolute;
    border-left: 1px solid #000;
    background: rgba(0, 0, 0, 0.2);
    div {
      height: inherit;
      background: #fff;
      width: 50%;
      float: ${visibility === "full" ? "right" : "left"};
    }
  `
);

export const StyledTPanelHead = styled.header`
  display: flex;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  border-bottom: 1px solid #eeeeee;
`;
export const StyledTPanelBody = styled.main`
  overflow-y: auto;
  padding: 16px;
  height: calc(100vh - 96px);
`;
export const StyledTPanelFooter = styled.footer`
  border-top: 1px solid #eeeeee;
  height: 48px;
  width: inherit;
  position: absolute;
  bottom: 0;
  display: flex;
  padding: 0 16px;
  align-items: center;
  justify-content: flex-end;
`;
