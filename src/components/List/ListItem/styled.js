import styled, { css } from 'styled-components'

const baseLiStyle = isActive => css`
   display: flex;
   list-style: none;
   padding-left: 12px;
   position: relative;
   background: ${isActive ? '#F3F3F3' : 'transparent'};
   h3 {
      color: #555b6e;
      font-size: 16px;
      font-weight: 400;
   }
   &:after {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      content: '';
      position: absolute;
      background: transparent;
   }
`

const checkboxStyle = (size, position) => css`
   span[data-type='checkbox'] {
      display: flex;
      flex-shrink: 0;
      width: ${size}px;
      height: ${size}px;
      align-items: center;
      justify-content: center;
      input {
         display: none;
      }
   }
`

export const StyledSSL1 = styled.li(
   ({ isActive }) => css`
      ${baseLiStyle(isActive)}
      height: 40px;
      color: #555b6e;
      font-size: 16px;
      align-items: center;
   `
)

export const StyledSSL2 = styled.li(
   ({ isActive }) => css`
      ${baseLiStyle(isActive)}
      height: 48px;
      flex-direction: column;
      justify-content: center;
      p {
         color: #888d9d;
         font-size: 14px;
      }
   `
)

export const StyledMSL1 = styled.li(
   ({ isActive }) => css`
      ${baseLiStyle(isActive)}
      height: 40px;
      color: #555b6e;
      font-size: 16px;
      padding-left: 0;
      align-items: center;
      ${checkboxStyle(40)}
   `
)

export const StyledMSL2 = styled.li(
   ({ isActive }) => css`
      ${baseLiStyle(isActive)}
      height: 48px;
      color: #555b6e;
      font-size: 16px;
      padding-left: 0;
      align-items: center;
      ${checkboxStyle(48)}
      p {
         color: #888d9d;
         font-size: 14px;
      }
   `
)

export const StyledMSL1101 = styled.li(
   ({ isActive }) => css`
      ${baseLiStyle(isActive)}
      height: 48px;
      color: #555b6e;
      font-size: 16px;
      padding-left: 0;
      align-items: center;
      ${checkboxStyle(44)}
      aside {
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: space-between;
         > div {
            display: flex;
            align-items: center;
         }
      }
   `
)

export const StyledSSL22 = styled.li(
   ({ isActive }) => css`
      ${baseLiStyle(isActive)}
      height: 48px;
      color: #555b6e;
      font-size: 16px;
      padding: 0 12px;
      align-items: center;
      justify-content: space-between;
      > div:last-child {
         padding-left: 12px;
         border-left: 1px solid #e4e4e4;
      }
   `
)

export const StyledMSL31 = styled.li(
   ({ isActive }) => css`
      ${baseLiStyle(isActive)}
      height: 56px;
      color: #555b6e;
      padding-left: 0;
      font-size: 16px;
      align-items: center;
      p {
         color: #888d9d;
         font-size: 14px;
      }
      ${checkboxStyle(56)}
      section {
         width: 100%;
         margin-left: 8px;
         > div {
            display: flex;
            p:first-child {
               margin-right: 12px;
            }
            p:last-child {
               padding-left: 12px;
               border-left: 1px solid #e4e4e4;
            }
         }
      }
   `
)

export const StyledMSL111 = styled.li(
   ({ isActive }) => css`
      ${baseLiStyle(isActive)}
      height: 48px;
      color: #555b6e;
      font-size: 16px;
      padding-left: 0;
      align-items: center;
      padding-right: 12px;
      ${checkboxStyle(48)}
      section {
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: space-between;
      }
   `
)
