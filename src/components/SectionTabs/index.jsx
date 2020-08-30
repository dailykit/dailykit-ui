import React from 'react'
import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'

export const Section = {}

Section.Tabs = styled(Tabs)`
   width: 100%;
   height: 100%;
   display: grid;
   grid-template-columns: 280px 1fr;
`

Section.TabList = styled(TabList)`
   display: flex;
   overflow-y: auto;
   padding: 0 20px 0 0;
   flex-direction: column;
`

Section.Tab = ({ children }) => {
   return <StyledTab>{children}</StyledTab>
}

Section.TabPanels = styled(TabPanels)`
   height: 100%;
   overflow: hidden;
   :focus {
      outline: none;
   }
`

Section.TabPanel = styled(TabPanel)`
   height: 100%;
   padding: 16px;
   overflow-y: auto;
   background: #fff;
   border-radius: 2px;
   :focus {
      outline: none;
   }
`

Section.TabsHeader = styled.header`
   display: flex;
   margin-bottom: 14px;
   align-items: center;
   padding-bottom: 14px;
   justify-content: space-between;
   border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

const StyledTab = styled(Tab)`
   border: none;
   cursor: pointer;
   border-radius: 2px;
   background: transparent;
   &[data-selected] {
      color: #fff;
      background: #555b6e;
   }
`
