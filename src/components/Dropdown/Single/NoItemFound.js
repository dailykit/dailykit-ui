import React from 'react'
import styled, { css } from 'styled-components'
import { PlusIcon } from '../../../assets/icons'
import { StyledButton } from './styles'

const Wrapper = styled.div(
   () => css`
      margin-bottom: 12px;
      > div {
         display: flex;
         align-items: center;
         justify-content: center;
         > svg {
            margin-left: 2px;
         }
      }
      > p {
         font-style: italic;
         font-weight: normal;
         font-size: 12px;
         line-height: 16px;
         letter-spacing: 0.32px;
         color: #919699;
         text-align: center;
         padding: 8px;
      }
   `
)

const NoItemFound = ({ color = '#c4c4c4', typeName, keyword, addOption }) => {
   return (
      <>
         <Wrapper>
            <p> {typeName ? `no ${typeName} found` : 'not found'} </p>
         </Wrapper>
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

export default NoItemFound
