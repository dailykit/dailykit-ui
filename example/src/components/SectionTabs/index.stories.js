import React from 'react'
import { storiesOf } from '@storybook/react'
import {
   Text,
   Avatar,
   PlusIcon,
   ClearIcon,
   IconButton,
   SectionTab,
   SectionTabs,
   SectionTabList,
   SectionTabPanel,
   SectionTabPanels,
   SectionTabsListHeader
} from '@dailykit/ui'

storiesOf('Tabs', module).add('Section Tabs', () => {
   const containerStyle = { padding: '14px', textAlign: 'left' }
   const headerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
   }
   const headingStyle = { fontWeight: 400 }

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
                  <Text as='title'>Processings(2)</Text>
                  <IconButton type='outline'>
                     <PlusIcon />
                  </IconButton>
               </SectionTabsListHeader>
               <SectionTab>
                  <div style={containerStyle}>
                     <Avatar withName title='Tab With Avatar' />
                  </div>
               </SectionTab>
               <SectionTab>
                  <div style={containerStyle}>
                     <header style={headerStyle}>
                        <h3 style={headingStyle}>Tab With Button</h3>
                        <IconButton type='solid'>
                           <ClearIcon size={18} />
                        </IconButton>
                     </header>
                  </div>
               </SectionTab>
               <SectionTab>
                  <div style={containerStyle}>
                     <h3 style={headingStyle}>Text only Tab</h3>
                  </div>
               </SectionTab>
            </SectionTabList>
            <SectionTabPanels>
               <SectionTabPanel>Tab with Avatar</SectionTabPanel>
               <SectionTabPanel>Tab with Button</SectionTabPanel>
               <SectionTabPanel>Text only Tab</SectionTabPanel>
            </SectionTabPanels>
         </SectionTabs>
      </div>
   )
})
