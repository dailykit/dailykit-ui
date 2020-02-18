import React from 'react'
import { Popup, TextButton, ButtonGroup } from '@dailykit/ui'

export default {
   title: 'Popup'
}

export const PopupAlert = () => {
    const [showPrimary, setShowPrimary] = React.useState(false);
    const [showDanger, setShowDanger] = React.useState(false);
  
    return (
      <div className="App">
        <TextButton type="solid" onClick={() => setShowPrimary(!showPrimary)}>
          Primary
        </TextButton>
        <TextButton type="solid" onClick={() => setShowDanger(!showDanger)}>
          Danger
        </TextButton>
        <Popup show={showPrimary}>
          <Popup.Text type="primary">
            Closing this file will not save any changes!
          </Popup.Text>
          <Popup.ConfirmText>Are you sure?</Popup.ConfirmText>
          <Popup.Actions>
            <ButtonGroup align="left">
              <TextButton
                type="solid"
                onClick={() => setShowPrimary(!showPrimary)}
              >
                Yes! delete this file
              </TextButton>
              <TextButton
                type="ghost"
                onClick={() => setShowPrimary(!showPrimary)}
              >
                Sorry, Shaktiman!
              </TextButton>
            </ButtonGroup>
          </Popup.Actions>
        </Popup>
        <Popup show={showDanger}>
          <Popup.Text type="danger">
            Closing this file will not save any changes!
          </Popup.Text>
          <Popup.ConfirmText>Are you sure?</Popup.ConfirmText>
          <Popup.Actions>
            <ButtonGroup align="left">
              <TextButton type="solid" onClick={() => setShowDanger(!showDanger)}>
                Yes! delete this file
              </TextButton>
              <TextButton type="ghost" onClick={() => setShowDanger(!showDanger)}>
                Sorry, Shaktiman!
              </TextButton>
            </ButtonGroup>
          </Popup.Actions>
        </Popup>
      </div>
    );
} 