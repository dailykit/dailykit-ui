import styled, { css } from "styled-components";

export const StyledSelect = styled.div`
  height: 40px;
  width: 280px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  background: #fff;
`;

export const StyledOptions = styled.div`
  position: absolute;
  max-height: 180px;
  height: auto;
  overflow-y: auto;
  top: 40px;
  width: 100%;
  padding: 4px 0;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const StyledOption = styled.div(
  ({ isSelected }) => css`
    padding: 8px 12px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    cursor: pointer;
    ${isSelected && `background: rgba(0, 0, 0, 0.1);`}
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
    p {
      margin-top: 2px;
      font-size: 13px;
      opacity: 0.7;
    }
  `
);

export const StyledSelected = styled.div(
  ({ selected }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    &:focus-within {
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }
    div {
      height: 40px;
      display: flex;
      align-items: center;
      display: grid;
      grid-template-columns: ${selected !== null ? "1fr 40px" : "40px 1fr"};
      input {
        height: 39px;
        width: 100%;
        border: none;
        font-size: 14px;
        &:focus {
          outline: none;
        }
      }
      span[data-type="text"] {
        padding-left: 12px;
      }
      span[data-type="icon"] {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          height: 24px;
          width: 24px;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.1);
          display: none;
        }
        ${selected !== null &&
          css`
            &:hover:after {
              display: block;
            }
          `}
      }
    }
    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        height: 24px;
        width: 24px;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.1);
        display: none;
      }
      &:hover:after {
        display: block;
      }
    }
  `
);
