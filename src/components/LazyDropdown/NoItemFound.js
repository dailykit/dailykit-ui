import React from 'react'
import styled, { css } from 'styled-components'
import { PlusIcon } from '../../assets/icons'
import { StyledButton } from './styles'

const Wrapper = styled.div(
   () => css`
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
      padding-top: 20px;
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
            <div>
               <svg
                  width='12'
                  height='2'
                  viewBox='0 0 12 2'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <rect width='12' height='2' rx='1' fill={color} />
               </svg>
               <svg
                  width='12'
                  height='2'
                  viewBox='0 0 12 2'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <rect width='12' height='2' rx='1' fill={color} />
               </svg>
               <svg
                  width='12'
                  height='2'
                  viewBox='0 0 12 2'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <rect width='12' height='2' rx='1' fill={color} />
               </svg>
            </div>
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
