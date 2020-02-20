import styled from 'styled-components'

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
`;

export const StyledCheckbox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 1px solid #cecece;
  border-color: ${props => (props.checked ? "#fff" : "#cecece")};
  background: ${props =>
    props.checked
      ? "linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%)"
      : "#fff"};
`;