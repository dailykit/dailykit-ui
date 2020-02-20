import styled, { css } from 'styled-components'

export const StyledList = styled.div(
   () => css`
      > li {
         border-bottom: 1px solid #c5c4c4;
      }
   `
)
export const StyledSearch = styled.div(
   () => css`
      height: 40px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #c5c4c4;
      :focus-within {
         border-bottom: 1px solid #535867;
      }
      span {
         width: 40px;
         height: 39px;
         display: flex;
         cursor: pointer;
         align-items: center;
         justify-content: center;
      }
      input {
         flex: 1;
         border: none;
         height: 39px;
         font-size: 16px;
         :focus {
            outline: none;
         }
      }
      h3 {
         flex: 1;
         color: #555b6e;
         font-size: 16px;
         font-weight: 500;
      }
   `
)

export const StyledOptions = styled.ul(
   () => css`
      li {
         cursor: pointer;
      }
      li:hover {
         background: #f3f3f3;
      }
   `
)
