import React from 'react'
import styled, { css } from 'styled-components'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'

export const SectionTab = ({ children }) => {
   return <StyledTab>{children}</StyledTab>
}

export const SectionTabs = styled(Tabs)`
   width: 100%;
   height: 100%;
   display: grid;
   grid-template-columns: 280px 1fr;
   @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
      height: auto;
   }
`
export const SectionTabList = styled(TabList)`
   display: flex;
   overflow-y: auto;
   padding: 0 20px 0 0;
   flex-direction: column;
   @media screen and (max-width: 767px) {
      flex-direction: row;
   }
`

const StyledTab = styled(Tab)`
   border: none;
   min-width: fit-content;
   cursor: pointer;
   border-radius: 2px;
   background: #fff;
   margin: 0px 0px 8px 8px;
   &[data-selected] {
      color: #fff;
      background: #555b6e;
   }
`
export const SectionTabPanels = styled(TabPanels)(
   () => css`
      height: 100%;
      overflow: hidden;
      :focus {
         outline: none;
      }
   `
)

export const SectionTabPanel = styled(TabPanel)`
   height: 100vh;
   padding: 16px;
   overflow-y: auto;
   background: #fff;
   border-radius: 2px;
   :focus {
      outline: none;
   }
`

export const SectionTabsListHeader = styled.header`
   display: flex;
   margin-bottom: 14px;
   align-items: center;
   padding-bottom: 14px;
   justify-content: space-between;
   border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
