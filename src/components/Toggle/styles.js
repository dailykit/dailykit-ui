import styled from 'styled-components'

export const StyledCheckbox = styled.div`
   display: flex;
   align-items: center;
   > span {
      cursor: pointer;
      user-select: none;
      margin-right: 8px;
   }
`

export const Label = styled.label``

export const Input = styled.input`
   width: 0;
   height: 0;
   display: none;
   &:checked ~ span {
      background: linear-gradient(
         270deg,
         rgba(40, 193, 247, 0.8) 26.67%,
         rgba(0, 167, 225, 0.8) 100%
      );
   }
   &:checked ~ span:after {
      transform: translateX(13px);
      background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
   }
`

export const Checkbox = styled.span`
   width: 32px;
   height: 16px;
   display: block;
   position: relative;
   border-radius: 16px;
   cursor: pointer;
   background: linear-gradient(
      270deg,
      rgba(173, 173, 173, 0.8) 26.67%,
      rgba(228, 228, 228, 0.8) 100%
   );
   &:after {
      left: 0;
      top: -2px;
      width: 20px;
      content: '';
      height: 20px;
      position: absolute;
      border-radius: 20px;
      transition: 0.2s ease-in-out;
      background: linear-gradient(180deg, #dadada -4.17%, #a3a3a3 100%);
   }
`
