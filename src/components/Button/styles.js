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

export const Styles = {
   TextButton: styled.button(
      ({ size, type, disabled, isLoading, hasAccess }) => css`
         color: #ffffff;
         border-radius: 2px;
         position: relative;
         ${sizeTextSelector(size)}
         cursor: ${isLoading ? 'not-allowed' : 'pointer'};
         ${hasAccess === false &&
         css`
            span.locked {
               top: 50%;
               left: 50%;
               z-index: 101;
               position: absolute;
               cursor: not-allowed;
               transform: translate(-50%, -50%);
            }
            ::before {
               top: 0;
               left: 0;
               content: '';
               z-index: 100;
               width: 100%;
               height: 100%;
               position: absolute;
               border-radius: 2px;
               cursor: not-allowed;
               background: rgba(0, 0, 0, 0.2);
            }
         `}
         ${type === 'outline' &&
         css`
            color: #00a7e1;
            background: transparent;
            border: 1px solid #00a7e1;
            ${hasAccess !== false &&
            css`
               &:hover {
                  color: #fff;
                  background: linear-gradient(
                     180deg,
                     #28c1f7 -4.17%,
                     #00a7e1 100%
                  );
               }
            `}
            &:hover {
               .loader__divs {
                  background: #fff;
               }
            }
         `}
         ${type === 'solid' &&
         css`
            color: #fff;
            border: none;
            background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
         `}
         ${type === 'ghost' &&
         css`
            color: #00a7e1;
            border: none;
            background: transparent;
            ${hasAccess !== false &&
            css`
               &:hover {
                  background: #f5f5f5;
               }
            `}
         `}
         ${hasAccess !== false &&
         disabled &&
         !isLoading &&
         css`
            cursor: not-allowed;
            ${type === 'solid' &&
            css`
               background: #b7aaaa;
            `}
            ${type === 'outline' &&
            css`
               color: #776d6d;
               border: 1px solid #b7aaaa;
               :hover {
                  color: #776d6d;
                  background: transparent;
               }
            `}
            ${type === 'ghost' &&
            css`
               color: #776d6d;
               :hover {
                  color: #776d6d;
                  background: transparent;
               }
            `}
         `}
      `
   ),
   IconButton: styled.button(
      ({ size, type, disabled, isLoading, hasAccess }) => css`
         border: none;
         display: flex;
         border-radius: 2px;
         position: relative;
         align-items: center;
         justify-content: center;
         cursor: ${isLoading ? 'not-allowed' : 'pointer'};
         ${sizeIconSelector(size, isLoading)}
         ${hasAccess === false &&
         css`
            span.locked {
               top: 50%;
               left: 50%;
               z-index: 101;
               position: absolute;
               cursor: not-allowed;
               transform: translate(-50%, -46%);
            }
            ::before {
               top: 0;
               left: 0;
               content: '';
               z-index: 100;
               width: 100%;
               height: 100%;
               position: absolute;
               border-radius: 2px;
               cursor: not-allowed;
               background: rgba(0, 0, 0, 0.2);
            }
         `}
         ${type === 'outline' &&
         css`
            background: transparent;
            border: 1px solid #00a7e1;
            > svg {
               stroke: #00a7e1;
            }
            ${hasAccess !== false &&
            css`
               &:hover {
                  background: linear-gradient(
                     180deg,
                     #28c1f7 -4.17%,
                     #00a7e1 100%
                  );
                  > svg {
                     stroke: #fff;
                  }
               }
            `}
            &:hover {
               .loader__divs {
                  background: #fff;
               }
            }
         `}
         ${type === 'solid' &&
         css`
            color: #fff;
            border: none;
            background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
         `}
         ${type === 'ghost' &&
         css`
            border: none;
            background: transparent;
            ${hasAccess !== false &&
            css`
               &:hover {
                  background: #f5f5f5;
               }
            `}
         `}
         
         ${hasAccess !== false &&
         disabled &&
         !isLoading &&
         css`
            cursor: not-allowed;
            ${type === 'solid' &&
            css`
               background: #b7aaaa;
            `}
            ${type === 'outline' &&
            css`
               border: 1px solid #b7aaaa;
               > svg {
                  stroke: #776d6d;
               }
               &:hover {
                  background: transparent;
                  > svg {
                     stroke: #776d6d;
                  }
               }
            `}
            ${type === 'ghost' &&
            css`
               :hover {
                  color: #776d6d;
                  background: transparent;
               }
               > svg {
                  stroke: #776d6d;
               }
            `}
         `}
      `
   ),
   ComboButton: styled.button(
      ({ size, position, type, disabled, isLoading, hasAccess }) => css`
         display: flex;
         border-radius: 2px;
         position: relative;
         align-items: center;
         cursor: ${isLoading ? 'not-allowed' : 'pointer'};
         ${isLoading &&
         css`
            justify-content: center;
            padding: 0 14px !important;
         `};
         ${sizeComboSelector(size)}
         ${hasAccess === false &&
         css`
            span.locked {
               top: 50%;
               left: 50%;
               z-index: 101;
               position: absolute;
               cursor: not-allowed;
               transform: translate(-50%, -50%);
            }
            ::before {
               top: 0;
               left: 0;
               content: '';
               z-index: 100;
               width: 100%;
               height: 100%;
               position: absolute;
               border-radius: 2px;
               cursor: not-allowed;
               background: rgba(0, 0, 0, 0.2);
            }
         `}
         span {
            display: flex;
            height: inherit;
            align-items: center;
            justify-content: center;
            width: ${size === 'sm' ? '32px' : '40px'};
         }
         ${position === 'right'
            ? css`
                 padding: 0 0 0 ${size === 'sm' ? '8px' : '14px'};
              `
            : css`
                 padding: 0 ${size === 'sm' ? '8px' : '14px'} 0 0;
              `}

         ${type === 'outline' &&
         css`
            color: #00a7e1;
            background: transparent;
            border: 1px solid #00a7e1;
            span > svg {
               stroke: #555b6e;
            }
            ${hasAccess !== false &&
            css`
               &:hover {
                  color: #fff;
                  background: linear-gradient(
                     180deg,
                     #28c1f7 -4.17%,
                     #00a7e1 100%
                  );
                  span > svg {
                     stroke: #fff;
                  }
               }
            `}
            &:hover {
               .loader__divs {
                  background: #fff;
               }
            }
         `}
         ${type === 'solid' &&
         css`
            color: #fff;
            border: none;
            background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
            > svg {
               stroke: #fff;
            }
         `}
         ${type === 'ghost' &&
         css`
            color: #00a7e1;
            border: none;
            background: transparent;
            > svg {
               stroke: #00a7e1;
            }
            ${hasAccess !== false &&
            css`
               &:hover {
                  background: #f5f5f5;
               }
            `}
         `}
         ${hasAccess !== false &&
         disabled &&
         !isLoading &&
         css`
            cursor: not-allowed;
            ${type === 'solid' &&
            css`
               background: #b7aaaa;
            `}
            ${type === 'outline' &&
            css`
               color: #776d6d;
               background: transparent;
               border: 1px solid #b7aaaa;
               span > svg {
                  stroke: #776d6d;
               }
               &:hover {
                  color: #776d6d;
                  background: transparent;
                  span > svg {
                     stroke: #776d6d;
                  }
               }
            `}
            ${type === 'ghost' &&
            css`
               color: #776d6d;
               :hover {
                  color: #776d6d;
                  background: transparent;
               }
               span > svg {
                  stroke: #776d6d;
               }
            `}
         `}
      `
   ),
   ButtonGroup: styled.div(
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
   ),
   Loader: styled.div(
      ({ type }) => css`
         display: inline-block;
         position: relative;
         width: 57px;
         height: 100%;
         > div {
            position: absolute;
            top: 50%;
            margin-top: -5px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${type === 'solid' ? '#fff' : '#95d3f3'};
            animation-timing-function: cubic-bezier(0, 1, 1, 0);
         }
         div:nth-child(1) {
            left: 8px;
            animation: lds-ellipsis1 0.6s infinite;
         }
         div:nth-child(2) {
            left: 8px;
            animation: lds-ellipsis2 0.6s infinite;
         }
         div:nth-child(3) {
            left: 24px;
            animation: lds-ellipsis2 0.6s infinite;
         }
         div:nth-child(4) {
            left: 40px;
            animation: lds-ellipsis3 0.6s infinite;
         }
         @keyframes lds-ellipsis1 {
            0% {
               transform: scale(0);
            }
            100% {
               transform: scale(1);
            }
         }
         @keyframes lds-ellipsis3 {
            0% {
               transform: scale(1);
            }
            100% {
               transform: scale(0);
            }
         }
         @keyframes lds-ellipsis2 {
            0% {
               transform: translate(0, 0);
            }
            100% {
               transform: translate(16px, 0);
            }
         }
      `
   )
}

const sizeIconSelector = (size, isLoading) => {
   switch (size) {
      case 'sm':
         return css`
            ${dimensions({
               h: '32px',
               w: isLoading ? 'auto' : '32px'
            })}
         `
      default:
         return css`
            ${dimensions({
               h: '40px',
               w: isLoading ? 'auto' : '40px'
            })}
         `
   }
}

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
