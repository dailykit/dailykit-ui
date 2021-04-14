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
      background: #fff;
   `
)

export const StyledOptions = styled.div(
   ({ matchedOptions }) => css`
      position: absolute;
      max-height: 180px;
      height: auto;
      overflow-y: auto;
      top: 20px;
      width: 100%;
      background: #fff;
      box-shadow: ${matchedOptions.length
         ? `0px 4px 6px rgba(0, 0, 0, 0.15)`
         : null};
      z-index: 2;
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
   () => css`
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      cursor: pointer;
      margin: 6px 10px;
      color: #202020;
      > div {
         background: #ebf1f4;
         width: 100%;
         border-radius: 4px;
         font-size: 12px;
         padding: 8px;
         > span {
            font-weight: 700;
            margin-bottom: 4px;
         }
         > p {
            font-weight: 400;
         }
      }
   `
)

export const StyledSelected = styled.div(
   ({ selected, isOptionsVisible }) => css`
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 20px;
      padding: 8px 0px 8px 16px;
      box-shadow: ${isOptionsVisible
         ? `0px -4px 6px rgba(0, 0, 0, 0.15)`
         : null};
      div {
         height: 18px;
         display: flex;
         align-items: center;
         display: grid;
         grid-template-columns: 1fr 20px;
         grid-template-areas: 'input search';
         input {
            height: 18px;
            width: 100%;
            border: none;
            font-weight: 500;
            grid-area: input;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.32px;
            color: #919699;
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
      > span {
         display: flex;
         align-items: center;
         justify-content: center;
         position: relative;
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
