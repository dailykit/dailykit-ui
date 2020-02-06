import React from 'react'

import {
   StyledTable,
   StyledTableHead,
   StyledTableBody,
   StyledTableRow,
   StyledTableCell
} from './styled'

const Table = ({ children, ...props }) => (
   <StyledTable {...props}>{children}</StyledTable>
)

const TableHead = ({ children, ...props }) => (
   <StyledTableHead {...props}>{children}</StyledTableHead>
)

const TableBody = ({ children, ...props }) => (
   <StyledTableBody {...props}>{children}</StyledTableBody>
)

const TableRow = ({ children, ...props }) => (
   <StyledTableRow {...props}>{children}</StyledTableRow>
)

const TableCell = ({ children, ...props }) => (
   <StyledTableCell {...props}>{children}</StyledTableCell>
)

export { Table, TableHead, TableBody, TableRow, TableCell }
