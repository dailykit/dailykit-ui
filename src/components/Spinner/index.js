import styled from 'styled-components'

export const Spinner = styled.div`
   display: inline-block;
   position: relative;
   width: ${props => (props.size ? props.size : '16px')};
   height: ${props => (props.size ? props.size : '16px')};
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
