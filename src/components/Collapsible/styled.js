import styled from 'styled-components'

export const StyledWrapper = styled.div`
   background: #ffffff;
   border: 1px solid #ececec;
   margin-bottom: 8px;
   padding: 8px;

   &:hover {
      background: #f9f9f9;
   }
`

export const StyledHead = styled.div`
   align-items: center;
   cursor: pointer;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`

export const StyledBody = styled.div`
   border-top: 1px solid #ececec;
   display: ${props => (props.hidden ? 'none' : 'block')};
`

export const StyledIcon = styled.span`
   cursor: grab;
   margin-right: 8px;
`
