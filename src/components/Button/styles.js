import styled, { css } from 'styled-components'

const dimensions = ({ h, p, w, fW, fS }) => css`
   width: ${w || 'auto'};
   height: ${h || 'auto'};
   padding: ${p || 'unset'};
   font-size: ${fS || 'unset'};
   font-weight: ${fW || 'unset'};
`

const sizeTextSelector = size => {
   switch (size) {
      case 'sm':
         return css`
            ${dimensions({ h: '32px', p: '0 8px', fW: '400', fS: '14px' })}
         `
      default:
         return css`
            ${dimensions({ h: '40px', p: '0 16px', fW: '400', fS: '16px' })}
         `
   }
}

export const StyledTextButton = styled.button`
   color: #ffffff;
   cursor: pointer;
   border-radius: 2px;
   ${({ size }) => sizeTextSelector(size)}
   ${({ type }) =>
      type === 'outline' &&
      css`
         color: #00a7e1;
         background: transparent;
         border: 1px solid #00a7e1;
         &:hover {
            color: #fff;
            background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
         }
      `}
  ${({ type }) =>
      type === 'solid' &&
      css`
         color: #fff;
         border: none;
         background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
      `}
  ${({ type }) =>
      type === 'ghost' &&
      css`
         color: #00a7e1;
         border: none;
         background: transparent;
         &:hover {
            background: #f5f5f5;
         }
      `}
`

const sizeIconSelector = size => {
   switch (size) {
      case 'sm':
         return css`
            ${dimensions({
               h: '32px',
               w: '32px'
            })}
         `
      default:
         return css`
            ${dimensions({
               h: '40px',
               w: '40px'
            })}
         `
   }
}

export const StyledIconButton = styled.button`
   border: none;
   cursor: pointer;
   display: flex;
   border-radius: 2px;
   align-items: center;
   justify-content: center;
   ${({ size }) => sizeIconSelector(size)}
   ${({ type }) =>
      type === 'outline' &&
      css`
         background: transparent;
         border: 1px solid #00a7e1;
         svg {
            stroke: #00a7e1;
         }
         &:hover {
            background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
            svg {
               stroke: #fff;
            }
         }
      `}
   ${({ type }) =>
      type === 'solid' &&
      css`
         color: #fff;
         border: none;
         background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
      `}
  ${({ type }) =>
      type === 'ghost' &&
      css`
         border: none;
         background: transparent;
         &:hover {
            background: #f5f5f5;
         }
      `}
`

const sizeComboSelector = size => {
   switch (size) {
      case 'sm':
         return css`
            ${dimensions({
               h: '32px',
               fW: '400',
               fS: '14px'
            })}
         `
      default:
         return css`
            ${dimensions({
               h: '40px',
               fW: '400',
               fS: '16px'
            })}
         `
   }
}

export const StyledComboButton = styled.button`
   display: flex;
   cursor: pointer;
   border-radius: 2px;
   align-items: center;
   ${({ size }) => sizeComboSelector(size)}
   span {
      display: flex;
      height: inherit;
      align-items: center;
      justify-content: center;
      width: ${({ size }) => (size === 'sm' ? '32px' : '40px')};
   }
   ${({ position, size }) =>
      position === 'right'
         ? css`
              padding: 0 0 0 ${size === 'sm' ? '8px' : '14px'};
           `
         : css`
              padding: 0 ${size === 'sm' ? '8px' : '14px'} 0 0;
           `}

   ${({ type }) =>
      type === 'outline' &&
      css`
         color: #00a7e1;
         background: transparent;
         border: 1px solid #00a7e1;
         svg {
            stroke: #00a7e1;
         }
         &:hover {
            color: #fff;
            background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
            svg {
               stroke: #fff;
            }
         }
      `}
  ${({ type }) =>
      type === 'solid' &&
      css`
         color: #fff;
         border: none;
         background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
         svg {
            stroke: #fff;
         }
      `}
  ${({ type }) =>
      type === 'ghost' &&
      css`
         color: #00a7e1;
         border: none;
         background: transparent;
         svg {
            stroke: #00a7e1;
         }
         &:hover {
            background: #f5f5f5;
         }
      `}
`

export const StyledButtonGroup = styled.div(
   ({ align }) => css`
      display: flex;
      button {
         ${align === 'left' &&
         css`
            &:not(:last-child) {
               margin-right: 16px;
            }
         `}
         ${align === 'right' &&
         css`
            &:not(:first-child) {
               margin-left: 16px;
            }
         `}
      }
   `
)
