import styled, { css } from 'styled-components'

export const StyledTunnel = styled.div`
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   width: 100vw;
   height: 100vh;
   position: fixed;
   background: rgba(0, 0, 0, 0.1);
`

export const StyledTunnelPanel = styled.div(
   ({ size, layer, partial }) => css`
      height: 100%;
      background: #fff;
      z-index: ${layer};
      float: ${partial ? 'left' : 'right'};
      width: ${size === 'lg' ? '70%' : '50%'};
      border-left: 1px solid rgba(0, 0, 0, 0.1);
   `
)
