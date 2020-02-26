import React from "react";

import { PlusIcon } from "../../assets/icons";
import { StyledButtonTile } from './styles';

const ButtonTile = ({ type, size, text, noIcon, ...props }) => (
  <StyledButtonTile type={type} size={size} { ...props }>
    {!noIcon && <PlusIcon size={type === "primary" ? 32 : 20} color="#555b6e"/>}
    <div> {text} </div>
  </StyledButtonTile>
);

export default ButtonTile;