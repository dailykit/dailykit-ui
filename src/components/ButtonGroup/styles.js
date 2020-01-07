import styled, { css } from 'styled-components'

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
