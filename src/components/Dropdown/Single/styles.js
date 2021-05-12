import styled, { css } from 'styled-components'

export const StyledSelect = styled.div(
   ({ variant, isOptionsVisible }) => css`
      height: 18px;
      width: ${variant === 'revamp' ? 'fit-content' : '100%'};
      min-width: ${isOptionsVisible ? '200px' : null};
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      z-index: 5;
      background: ${isOptionsVisible ? '#fff' : 'transparent'};
   `
)

export const StyledOptions = styled.div(
   ({ matchedOptions }) => css`
      position: absolute;
      max-height: 180px;
      height: auto;
      overflow-y: auto;
      top: 18px;
      width: 100%;
      background: #fff;
      box-shadow: ${matchedOptions.length
         ? `0px 4px 6px rgba(0, 0, 0, 0.15)`
         : null};
      z-index: 2;
      padding: 8px;
      ::-webkit-scrollbar {
         width: 6px;
      }
      ::-webkit-scrollbar-thumb {
         background-color: rgba(196, 196, 196, 0.9);
         border-radius: 8px;
      }
   `
)

export const StyledOption = styled.div(
   ({ description }) =>
      css`
         display: ${description ? 'flex' : 'inline-block'};
         align-items: flex-start;
         flex-direction: column;
         cursor: pointer;
         margin: 4px;
         color: #202020;
         > div {
            background: #ebf1f4;
            width: ${description ? '100%' : 'auto'};
            border-radius: 4px;
            font-size: 12px;
            padding: 6px;
            > span {
               font-weight: 700;
               margin-bottom: 4px;
               line-height: 16px;
            }
            > p {
               font-weight: 400;
            }
         }
      `
)

export const StyledSelected = styled.div(
   ({ selected, isOptionsVisible, disabled }) => css`
      width: ${isOptionsVisible ? `100%` : `76%;`};
      display: grid;
      grid-template-columns: ${isOptionsVisible? '1fr 12px' : 'max-content 12px'};
      padding: ${isOptionsVisible ? `8px 8px 8px 0px` : `8px 0px 8px 0px`};
      box-shadow:  null;
      opacity: ${disabled ? 0.5 : 1};
      cursor: ${disabled && 'not-allowed'};
      div {
         height: 18px;
         display: flex;
         align-items: center;
         display: grid;
         grid-template-columns: 1fr 12px;
         
         grid-template-areas: 'input search';
         input {
            height: 18px;
            width: 100%;
            border: none;
            font-weight: 500;
            grid-area: input;
            font-size: ${isOptionsVisible ? '16px' : '16px'};
            line-height: 16px;
            letter-spacing: 0.32px;
            padding: 0px;
            color: #919699;
            background: transparent;
            &:focus {
               outline: none;
            }
         }
         span[data-type='text'] {
            color: #202020;
            font-weight: 500;
            font-size: 16px;
         }
         span[data-type='icon'] {
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            grid-area: search;
            &:after {
               content: '';
               position: absolute;
               height: 24px;
               width: 24px;
               top: 50%;
               left: 50%;
               border-radius: 50%;
               transform: translate(-50%, -50%);
               background: rgba(0, 0, 0, 0.1);
               display: none;
            }
            ${selected !== null &&
            css`
               &:hover:after {
                  display: block;
               }
            `}
         }
      }
      > button {
         display: flex;
         align-items: center;
         justify-content: center;
         position: relative;
         border: none;
         background: transparent;
         &:after {
            content: '';
            position: absolute;
            height: 24px;
            width: 24px;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.1);
            display: none;
         }
         &:hover:after {
            display: block;
         }
      }
   `
)
export const StyledButton = styled.button(
   () => css`
      width: 100%;
      overflow-x: auto;
      background-color: #ebf1f4;
      color: #367bf5;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      padding: 8px 20px;
   `
)
