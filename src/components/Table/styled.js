import styled, { css } from 'styled-components'

export const StyledTable = styled.table`
   width: 100%;
   display: table;
   border-spacing: 0;
   border-collapse: collapse;
`
export const StyledTableHead = styled.thead`
   width: 100%;
   display: table-header-group;
   td {
      height: 32px;
      color: #888d9d;
      font-size: 14px;
   }
`
export const StyledTableBody = styled.tbody`
   display: table-row-group;
   tr {
      :hover {
         background: #f3f3f3;
      }
   }
   td {
      height: 48px;
      color: #555b6e;
      font-size: 16px;
   }
`
export const StyledTableRow = styled.tr`
   display: table-row;
`
export const StyledTableCell = styled.td(
   ({ align }) => css`
      padding: 0 12px;
      display: table-cell;
      border-bottom: 1px solid #d8d8d8;
      text-align: ${align === 'right' ? align : 'left'};
      > div {
         float: ${align === 'right' ? align : 'left'};
      }
   `
)
