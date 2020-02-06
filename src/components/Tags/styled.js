import styled, { css } from 'styled-components'

export const StyledTagGroup = styled.div`
   display: flex;
`

const colorVariant = color => {
   switch (color) {
      case 'primary':
         return css`
            color: #3171e0;
            background: #eff5ff;
            border: 1px solid #dcdbdc;
         `
      case 'success':
         return css`
            color: #0fc255;
            background: #ecfcf3;
            border: 1px solid #dcdbdc;
         `
      case 'danger':
         return css`
            color: #d33939;
            background: #fef0f0;
            border: 1px solid #dcdbdc;
         `
      default:
         return css`
            color: #908996;
            background: #f2f1f3;
            border: 1px solid #dcdbdc;
         `
   }
}

export const StyledTag = styled.div(
   ({ color }) => css`
      height: 24px;
      padding: 0 4px;
      font-size: 14px;
      line-height: 24px;
      margin-right: 4px;
      border-radius: 4px;
      ${colorVariant(color)}
   `
)
