import styled, { css } from 'styled-components'

export const StyledCheckbox = styled.div(
   ({ isChecked }) => css`
      display: flex;
      align-items: center;
      input[type='checkbox'] {
         height: 0;
         width: 0;
      }
      span {
         width: 16px;
         height: 16px;
         display: flex;
         cursor: pointer;
         align-items: center;
         justify-content: center;
         border: 1px solid ${isChecked ? '#28C1F7' : '#d8d8d8'};
         background: ${isChecked
            ? 'linear-gradient(180deg, #28C1F7 -4.17%, #00A7E1 100%)'
            : '#FFF'};
         :hover {
            background: ${isChecked
               ? 'linear-gradient(180deg, #28C1F7 -4.17%, #00A7E1 100%)'
               : '#f3f3f3'};
         }
      }
      label {
         margin-left: 12px;
      }
   `
)
