import styled, { css } from 'styled-components'

export const StyledTunnel = styled.div(({ mt, direction }) => {
   return css`
      top: ${mt || 0}px;
      ${(direction === 'top' || direction === 'bottom') &&
      css`
         top: 0;
      `};
      left: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      position: fixed;
      background: rgba(17, 17, 17, 0.7);
      z-index: 1000;
   `
})

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
const getTunnelDirectionStyle = (direction, size, mt) => {
   const marginTop = 8
   switch (direction) {
      case 'top':
         return css`
            right: 0;
            left: 0;
            width: 100%;
            height: ${pickSize(size)};
            border-radius: 0 0 14px 14px;
         `
      case 'right':
         return css`
            margin-top: 8px;
            top: 0;
            bottom: 0;
            right: 0;
            width: ${pickSize(size)};
            height: ${`calc(100% - ${Number(mt) + marginTop}px)`};
            border-radius: 14px 0 0 14px;
            @media only screen and (max-width: 1023px) and (min-width: 569px) {
               width: ${size === 'sm' ? pickSize('md') : pickSize(size)};
            }
            @media only screen and (max-width: 568px) {
               width: ${pickSize('full')};
            }
         `
      case 'bottom':
         return css`
            right: 0;
            left: 0;
            bottom: 0;
            width: 100%;
            height: ${pickSize(size)};
            border-radius: 14px 14px 0 0;
         `
      case 'left':
         return css`
            margin-top: 8px;
            top: 0;
            bottom: 0;
            left: 0;
            width: ${pickSize(size)};
            height: ${`calc(100% - ${Number(mt) + marginTop}px)`};
            border-radius: 0 14px 14px 0;
            @media only screen and (max-width: 1023px) and (min-width: 569px) {
               width: ${size === 'sm' ? pickSize('md') : pickSize(size)};
            }
            @media only screen and (max-width: 568px) {
               width: ${pickSize('full')};
            }
         `
      default:
         return css`
            margin-top: 8px;
            top: 0;
            bottom: 0;
            right: 0;
            width: ${pickSize(size)};
            height: ${`calc(100% - ${Number(mt) + marginTop}px)`};
            border-radius: 14px 0 0 14px;
            @media only screen and (max-width: 1023px) and (min-width: 569px) {
               width: ${size === 'sm' ? pickSize('md') : pickSize(size)};
            }
            @media only screen and (max-width: 568px) {
               width: ${pickSize('full')};
            }
         `
   }
}

export const StyledTunnelPanel = styled.div(
   ({ size, direction, mt }) => css`
      background: #fff;
      overflow-y: auto;
      position: absolute;
      ${getTunnelDirectionStyle(direction, size, mt)}
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
export const StyledTunnelHeader = styled.div(
   ({ position }) => css`
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      height: 80px;
      padding: 16px;
      border-bottom: 1px solid #e4e4e4;
      ${position === 'bottom' &&
      css`
         border-top: 1px solid #e4e4e4;
         position: absolute;
         width: 100%;
         bottom: 0;
         border-bottom: none;
      `}
   `
)
