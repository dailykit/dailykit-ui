import styled, { css } from 'styled-components'

export const StyledHelper = styled.span(
   ({ type }) => css`
      font-style: italic;
      font-weight: normal;
      font-size: 14px;
      line-height: 14px;
      color: ${type === 'hint' ? '#888d9d' : '#FF5A52'};
      display: flex;
      align-items: center;
      padding: ${type === 'hint' ? '3px' : '5px'} 0;
   `
)
