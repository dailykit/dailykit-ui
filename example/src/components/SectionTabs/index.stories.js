import React from 'react'
import { storiesOf } from '@storybook/react'
import {
   Text,
   Avatar,
   Section,
   PlusIcon,
   ClearIcon,
   IconButton
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
         <Section.Tabs>
            <Section.TabList>
               <Section.TabsHeader>
                  <Text as='title'>Processings(2)</Text>
                  <IconButton type='outline'>
                     <PlusIcon />
                  </IconButton>
               </Section.TabsHeader>
               <Section.Tab>
                  <div style={containerStyle}>
                     <Avatar withName title='Tab With Avatar' />
                  </div>
               </Section.Tab>
               <Section.Tab>
                  <div style={containerStyle}>
                     <header style={headerStyle}>
                        <h3 style={headingStyle}>Tab With Button</h3>
                        <IconButton type='solid'>
                           <ClearIcon size={18} />
                        </IconButton>
                     </header>
                  </div>
               </Section.Tab>
               <Section.Tab>
                  <div style={containerStyle}>
                     <h3 style={headingStyle}>Text only Tab</h3>
                  </div>
               </Section.Tab>
            </Section.TabList>
            <Section.TabPanels>
               <Section.TabPanel>Tab with Avatar</Section.TabPanel>
               <Section.TabPanel>Tab with Button</Section.TabPanel>
               <Section.TabPanel>Text only Tab</Section.TabPanel>
            </Section.TabPanels>
         </Section.Tabs>
      </div>
   )
})
