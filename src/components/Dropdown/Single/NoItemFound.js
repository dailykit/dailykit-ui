import React from 'react'
import styled, { css } from 'styled-components'

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

const NoItemFound = ({ name, color = '#c4c4c4' }) => {
   return (
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
         <p>no {name || 'item'} found</p>
      </Wrapper>
   )
}

export default NoItemFound
