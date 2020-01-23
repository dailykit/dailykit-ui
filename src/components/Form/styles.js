import styled, { css } from "styled-components";

export const Field = styled.div(
  ({ hasValue }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    margin-bottom: 16px;
    label {
      position: absolute;
      color: #888d9d;
      font-size: 14px;
      top: ${hasValue.length > 0 ? "-8px" : "11px"};
    }
    span[data-type="error"] {
      color: #dc4b4b;
      padding-top: 4px;
      font-size: 14px;
      font-style: italic;
    }

    input[type="text"],
    input[type="password"],
    input[type="email"],
    textarea {
      width: inherit;
      font-size: 16px;
      border: none;
      font-weight: 600;
      height: 40px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      &:focus {
        outline: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        ~ label {
          top: -8px;
        }
      }
    }
    textarea {
      height: unset;
      padding-top: 10px;
    }
  `
);

export const RadioButton = styled.span`
    padding: 7px 12px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    width: 70px;
    color: ${ props => props.active ? '#FFFFFF' : ' #888D9D' };
    background : ${ props => props.active ? 'linear-gradient(180deg, #28C1F7 -4.17%, #00A7E1 100%)' : '#F3F3F3' };

    &:not(:last-child) {
      margin-right: 2px;
    }

    &:hover {
      cursor: pointer;
    }
`