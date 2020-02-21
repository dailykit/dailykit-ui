import styled, { css } from 'styled-components'

export const StyledTextButton = styled.button`
  height: 40px;
  padding: 0 28px;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  ${({ type }) =>
     type === 'outline' &&
     css`
        color: #00a7e1;
        background: transparent;
        border: 1px solid #00a7e1;
        &:hover {
           color: #fff;
           background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
        }
     `}
  ${({ type }) =>
     type === 'solid' &&
     css`
        color: #fff;
        border: none;
        background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
     `}
  ${({ type }) =>
     type === 'ghost' &&
     css`
        color: #00a7e1;
        border: none;
        background: transparent;
        &:hover {
           background: #f5f5f5;
        }
     `}
`

export const StyledIconButton = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${({ type }) =>
     type === 'outline' &&
     css`
        background: transparent;
        border: 1px solid #00a7e1;
        svg {
           stroke: #00a7e1;
        }
        &:hover {
           background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
           svg {
              stroke: #fff;
           }
        }
     `}
  ${({ type }) =>
     type === 'solid' &&
     css`
        color: #fff;
        border: none;
        background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
     `}
  ${({ type }) =>
     type === 'ghost' &&
     css`
        border: none;
        background: transparent;
        svg {
           stroke: #00a7e1;
        }
        &:hover {
           background: #f5f5f5;
        }
     `}
`

export const StyledComboButton = styled.button`
  height: 40px;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${({ position }) =>
     position === 'right'
        ? css`
             padding: 0 0 0 14px;
          `
        : css`
             padding: 0 28px 0 0;
          `}

  ${({ type }) =>
     type === 'outline' &&
     css`
        color: #00a7e1;
        background: transparent;
        border: 1px solid #00a7e1;
        svg {
           stroke: #00a7e1;
        }
        &:hover {
           color: #fff;
           background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
           svg {
              stroke: #fff;
           }
        }
     `}
  ${({ type }) =>
     type === 'solid' &&
     css`
        color: #fff;
        border: none;
        background: linear-gradient(180deg, #28c1f7 -4.17%, #00a7e1 100%);
        svg {
           stroke: #fff;
        }
     `}
  ${({ type }) =>
     type === 'ghost' &&
     css`
        color: #00a7e1;
        border: none;
        background: transparent;
        svg {
           stroke: #00a7e1;
        }
        &:hover {
           background: #f5f5f5;
        }
     `}
`

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
