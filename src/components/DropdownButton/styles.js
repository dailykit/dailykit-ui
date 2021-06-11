import styled, { css } from 'styled-components'

const colors = {
   primary: { light: '#367BF5', deep: '#165CDA' },
   secondary: { light: '#EBF1F4', deep: '#DFF4FF' }
}

const { primary, secondary } = colors
export const Section = styled.section(
   ({ width }) => css`
      position: relative;
      width: ${width};
   `
)

export const Header = styled.header(
   () => css`
      height: 40px;
      display: flex;
      border-radius: 2px;

      align-items: center;
      border: 1px solid ${primary.light};
      span {
         color: ${primary.light};
         font-weight: 500;
         font-size: 16px;
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
         width: 40px;
         flex: 1;
         padding: 0 12px;
      }
      button {
         width: 40px;
         color: #fff;
         border: none;
         height: inherit;
         cursor: pointer;
         background: ${primary.light};
      }
   `
)

export const List = styled.ul(
   () => css`
      left: 0;
      right: 0;
      padding: 0;
      z-index: 1000;
      background: #fff;
      margin: 2px 0 0 0;
      max-height: 280px;
      overflow-y: auto;
      position: absolute;
      border-radius: 2px;
      border: 1px solid #e3e3e3;
      li {
         list-style: none;
      }
   `
)

export const Button = styled.button(
   () => css`
      width: 100%;
      height: 40px;
      border: none;
      display: block;
      color: ${primary.light};
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
      background: transparent;
      :hover {
         color: #fff;
         background: ${primary.light};
      }
   `
)
