import React from 'react'
import { storiesOf } from '@storybook/react'
import {
   HorizontalTab,
   HorizontalTabs,
   HorizontalTabList,
   HorizontalTabPanel,
   HorizontalTabPanels
} from '@dailykit/ui'

storiesOf('Tabs', module).add('Horizontal Tabs', () => {
   return (
      <div
         style={{
            height: 'calc(100vh - 32px)'
         }}
      >
         <HorizontalTabs>
            <HorizontalTabList>
               <HorizontalTab>Bulk</HorizontalTab>
               <HorizontalTab>Sachet</HorizontalTab>
            </HorizontalTabList>
            <HorizontalTabPanels>
               <HorizontalTabPanel>Bulk Content</HorizontalTabPanel>
               <HorizontalTabPanel>Sachet Content</HorizontalTabPanel>
            </HorizontalTabPanels>
         </HorizontalTabs>
      </div>
   )
})
