import React from 'react'
import { storiesOf } from '@storybook/react'
import {
   Text,
   PlusIcon,
   IconButton,
   SectionTab,
   SectionTabs,
   SectionTabList,
   SectionTabPanel,
   SectionTabPanels,
   SectionTabsListHeader
} from '@dailykit/ui'

storiesOf('Tabs', module).add('Section Tabs', () => {
   return (
      <div
         style={{
            padding: 14,
            height: 'calc(100vh - 32px)',
            background: 'rgb(237, 237, 237)'
         }}
      >
         <SectionTabs>
            <SectionTabList>
               <SectionTabsListHeader>
                  <Text as='h2' noMargin>
                     Processings
                  </Text>
                  <IconButton type='outline'>
                     <PlusIcon />
                  </IconButton>
               </SectionTabsListHeader>
               <SectionTab title='Raw' />
               <SectionTab title='Sliced' />
            </SectionTabList>
            <SectionTabPanels>
               <SectionTabPanel>Raw</SectionTabPanel>
               <SectionTabPanel>Sliced</SectionTabPanel>
            </SectionTabPanels>
         </SectionTabs>
      </div>
   )
})
