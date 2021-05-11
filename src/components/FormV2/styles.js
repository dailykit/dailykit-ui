import styled, { css } from 'styled-components'

const selectToggleColor = variant => {
   switch (variant) {
      case 'dark':
         return '#000000'
      case 'green':
         return '#60D77A'
      default:
         return '#367BF5'
   }
}
const textInput = (variant, hasError) => {
   switch (variant) {
      case 'revamp':
         return css`
            border: none;
            text-align: center;
            font-weight: 500;
            font-size: 40px;
            :focus {
               outline: none;
               border: none;
            }
            :focus::placeholder {
               color: transparent;
            }
         `
      case 'revamp-sm':
         return css`
            border: none;
            text-align: left;
            font-weight: 500;
            font-size: 16px;
            :focus {
               outline: none;
               border: none;
            }
            :focus::placeholder {
               color: transparent;
            }
         `
      default:
         return css`
            border: 1px solid ${hasError ? '#c43535' : '#e3e3e3'};
            text-align: left;
            font-size: 16px;
            padding: 0 12px;
            height: 40px;
            :focus {
               outline: none;
               border: 2px solid #799ef4;
            }
            :focus::placeholder {
               color: transparent;
            }
            :hover:not(:focus) {
               border: 1px solid #ccc1c1;
            }
         `
   }
}
const Styles = {
   Section: styled.section`
      display: flex;
      flex-direction: column;
   `,
   Field: styled.section(
      ({ hasReadAccess, hasWriteAccess }) => css`
         position: relative;
         textarea,
         input[type='time'],
         input[type='date'],
         input[type='text'],
         input[type='number'],
         input[type='password'],
         select {
            width: 100%;
            background: transparent;
            :hover {
               background: #f7f7f7;
            }
         }
         ${(hasWriteAccess === false || hasReadAccess === false) &&
         css`
            span.locked {
               top: 50%;
               left: 50%;
               z-index: 101;
               position: absolute;
               cursor: not-allowed;
               transform: translate(-44%, -44%);
            }
            ::before {
               top: 0;
               left: 0;
               content: '';
               z-index: 100;
               width: 100%;
               height: 100%;
               position: absolute;
               border-radius: 4px;
               cursor: not-allowed;
               background: ${hasReadAccess === false
                  ? '#ececec'
                  : 'rgba(83, 82, 82, 0.1)'};
            }
         `}
      `
   ),
   Label: styled.label`
      color: #57567a;
      font-size: 14px;
      margin-bottom: 4px;
   `,
   Text: styled.input(
      ({ hasError, variant }) => css`
         border-radius: 4px;
         ${textInput(variant, hasError)}
      `
   ),
   Number: styled.input(
      ({ hasError }) => css`
         width: 100%;
         height: 40px;
         padding: 0 12px;
         font-size: 16px;
         border-radius: 4px;
         border: 1px solid ${hasError ? '#c43535' : '#e3e3e3'};
         -moz-appearance: textfield;
         ::-webkit-outer-spin-button,
         input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
         }
         :focus {
            outline: none;
            border: 2px solid #799ef4;
         }
         :hover:not(:focus) {
            border: 1px solid #ccc1c1;
         }
      `
   ),
   TextArea: styled.textarea(
      ({ hasError, noBorder }) => css`
         padding: 8px 12px;
         font-size: 16px;
         font-weight: 500;
         letter-spacing: 0.16px;
         border-radius: 4px;
         border: ${noBorder
            ? 'none'
            : `1px solid ${hasError ? '#c43535' : '#e3e3e3'}`};
         :focus {
            outline: none;
            border: ${noBorder ? 'none' : `2px solid #799ef4`};
         }
         :hover:not(:focus) {
            border: ${noBorder ? 'none' : `1px solid #ccc1c1;`};
         }
      `
   ),
   Error: styled.section(
      ({
         fontSize = '12px',
         color = '#FF5A52',
         justifyContent = 'flex-start'
      }) => css`
         display: flex;
         margin-top: 4px;
         align-items: center;
         justify-content: ${justifyContent};
         span {
            height: 20px;
            width: 20px;
            display: flex;
            margin-right: 4px;
            align-items: center;
            justify-content: center;
         }
         p {
            color: ${color};
            font-size: ${fontSize};
         }
      `
   ),
   Hint: styled.section`
      display: flex;
      margin-top: 4px;
      align-items: center;
      span {
         height: 20px;
         width: 20px;
         display: flex;
         margin-right: 4px;
         align-items: center;
         justify-content: center;
      }
      p {
         color: #737378;
         font-size: 14px;
      }
   `,

   Toggle: styled.section(
      ({ size = 36, variant, iconWithText }) => css`
         display: flex;
         align-items: center;
         justify-content: ${iconWithText ? 'flex-start' : 'space-between'};

         span {
            color: #43455a;
            cursor: pointer;
            padding-right: 12px;
         }
         label {
            width: ${size}px;
            height: ${size * 0.5}px;
            cursor: pointer;
            border-radius: ${size * 0.38}px;
            background: #d1cece;
            display: inline-block;
            position: relative;
            transition: all 0.1s linear;

            :after {
               top: ${size * 0.06}px;
               left: ${size * 0.06}px;
               content: '';
               width: ${size * 0.38}px;
               height: ${size * 0.38}px;
               position: absolute;
               border-radius: ${size * 0.42}px;
               background: #fff;
            }
            :before {
               display: none;
               top: ${size * 0.06}px;
               right: ${size * 0.06}px;
               content: '';
               width: ${size * 0.38}px;
               height: ${size * 0.38}px;
               position: absolute;
               border-radius: ${size * 0.42}px;
               background: #fff;
            }
         }
         input {
            opacity: 0;
            width: 0;
            height: 0;
            :checked ~ label {
               background: ${selectToggleColor(variant)};
               :after {
                  display: none;
               }
               :before {
                  display: block;
               }
            }
         }
      `
   ),
   Range: styled.section`
      width: 100%;
      display: flex;
      align-items: center;
      section {
         flex: 1;
         :first-child {
            input {
               border-right: none;
               border-top-right-radius: 0;
               border-bottom-right-radius: 0;
               :focus {
                  border-right: 2px solid #799ef4;
               }
            }
         }
         :last-child {
            input {
               border-top-left-radius: 0;
               border-bottom-left-radius: 0;
            }
         }
      }
   `,
   Stepper: styled.section(
      ({ hasError, width }) => css`
         display: flex;
         align-items: center;
         height: 40px;
         font-size: 16px;
         font-weight: 500;
         border-radius: 4px;
         border: none;
         :focus-within {
            outline: none;
            border: none;
         }
         :hover:not(:focus-within) {
            border: none;
         }
         > :nth-child(1) {
            font-weight: 500;
            font-size: 16px;
            letter-spacing: 0.16px;
            color: #919699;
         }

         > section {
            > input {
               border: none;
               text-align: center;
               padding: 0;
               border: none;
               font-size: 20px;
               width: ${width ? width : '100%'}!important;
               ::-webkit-outer-spin-button,
               ::-webkit-inner-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
               }
               :focus,
               :hover,
               :hover:not(:focus-within) {
                  border: none;
               }
               :focus::placeholder {
                  color: transparent;
               }
            }
            button {
               color: #202020;
               font-weight: bold;
               font-size: 20px;
            }
         }
      `
   ),
   Checkbox: styled.section`
      display: flex;
      align-items: flex-start;
      span {
         color: #43455a;
         cursor: pointer;
      }
      label {
         width: 18px;
         height: 18px;
         cursor: pointer;
         margin-right: 8px;
         border-radius: 4px;
         border: 1px solid #d1cece;
         display: inline-block;
         position: relative;
         flex-shrink: 0;
      }
      input {
         opacity: 0;
         width: 0;
         height: 0;
         position: absolute;
         :checked ~ label {
            border: 1px solid transparent;
            background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
         }
      }
   `,
   Date: styled.input(
      ({ hasError }) => css`
         height: 40px;
         padding: 0 12px;
         font-size: 16px;
         border-radius: 4px;
         border: 1px solid ${hasError ? '#c43535' : '#e3e3e3'};
         :focus {
            outline: none;
            border: 2px solid #799ef4;
         }
         :hover:not(:focus) {
            border: 1px solid #ccc1c1;
         }
      `
   ),
   Time: styled.input(
      ({ hasError }) => css`
         height: 40px;
         padding: 0 12px;
         font-size: 16px;
         border-radius: 4px;
         border: 1px solid ${hasError ? '#c43535' : '#e3e3e3'};
         :focus {
            outline: none;
            border: 2px solid #799ef4;
         }
         :hover:not(:focus) {
            border: 1px solid #ccc1c1;
         }
      `
   ),
   Select: styled.select(
      ({ hasError }) => css`
         height: 40px;
         padding: 0 12px;
         font-size: 16px;
         border-radius: 4px;
         border: 1px solid ${hasError ? '#c43535' : '#e3e3e3'};
         :focus {
            outline: none;
            border: 2px solid #799ef4;
         }
         :hover:not(:focus) {
            border: 1px solid #ccc1c1;
         }
      `
   ),
   TextSelect: styled.section`
      width: 100%;
      display: flex;
      align-items: center;
      section:first-child {
         flex: 1;
      }
      input {
         border-right: none;
         border-top-right-radius: 0;
         border-bottom-right-radius: 0;
      }
      select {
         border-top-left-radius: 0;
         border-bottom-left-radius: 0;
      }
   `
}

export default Styles
