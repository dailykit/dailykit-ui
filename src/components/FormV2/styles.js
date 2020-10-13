import styled, { css } from 'styled-components'

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
      ({ hasError }) => css`
         padding: 8px 12px;
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
   Error: styled.section`
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
         color: #c82727;
         font-size: 14px;
      }
   `,
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
   Toggle: styled.section`
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
         color: #43455a;
         cursor: pointer;
      }
      label {
         width: 36px;
         height: 20px;
         cursor: pointer;
         border-radius: 20px;
         background: #d1cece;
         display: inline-block;
         position: relative;
         :after {
            top: -2px;
            left: -2px;
            content: '';
            width: 24px;
            height: 24px;
            position: absolute;
            border-radius: 20px;
            background: #a99d9d;
            transition: transform 0.1s linear;
         }
      }
      input {
         opacity: 0;
         width: 0;
         height: 0;
         :checked ~ label {
            background: linear-gradient(
               270deg,
               rgba(40, 193, 247, 0.8) 26.67%,
               rgba(0, 167, 225, 0.8) 100%
            );
            :after {
               transform: translateX(16px);
               background: linear-gradient(
                  180deg,
                  #28c1f7 -4.17%,
                  #00a7e1 100%
               );
            }
         }
      }
   `,
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
      ({ hasError }) => css`
         display: flex;
         align-items: center;
         height: 40px;
         font-size: 16px;
         border-radius: 4px;
         border: 1px solid ${hasError ? '#c43535' : '#e3e3e3'};
         :focus-within {
            outline: none;
            border: 2px solid #799ef4;
         }
         :hover:not(:focus-within) {
            border: 1px solid #ccc1c1;
         }
         section {
            flex: 1;
         }
         input {
            border: none;
            height: 36px;
            :focus {
               outline: none;
               border: none;
            }
            :hover:not(:focus) {
               border: none;
            }
         }
         div {
            height: 36px;
            display: flex;
            flex-direction: column;
            border-left: 1px solid #e3e3e3;
            button {
               width: 24px;
               height: 18px;
               border: none;
               background: none;
               :first-child {
                  border-bottom: 1px solid #e3e3e3;
               }
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
