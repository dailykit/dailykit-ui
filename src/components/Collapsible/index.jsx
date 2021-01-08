import React from 'react'

import { Flex, Text, IconButton } from '../../'
import { MoveIcon, UpIcon, DownIcon } from '../../assets/icons'

import { StyledWrapper, StyledHead, StyledBody, StyledIcon } from './styled'

const Collapsible = ({ title, head, body, defaultOpen, isDraggable }) => {
   const [isOpen, setIsOpen] = React.useState(!!defaultOpen)

   return (
      <StyledWrapper>
         <StyledHead>
            <Flex container alignItems='center' width='100%'>
               {isDraggable && (
                  <StyledIcon>
                     <MoveIcon />
                  </StyledIcon>
               )}
               {title && (
                  <Flex
                     cursor='pointer'
                     margin='0 16px 0 0'
                     onClick={() => setIsOpen(!isOpen)}
                  >
                     <Text as='title'> {title} </Text>
                  </Flex>
               )}
               {head}
            </Flex>
            {isOpen ? (
               <IconButton type='ghost' onClick={() => setIsOpen(!isOpen)}>
                  <UpIcon />
               </IconButton>
            ) : (
               <IconButton type='ghost' onClick={() => setIsOpen(!isOpen)}>
                  <DownIcon />
               </IconButton>
            )}
         </StyledHead>
         <StyledBody hidden={!isOpen}>{body}</StyledBody>
      </StyledWrapper>
   )
}

export default Collapsible
