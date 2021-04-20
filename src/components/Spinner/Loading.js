import React from 'react'
import styled from 'styled-components'

const Loader = () => {
   return (
      <Spin className='icon-container'>
         <i className='loader'></i>
      </Spin>
   )
}

export default Loader
const Spin = styled.div`
   .loader {
      position: relative;
      height: 20px;
      width: 20px;
      display: inline-block;
      animation: around 5.4s infinite;
   }

   @keyframes around {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }

   .loader::after,
   .loader::before {
      content: '';
      background: #fff;
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-width: 2px;
      border-color: #367bf5 #367bf5 transparent transparent;
      border-style: solid;
      border-radius: 20px;
      box-sizing: border-box;
      top: 0;
      left: 0;
      animation: around 0.7s ease-in-out infinite;
   }

   .loader::after {
      animation: around 0.7s ease-in-out 0.1s infinite;
      background: transparent;
   }
`
