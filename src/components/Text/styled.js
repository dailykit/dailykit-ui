import styled from 'styled-components'

export const StyledH1 = styled.h1`
   font-weight: 500;
   font-size: 24px;
   line-height: 36px;
   color: #555b6e;
   margin: 20px 0 12px 0;
`

export const StyledH2 = styled.h2`
   font-weight: 500;
   font-size: 20px;
   line-height: 30px;
   color: #555b6e;
   margin: ${({ noMargin }) => (noMargin ? 0 : '16px 0 8px 0')};
`

export const StyledPara = styled.p`
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #555b6e;
`

export const StyledTitle = styled.span`
   font-weight: 500;
   font-size: 18px;
   line-height: 27px;
   color: #555b6e;
   display: block;
`

export const StyledSubTitle = styled.span`
   font-weight: 400;
   font-size: 14px;
   line-height: 21px;
   color: #888d9d;
   display: block;
`
