import React from 'react'
import styled, { css } from 'styled-components'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'

export const HorizontalTab = ({ children }) => {
   return <StyledTab>{children}</StyledTab>
}

export const HorizontalTabs = styled(Tabs)`
   width: 100%;
   height: 100%;
`
export const HorizontalTabList = styled(TabList)`
   display: flex;
   padding: 0 20px 0 0;
`
export const StyledTab = styled(Tab)`
   border: none;
   height: 32px;
   color: #888d9d;
   font-size: 16px;
   margin-right: 14px;
   letter-spacing: 0.3px;
   background: transparent;
   border-bottom: 2px solid transparent;
   &[data-selected] {
      color: #05abe4;
      border-bottom: 2px solid #05abe4;
   }
`
export const HorizontalTabPanels = styled(TabPanels)(
   () => css`
      overflow: hidden;
      height: calc(100% - 32px);
      :focus {
         outline: none;
      }
   `
)

export const HorizontalTabPanel = styled(TabPanel)`
   height: 100%;
   padding: 16px;
   overflow-y: auto;
   background: #fff;
   border-radius: 2px;
   :focus {
      outline: none;
   }
`
