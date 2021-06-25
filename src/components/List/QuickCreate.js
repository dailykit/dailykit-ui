import React from 'react'
import styled, { css } from 'styled-components'
import { PlusIcon } from '../../assets/icons'

const StyledButton = styled.button(
   ({ isCreating }) => css`
      width: 100%;
      overflow-x: auto;
      background-color: '#ebf1f4';
      opacity: ${isCreating ? '0.9' : '1'};
      color: #367bf5;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      padding: 8px 20px;
      cursor: pointer;
      cursor: ${isCreating ? 'not-allowed' : 'pointer'};
   `
)

const Spinner = styled.div(
   ({ type, variant }) => css`
      display: inline-block;
      position: relative;
      width: 14px;
      height: 14px;
      border: 1px solid transparent;
      border-radius: 50%;
      border-top: 1px solid
         ${type === 'solid' && variant !== 'secondary' ? '#fff' : '#367BF5'};
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
)

const QuickCreate = ({
   color = '#c4c4c4',
   typeName,
   keyword,
   addOption,
   isCreating
}) => {
   return (
      <>
         {addOption && (
            <StyledButton
               disabled={isCreating}
               isCreating={isCreating}
               onClick={addOption}
            >
               {isCreating ? (
                  <span>
                     <Spinner variant='secondary' /> adding {keyword}
                     {' ...'}
                     {typeName && `as ${typeName}`}
                  </span>
               ) : (
                  <>
                     <PlusIcon color='#367BF5' />{' '}
                     <span>
                        add {keyword} {typeName && `as ${typeName}`}
                     </span>
                  </>
               )}
            </StyledButton>
         )}
      </>
   )
}

export default QuickCreate
