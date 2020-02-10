import React from 'react'
import { Popup, TextButton } from '@dailykit/ui'

export default {
   title: 'Popup'
}

export const PopupWarning = () => {

    const [displayed, isDisplayed] = React.useState(false);

   return (
        <React.Fragment>
            <TextButton type='solid' onClick={ () => isDisplayed(true) }>Show Popup</TextButton>
            <Popup show={ displayed }>
                <div style={{ marginBottom : 20 }}>
                    Close this file?
                </div>
                <div style={{ display : 'flex', justifyContent : 'space-between' }}>
                    <TextButton type='solid' onClick={ () => isDisplayed(false) }>
                        Yes
                    </TextButton>
                    <TextButton type='ghost' onClick={ () => isDisplayed(false) }>
                        No, don't close
                    </TextButton>
                </div>
            </Popup>
        </React.Fragment>
   )
}