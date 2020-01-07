import React from 'react'

import {
   Tunnel,
   TPanel,
   TPanelBody,
   TPanelFooter,
   TPanelHead,
   TextButton
} from '@dailykit/ui'

export default {
   title: 'Tunnel Vision'
}

export const TunnelVision = () => {
   const [panels, setPanels] = React.useState([
      'hidden',
      'hidden',
      'hidden',
      'hidden'
   ])

   const togglePanel = panel => {
      const temp = panels
      if (panel || panel === 0) {
         temp[panel] = 'full'
      }
      if (panel - 1 || panel - 1 === 0) {
         temp[panel - 1] = 'partial'
      }
      let len = panel - 1
      if (len > 0) {
         while (len--) {
            temp[len] = 'hidden'
         }
      }
      setPanels([...temp])
   }

   const closePanel = panel => {
      const temp = panels
      temp[panel] = 'hidden'
      if (panel < temp.length - 1 && panel + 1) {
         temp[panel + 1] = 'hidden'
      }
      if (panel - 1 || panel - 1 === 0) {
         temp[panel - 1] = 'full'
      }
      if (panel - 2 || panel - 2 === 0) {
         temp[panel - 2] = 'partial'
      }
      setPanels([...temp])
   }
   return (
      <div style={{ position: 'relative' }}>
         <Tunnel>
            <TPanel layer={1} visibility={panels[0]}>
               <TPanelHead>
                  <h3>Panel 1</h3>
                  <TextButton type='outline' onClick={() => closePanel(0)}>
                     Close
                  </TextButton>
               </TPanelHead>
               <TPanelBody>Body</TPanelBody>
               <TPanelFooter>
                  <TextButton type='solid' onClick={() => togglePanel(1)}>
                     Show Panel 2
                  </TextButton>
               </TPanelFooter>
            </TPanel>

            <TPanel layer={2} visibility={panels[1]}>
               <TPanelHead>
                  <h3>Panel 2</h3>
                  <TextButton type='outline' onClick={() => closePanel(1)}>
                     Close
                  </TextButton>
               </TPanelHead>
               <TPanelBody>Body</TPanelBody>
               <TPanelFooter>
                  <TextButton type='solid' onClick={() => togglePanel(2)}>
                     Show Panel 3
                  </TextButton>
               </TPanelFooter>
            </TPanel>

            <TPanel layer={3} visibility={panels[2]}>
               <TPanelHead>
                  <h3>Panel 3</h3>
                  <TextButton type='outline' onClick={() => closePanel(2)}>
                     Close
                  </TextButton>
               </TPanelHead>
               <TPanelBody>Body</TPanelBody>
               <TPanelFooter>
                  <TextButton type='solid' onClick={() => togglePanel(3)}>
                     Show Panel 4
                  </TextButton>
               </TPanelFooter>
            </TPanel>

            <TPanel layer={4} visibility={panels[3]}>
               <TPanelHead>
                  <h3>Panel 4</h3>
                  <TextButton type='outline' onClick={() => closePanel(3)}>
                     Close
                  </TextButton>
               </TPanelHead>
               <TPanelBody>Body</TPanelBody>
               <TPanelFooter />
            </TPanel>
         </Tunnel>
         <TextButton type='solid' onClick={() => togglePanel(0)}>
            Show Panel 1
         </TextButton>
      </div>
   )
}
