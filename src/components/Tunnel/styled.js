import styled, { css } from 'styled-components'

export const StyledTunnel = styled.div(
   ({ mt }) => css`
      top: ${mt || 0}px;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      position: fixed;
      background: rgba(17, 17, 17, 0.7);
      z-index: 1000;
   `
)

const pickSize = size => {
   switch (size) {
      case 'full':
         return '100%'
      case 'lg':
         return '75%'
      case 'md':
         return '50%'
      case 'sm':
         return '25%'
      default:
         return '50%'
   }
}

export const StyledTunnelPanel = styled.div(
   ({ size, partial, visible, mt }) => css`
      margin-top: 8px;
      height: ${`calc(100% - ${mt + 8}px)`};
      padding-bottom: 16px;
      background: #fff;
      float: ${partial ? 'left' : 'right'};
      width: ${pickSize(size)};
      border-radius: 14px 0px 0px 0px;
      overflow-y: auto;
      ${visible &&
      css`
         @keyframes transformOpen {
            from {
               transform: translateX(100%);
            }
            to {
               transform: translateX(0%);
            }
         }

         animation: transformOpen 1s ease-in-out;
      `}

      ${!visible &&
      css`
         @keyframes transformClose {
            from {
               transform: translateX(0%);
            }
            to {
               transform: translateX(100%);
            }
         }
         transition: transformClose 1s ease-in-out;
      `}
      @media only screen and (max-width: 1023px) and (min-width: 569px) {
         width: ${size === 'sm' ? pickSize('md') : pickSize(size)};
      }
      @media only screen and (max-width: 568px) {
         width: ${pickSize('full')};
      }
   `
)

export const CloseButtonContainer = styled.div`
   border-radius: 13px;
   width: 26px;
   height: 26px;
   background: #f3f3f3;
   box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3),
      -1px -1px 2px rgba(206, 206, 205, 0.5),
      inset -1px 1px 2px rgba(206, 206, 205, 0.2),
      inset 1px -1px 2px rgba(206, 206, 205, 0.2),
      inset -1px -1px 2px rgba(255, 255, 255, 0.9),
      inset 1px 1px 3px rgba(206, 206, 205, 0.9);
`
export const StyledText = styled.h1`
   color: #202020;
   font-weight: 500;
   font-size: 23px;
`
