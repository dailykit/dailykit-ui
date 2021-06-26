import React from 'react'
import styled, { css } from 'styled-components'
import { PlusIcon } from '../../assets/icons'


const StyledButton = styled.button(
   () => css`
      width: 100%;
      overflow-x: auto;
      background-color: #ebf1f4;
      color: #367bf5;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      padding: 8px 20px;
      cursor: pointer;
   `
)

const QuickCreate = ({ color = '#c4c4c4', typeName, keyword, addOption }) => {
   return (
      <>

         {addOption && (
            <StyledButton onClick={addOption}>
               <PlusIcon color='#367BF5' />{' '}
               <span>
                  add {keyword} {typeName && `as ${typeName}`}
               </span>
            </StyledButton>
         )}
      </>
   )
}

export default QuickCreate