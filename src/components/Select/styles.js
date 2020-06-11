import styled from 'styled-components'

export const StyledSelect = styled.div`
   height: 48px;
   display: flex;
   align-items: center;
   background: #ffffff;
   border-radius: 2px;
   box-sizing: border-box;
   border: 1px solid #f3f3f3;
   box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.13);
`

export const StyledOptions = styled.ul`
   display: flex;
   height: inherit;
   align-items: center;
`

export const StyledOption = styled.li`
   height: 32px;
   display: flex;
   padding-left: 8px;
   cursor: pointer;
   list-style: none;
   align-items: center;
   background: #f3f3f3;
   margin-left: 8px;
   border-radius: 2px;
   span:first-child {
      font-weight: 500;
      font-size: 16px;
      line-height: 14px;
      color: #555b6e;
   }
   span:last-child {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: hidden;
   }
   &:hover {
      span:last-child {
         visibility: visible;
      }
   }
`

export const StyledAddOption = styled.div`
   height: 32px;
   display: flex;
   padding: 0 8px;
   cursor: pointer;
   margin-left: 8px;
   border-radius: 2px;
   align-items: center;
   justify-content: center;
   &:hover {
      background: #f3f3f3;
   }
   span {
      margin-left: 8px;
   }
`
