import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
   display: inline-block;
   position: relative;
   width: 16px;
   height: 16px;
   border: 1px solid transparent;
   border-radius: 50%;
   border-top: 1px solid #3498db;
   animation: spin 2s linear infinite;

   @keyframes spin {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`

export default Spinner
