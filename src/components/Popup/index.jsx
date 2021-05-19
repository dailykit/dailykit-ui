import React from 'react'

import { Wrapper, StyledPopup, Text, ConfirmText, Actions } from './styles'

import { IconButton } from '../Button'

import { RoundedCloseIcon } from '../../assets/icons'
import { useOnClickOutside } from '../../hooks'

const Popup = ({ show, children, clickOutsidePopup = () => {} }) => {
   const ref = React.useRef(null)
   useOnClickOutside(ref, () => {
      clickOutsidePopup()
   })
   return (
      <Wrapper show={show}>
         <StyledPopup ref={ref}>{children}</StyledPopup>
      </Wrapper>
   )
}

Popup.Text = ({ type, children }) => <Text type={type}>{children}</Text>

Popup.ConfirmText = ({ children }) => <ConfirmText>{children}</ConfirmText>

Popup.Actions = ({ children }) => <Actions>{children}</Actions>

Popup.Close = ({ closePopup }) => (
   <IconButton type='ghost' onClick={() => closePopup()} round size='sm'>
      <RoundedCloseIcon />
   </IconButton>
)

export default Popup
