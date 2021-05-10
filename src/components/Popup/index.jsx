import React from 'react'

import { Wrapper, StyledPopup, Text, ConfirmText, Actions } from './styles'

import { IconButton } from '../Button'

import { RoundedCloseIcon } from '../../assets/icons'

const Popup = ({ show, children }) => {
   return (
      <Wrapper show={show}>
         <StyledPopup>{children}</StyledPopup>
      </Wrapper>
   )
}

Popup.Text = ({ type, children }) => <Text type={type}>{children}</Text>

Popup.ConfirmText = ({ children }) => <ConfirmText>{children}</ConfirmText>

Popup.Actions = ({ children }) => <Actions>{children}</Actions>

Popup.Close = ({ close }) => (
   <IconButton type='ghost' onClick={() => close()} round size='sm'>
      <RoundedCloseIcon />
   </IconButton>
)
export default Popup
