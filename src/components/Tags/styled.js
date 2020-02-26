import styled, { css } from 'styled-components'

export const StyledTagGroup = styled.div`
   display: flex;
   > div:not(:last-child) {
      margin-right: 6px;
   }
`

const colorVariant = color => {
   switch (color) {
      case 'primary':
         return css`
            color: #555b6e;
            background: #eff5ff;
         `
      case 'success':
         return css`
            color: #0fc255;
            background: #ecfcf3;
         `
      case 'danger':
         return css`
            color: #d33939;
            background: #fef0f0;
         `
      default:
         return css`
            color: #555b6e;
            background: #f2f1f3;
         `
   }
}

export const StyledTag = styled.div(
   ({ color }) => css`
      height: 28px;
      padding: 0 12px;
      font-size: 14px;
      align-items: center;
      display: inline-flex;
      outline: 2px solid #fff;
      ${colorVariant(color)}
   `
)
