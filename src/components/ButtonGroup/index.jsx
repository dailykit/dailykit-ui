import React from 'react'

import { StyledButtonGroup } from './styles'

const ButtonGroup = ({ children, ...props }) => (
   <StyledButtonGroup {...props}>{children}</StyledButtonGroup>
)

export default ButtonGroup
