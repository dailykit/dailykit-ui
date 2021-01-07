import React from 'react'

import { Flex } from '../../'
import { MoveIcon, UpIcon, DownIcon } from '../../assets/icons'

import { StyledWrapper, StyledHead, StyledBody, StyledIcon } from './styled'

const Collapsible = ({ head, body, defaultOpen, isDraggable }) => {
   const [isOpen, setIsOpen] = React.useState(!!defaultOpen)

   return (
      <StyledWrapper>
         <StyledHead onClick={() => setIsOpen(!isOpen)}>
            <Flex container alignItems='center' width='100%'>
               {isDraggable && (
                  <StyledIcon>
                     <MoveIcon />
                  </StyledIcon>
               )}
               {head}
            </Flex>
            {isOpen ? <UpIcon /> : <DownIcon />}
         </StyledHead>
         <StyledBody hidden={!isOpen}>{body}</StyledBody>
      </StyledWrapper>
   )
}

export default Collapsible
