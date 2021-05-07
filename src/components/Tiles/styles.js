import styled, { css } from 'styled-components'

export const StyledDashboardTile = styled.div`
   background: #ffffff;
   border: 1px solid #d8d8d8;
   display: flex;
   width: 380px;
   border-radius: 2px;
   padding: 64px 37px 28px 24px;

   > div {
      flex: 1;
   }

   > div:nth-child(1) {
      color: #555b6e;
      text-align: left;

      h2 {
         margin: 0;
         font-weight: 500;
         font-size: 24px;
         line-height: 28px;
      }

      p {
         margin: 0;
         margin-top: 16px;
         font-weight: 500;
         font-size: 14px;
         line-height: 16px;

         &:nth-child(3) {
            font-style: italic;
            font-weight: normal;
         }
      }
   }

   > div:nth-child(2) {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;

      p {
         margin: 0;
         font-weight: 500;
         font-size: 14px;
         line-height: 16px;
         color: #00a7e1;

         svg {
            transform: translateY(1px);
            margin-left: 3px;
         }
      }
   }

   &:hover {
      background: #efefef;
      cursor: pointer;
   }
`

const extendedButtonTileStyle = (type = 'primary', size = 'sm') => {
   switch (type) {
      case 'primary':
         switch (size) {
            case 'lg':
               return css`
                  padding: 36px;
                  font-weight: 500;
                  line-height: 14px;
                  > div {
                     margin-top: 16px;
                     &.helper {
                        margin-top: 12px;
                        font-style: italic;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 14px;
                        color: #888d9d;
                     }
                  }
               `
            case 'sm':
               return css`
                  padding: 16px;
                  font-weight: 500;
                  line-height: 19px;
                  > div {
                     margin-top: 12px;
                     &.helper {
                        margin-top: 12px;
                        font-style: italic;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 14px;
                        color: #888d9d;
                     }
                  }
               `
            default:
               return extendedButtonTileStyle()
         }
      case 'secondary':
         return css`
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            > div {
               margin-left: 11px;
            }
         `
      case 'uploadImage':
         return css`
            height: 220px;
            width: 380px;
            justify-content: center;
            align-items: center;
            > div {
               margin-top: 16px;
            }
         `
      case 'revamp':
         return css`
            font-weight: 500;
            font-size: 16px;
            line-height: 18px;
            color: #367bf5;
            box-shadow: none;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            padding: 20px;
            > div {
               margin-left: 10px;
            }
            :hover {
               background-color: #f4f4f4;
            }
         `
      default:
         extendedButtonTileStyle()
   }
}

export const StyledButtonTile = styled.button`
   background: #ffffff;
   border: 1px solid #f3f3f3;
   box-sizing: border-box;
   color: #919699;
   cursor: pointer;
   outline: none;
   width: 100%;
   font-size: 20px;
   font-weight: 500;
   border-radius: 2px;
   box-shadow: -1px 1px 2px rgba(184, 184, 184, 0.2),
      1px -1px 2px rgba(184, 184, 184, 0.2),
      -1px -1px 2px rgba(255, 255, 255, 0.9),
      1px 1px 3px rgba(184, 184, 184, 0.9),
      inset 1px 1px 2px rgba(255, 255, 255, 0.3),
      inset -1px -1px 2px rgba(184, 184, 184, 0.5);
   ${props => extendedButtonTileStyle(props.type, props.size)};
`

export const StyledOptionTile = styled.button`
   background: #fff;
   padding: 16px;
   width: 100%;
   border: 1px solid #cecece;
   cursor: pointer;

   &:hover {
      background: #efefef;
   }
`
