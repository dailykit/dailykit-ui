import React from 'react'

import { Flex } from '../../'
import { MoveIcon, UpIcon, DownIcon } from '../../assets/icons'

import { StyledWrapper, StyledHead, StyledBody } from './styled'

const Collapsible = ({ head, body, defaultOpen, isDraggable }) => {
   const [isOpen, setIsOpen] = React.useState(!!defaultOpen)

   return (
      <StyledWrapper>
         <StyledHead onClick={() => setIsOpen(!isOpen)}>
            <Flex container alignItems='center'>
               {isDraggable && (
                  <Flex margin='0 8px 0 0'>
                     <MoveIcon />
                  </Flex>
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
