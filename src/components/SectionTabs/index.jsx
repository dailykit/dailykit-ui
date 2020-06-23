import React from 'react'
import styled, { css } from 'styled-components'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'

export const SectionTab = ({ title, children }) => {
   return (
      <StyledTab>
         <div>
            <h3>{title}</h3>
            {children}
         </div>
      </StyledTab>
   )
}

export const SectionTabs = styled(Tabs)`
   width: 100%;
   height: 100%;
   display: grid;
   grid-template-columns: 280px 1fr;
`
export const SectionTabList = styled(TabList)`
   display: flex;
   padding: 0 20px 0 0;
   flex-direction: column;
`
export const StyledTab = styled(Tab)`
   border: none;
   cursor: pointer;
   border-radius: 2px;
   background: transparent;
   &[data-selected] {
      color: #fff;
      background: #555b6e;
   }
   > div {
      height: 100%;
      padding: 12px;
      text-align: left;
      h3 {
         font-weight: 400;
         font-size: 16px;
      }
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
   height: 100%;
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
