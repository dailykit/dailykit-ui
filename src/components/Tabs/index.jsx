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
   justify-content: ${props =>
      props.justifyContent ? props.justifyContent : 'center'};
   overflow-x: auto;
   padding: 0 20px 0 0;
   border-bottom: 1px solid #ebf1f4;
`
const StyledTab = styled(Tab)`
   border: none;
   outline: none;
   cursor: pointer;
   height: 32px;
   min-width: fit-content;
   color: #202020;
   font-weight: 500;
   font-size: 12px;
   line-height: 14px;
   margin-right: 14px;
   background: transparent;
   border-bottom: 2px solid transparent;
   &[data-selected] {
      color: #367bf5;
      border-bottom: 2px solid #367bf5;
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
