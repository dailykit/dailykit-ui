import styled from 'styled-components'

export const StyledWrapper = styled.div`
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   background: rgba(255, 255, 255, 0.3);
`

export const StyledSpinner = styled.div`
   display: inline-block;
   position: relative;
   width: 32px;
   height: 32px;
   border: 4px solid transparent;
   border-radius: 50%;
   border-top: 4px solid #3498db;
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
