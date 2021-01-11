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
      background: rgba(0, 0, 0, 0.1);
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
   ({ size, partial }) => css`
      height: 100%;
      background: #fff;
      float: ${partial ? 'left' : 'right'};
      width: ${pickSize(size)};
      border-left: 1px solid rgba(0, 0, 0, 0.1);

      @media only screen and (max-width: 1023px) and (min-width: 569px) {
         width: ${size === 'sm' ? pickSize('md') : pickSize(size)};
      }
      @media only screen and (max-width: 568px) {
         width: ${pickSize('full')};
      }
   `
)
