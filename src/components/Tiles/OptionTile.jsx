import React from 'react'

import { Text, Spacer } from '../../'

import { StyledOptionTile } from './styles'

const OptionTile = ({ title, description, ...props }) => (
   <StyledOptionTile {...props}>
      <Text as='h2'>{title}</Text>
      {description && (
         <>
            <Spacer size='8px' />
            <Text as='p'>{description}</Text>
         </>
      )}
   </StyledOptionTile>
)

export default OptionTile
