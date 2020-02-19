import React from "react";

import { PlusIcon } from "../../assets/icons";
import { StyledButtonTile } from './styles';

const ButtonTile = ({ type, size, text, noIcon }) => (
  <StyledButtonTile type={type} size={size}>
    {!noIcon && <PlusIcon size={type === "primary" ? 28 : 16} color="#555b6e"/>}
    <div> {text} </div>
  </StyledButtonTile>
);

export default ButtonTile;