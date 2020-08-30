import React from 'react'
import { storiesOf } from '@storybook/react'
import { Page } from '@dailykit/ui'

storiesOf('Tabs', module).add('Page Tabs', () => {
   return (
      <div
         style={{
            height: 'calc(100vh - 32px)'
         }}
      >
         <Page.Tabs>
            <Page.TabList>
               <Page.Tab>Bulk</Page.Tab>
               <Page.Tab>Sachet</Page.Tab>
            </Page.TabList>
            <Page.TabPanels>
               <Page.TabPanel>Bulk Content</Page.TabPanel>
               <Page.TabPanel>Sachet Content</Page.TabPanel>
            </Page.TabPanels>
         </Page.Tabs>
      </div>
   )
})
