import React from 'react'

import { StyledTagGroup, StyledTag } from './styled'

const TagGroup = ({ children, ...props }) => (
   <StyledTagGroup {...props}>{children}</StyledTagGroup>
)
const Tag = ({ children, ...props }) => (
   <StyledTag {...props}>{children}</StyledTag>
)

export { TagGroup, Tag }
