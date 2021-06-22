import styled, { css } from 'styled-components'

export const StyledSelect = styled.div`
   height: 40px;
   width: auto;
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   position: relative;
   cursor: pointer;
   background: #fff;
`

export const SelectedOptions = styled.ul`
   display: flex;
   align-items: center;
   width: 100%;
   padding-left: 3px;
   min-height: 36px;
   position: relative;
   li {
      margin-right: 3px;
      list-style: none;
      height: 28px;
      padding: 0 6px;
      display: flex;
      font-size: 13px;
      border-radius: 4px;
      align-items: center;
      background: #f3f3f3;
      &:hover span:last-child {
         visibility: visible;
      }
      span:last-child {
         margin-left: 4px;
         height: 20px;
         border-radius: 50%;
         width: 20px;
         display: flex;
         align-items: center;
         justify-content: center;
         visibility: hidden;
         &:hover {
            background: rgba(0, 0, 0, 0.1);
         }
      }
   }
   button {
      height: 28px;
      width: 28px;
      border-radius: 28px;
      background: transparent;
      border: 1px solid rgba(0, 0, 0, 0.3);
   }
`

export const HiddenOptions = styled.div`
   padding: 4px 0 0 4px;
   max-width: 280px;
   position: absolute;
   right: 0;
   top: 40px;
   display: flex;
   flex-wrap: wrap;
   border-radius: 4px;
   box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.1);
   background: #fff;
   z-index: 999;
   li {
      margin-bottom: 4px;
   }
`

export const StyledOptions = styled.div(
   ({ moveDown }) => css`
      position: absolute;
      max-height: 180px;
      height: auto;
      overflow-y: auto;
      top: ${moveDown ? '76px' : '40px'};
      width: 100%;
      padding: 4px 0;
      background: #fff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      z-index: 2;
   `
)

export const StyledOption = styled.div(
   ({ isSelected }) => css`
      padding: 8px 12px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      cursor: pointer;
      ${isSelected && `background: rgba(0, 0, 0, 0.1);`}
      &:hover {
         background: rgba(0, 0, 0, 0.1);
      }
      div {
         display: flex;
         align-items: center;
         span {
            margin-left: 4px;
         }
      }
      p {
         margin-top: 2px;
         font-size: 13px;
         opacity: 0.7;
         margin-left: 20px;
      }
      > span {
         font-style: italic;
         font-weight: normal;
         font-size: 12px;
         line-height: 16px;
         letter-spacing: 0.32px;
         color: #919699;
         display: flex;
         justify-content: center;
         padding: 8px;
      }
   `
)

export const StyledSelected = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 40px;
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
   &:focus-within {
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
   }
   div {
      height: 40px;
      display: flex;
      align-items: center;
      display: grid;
      grid-template-columns: 40px 1fr;
      input {
         height: 39px;
         width: 100%;
         border: none;
         font-size: 14px;
         &:focus {
            outline: none;
         }
      }
      span {
         height: 40px;
         display: flex;
         align-items: center;
         justify-content: center;
      }
   }
   aside {
      display: flex;
      width: 35px;
      justify-content: space-between;
   }
   aside > span {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &:after {
         content: '';
         position: absolute;
         height: 24px;
         width: 24px;
         top: 50%;
         left: 50%;
         border-radius: 50%;
         transform: translate(-50%, -50%);
         background: rgba(0, 0, 0, 0.1);
         display: none;
      }
      &:hover:after {
         display: block;
      }
   }
`
export const QuickCreateWrappper = styled.div(
   ({ matchedOptionsLength }) => css`
      padding-top:${matchedOptionsLength===0 ? '70px' : '200px'};
      width: 100%;
   `
)

export const NoItemFoundWrapper = styled.div`
   display:flex; 
   justify-content: center;
`