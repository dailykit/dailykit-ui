import styled, { css } from 'styled-components'

export const Field = styled.div(
   ({ hasValue }) => css`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      label {
         position: absolute;
         color: #888d9d;
         font-size: 14px;
         top: ${hasValue.length > 0 ? '-8px' : '11px'};
      }
      span[data-type='error'] {
         color: #dc4b4b;
         padding-top: 4px;
         font-size: 14px;
         font-style: italic;
      }

      input[type='text'],
      input[type='password'],
      input[type='email'],
      textarea {
         width: inherit;
         font-size: 16px;
         border: none;
         font-weight: 400;
         height: 40px;
         border-bottom: 1px solid rgba(0, 0, 0, 0.2);
         &:focus {
            outline: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.5);
            ~ label {
               top: -8px;
            }
         }
         &::placeholder {
            font-weight: 400;
         }
      }
      textarea {
         height: unset;
         padding-top: 10px;
      }
   `
)

export const RadioButton = styled.div`
   height: 40px;
   padding: 0 12px;
   font-weight: 500;
   font-size: 14px;
   display: inline-flex;
   align-items: center;
   justify-content: center;
   color: ${props => (props.active ? '#FFFFFF' : ' #555B6E')};
   background: ${props =>
      props.active
         ? 'linear-gradient(180deg, #28C1F7 -4.17%, #00A7E1 100%)'
         : '#F3F3F3'};

   &:not(:last-child) {
      margin-right: 2px;
   }

   &:hover {
      cursor: pointer;
   }
`

export const DropDown = styled.div`
   display: flex;
   flex-direction: column;

   > div:nth-child(1) {
      display: flex;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #555b6e;
      padding: 10px;
      min-width: 70px;

      span:nth-child(1) {
         margin-right: 10px;
      }
   }

   div:nth-child(2) > div {
      padding: 10px;
   }

   &:hover {
      cursor: pointer;
   }
`

export const TextAndSelectStyle = styled.div`
   display: flex;
   align-items: baseline;

   div:nth-child(1) {
      margin-right: 10px;
   }
`

export const StyledSearchBox = styled.div`
   background: #ffffff;
   border: 1px solid #d9e9f1;
   max-width: 380px;
   text-align: left;
   height: 40px;
   display: flex;
   align-items: center;
`

export const StyledIconWrapper = styled.span`
   height: 40px;
   width: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const StyledInput = styled.input`
   border: none;
   color: #333;
   width: 100%;
   outline: none;
   height: 38px;
`
