import styled, { css } from 'styled-components'

const colors = {
   primary: { light: '#367BF5', deep: '#165CDA' },
   secondary: { light: '#EBF1F4', deep: '#DFF4FF' }
}
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
            ${dimensions({
               h: '32px',
               p: '7px 20px 8px 20px',
               fW: '500',
               fS: '14px'
            })}
         `
      case 'md':
         return css`
            ${dimensions({
               h: '40px',
               p: '7px 20px 8px 20px',
               fW: '500',
               fS: '16px'
            })}
         `
      default:
         return css`
            ${dimensions({ h: '48px', p: '12px 24px', fW: '500', fS: '16px' })}
         `
   }
}
const { primary, secondary } = colors
export const Styles = {
   TextButton: styled.button(
      ({
         size,
         type,
         disabled,
         isLoading,
         hasAccess,
         variant = 'primary'
      }) => css`
         color: #fff;
         border-radius: 2px;
         position: relative;
         outline: none;
         ${sizeTextSelector(size)}
         cursor: ${isLoading ? 'not-allowed' : 'pointer'};
         > span[data-type='spinner'] {
            padding-right: 10px;
         }

         ${hasAccess === false &&
         css`
            span.locked {
               top: 50%;
               left: 50%;
               z-index: 10;
               position: absolute;
               cursor: not-allowed;
               transform: translate(-50%, -50%);
            }
            ::before {
               top: 0;
               left: 0;
               content: '';
               z-index: 9;
               width: 100%;
               height: 100%;
               position: absolute;
               border-radius: 2px;
               cursor: not-allowed;
               background: ;
            }
         `}
         ${type === 'outline' &&
         css`
            color: ${primary.light};
            background: transparent;
            border: 1px solid ${primary.light};
            font-style: normal;
            font-weight: 500;
            ${hasAccess !== false &&
            css`
               &:hover {
                  color: ${props => props.color || primary.deep};
                  border: 1px solid ${primary.deep};
                  background: transparent;
                  border-radius: 2px;
               }
            `}
            &:hover {
               .loader__divs {
                  background: red;
               }
            }
         `}
         ${type === 'solid' &&
         css`
            color: ${variant === 'secondary' ? primary.light : '#fff'};
            border: none;
            background: ${variant === 'secondary'
               ? secondary.light
               : primary.light};
            &:hover {
               color: ${variant === 'secondary' ? primary.deep : '#fff'};
               background: ${variant === 'secondary'
                  ? secondary.deep
                  : primary.deep};
            }
         `}
         ${type === 'ghost' &&
         css`
            color: ${props => props.color || primary.light};
            border: none;
            background: transparent;
            ${hasAccess !== false &&
            css`
               &:hover {
                  background: #f5f5f5;
                  color: ${primary.deep};
               }
            `}
         `}
         ${hasAccess || disabled || isLoading
            ? css`
                 cursor: not-allowed;
                 opacity: 0.5;
                 ${type === 'solid' &&
                 css`
                    background: ${variant === 'secondary'
                       ? secondary.light
                       : primary.light};
                 `}
              `
            : null}
      `
   ),

   IconButton: styled.button(
      ({
         size,
         type,
         disabled,
         isLoading,
         hasAccess,
         variant = 'primary'
      }) => css`
         border: none;
         display: flex;
         border-radius: 2px;
         position: relative;
         align-items: center;
         justify-content: center;
         outline: none;
         cursor: ${isLoading ? 'not-allowed' : 'pointer'};
         ${sizeIconSelector(size, isLoading)}
         ${hasAccess === false &&
         css`
            span.locked {
               top: 50%;
               left: 50%;
               z-index: 10;
               position: absolute;
               cursor: not-allowed;
               transform: translate(-50%, -46%);
            }
            ::before {
               top: 0;
               left: 0;
               content: '';
               z-index: 9;
               width: 100%;
               height: 100%;
               position: absolute;
               border-radius: 2px;
               cursor: not-allowed;
            }
         `}

         ${type === 'outline' &&
         css`
            background: transparent;
            border: 1px solid ${primary.light};
            ${hasAccess !== false &&
            css`
               &:hover {
                  color: ${primary.deep};
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
            color: ${variant === 'secondary' ? primary.light : '#fff'};
            border: none;
            background: ${variant === 'secondary'
               ? secondary.light
               : primary.light};
            &:hover {
               color: ${variant === 'secondary' ? primary.deep : '#fff'};
               background: ${variant === 'secondary'
                  ? secondary.deep
                  : primary.deep};
            }
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
         
         ${hasAccess || disabled || isLoading
            ? css`
                 cursor: not-allowed;
                 opacity: 0.5;
                 ${type === 'solid' &&
                 css`
                    background: ${variant === 'secondary'
                       ? secondary.light
                       : primary.light};
                 `}
              `
            : null}
      `
   ),
   ComboButton: styled.button(
      ({
         size,
         position,
         type,
         disabled,
         isLoading,
         hasAccess,
         variant = 'primary'
      }) => css`
         display: flex;
         border-radius: 2px;
         position: relative;
         align-items: center;
         outline: none;
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
               z-index: 10;
               position: absolute;
               cursor: not-allowed;
               transform: translate(-50%, -50%);
            }
            ::before {
               top: 0;
               left: 0;
               content: '';
               z-index: 9;
               width: 100%;
               height: 100%;
               position: absolute;
               border-radius: 2px;
               cursor: not-allowed;
            }
         `}
         span {
            display: flex;
            height: inherit;
            align-items: center;
            justify-content: center;
            padding: ${position === 'right' ? '0 0 0 10px' : '0 10px 0 0'};
         }

         ${type === 'outline' &&
         css`
            color: ${primary.light};
            background: transparent;
            border: 1px solid ${primary.light};
            ${hasAccess !== false &&
            css`
               &:hover {
                  color: ${primary.deep};
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
            color: ${variant === 'secondary' ? primary.light : '#fff'};
            border: none;
            background: ${variant === 'secondary'
               ? secondary.light
               : primary.light};

            &:hover {
               color: ${variant === 'secondary' ? primary.deep : '#fff'};
               background: ${variant === 'secondary'
                  ? secondary.deep
                  : primary.deep};
            }
         `}

         ${type === 'ghost' &&
         css`
            color: ${props => props.color || primary.light};
            border: none;
            background: transparent;
            ${hasAccess !== false &&
            css`
               &:hover {
                  background: #f5f5f5;
               }
            `}
         `}
         ${hasAccess || disabled || isLoading
            ? css`
                 cursor: not-allowed;
                 opacity: 0.5;
                 ${type === 'solid' &&
                 css`
                    background: ${variant === 'secondary'
                       ? secondary.light
                       : primary.light};
                 `}
              `
            : null}
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
   ),
   Spinner: styled.div(
      ({ type, variant }) => css`
         display: inline-block;
         position: relative;
         width: 14px;
         height: 14px;
         border: 1px solid transparent;
         border-radius: 50%;
         border-top: 1px solid
            ${type === 'solid' && variant !== 'secondary'
               ? '#fff'
               : primary.light};
         animation: spin 2s linear infinite;
         @keyframes spin {
            0% {
               transform: rotate(0deg);
            }
            100% {
               transform: rotate(360deg);
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
               w: '36px'
            })}
         `
      case 'md':
         return css`
            ${dimensions({
               h: '40px',
               w: '44px'
            })}
         `
      default:
         return css`
            ${dimensions({
               h: '48px',
               w: '52px'
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
               fW: '500',
               fS: '14px',
               p: '7px 20px 8px 20px'
            })}
         `
      case 'md':
         return css`
            ${dimensions({
               h: '40px',
               fW: '500',
               fS: '16px',
               p: '7px 20px 8px 20px'
            })}
         `
      default:
         return css`
            ${dimensions({
               h: '48px',
               fW: '500',
               fS: '16px',
               p: '12px 24px'
            })}
         `
   }
}
