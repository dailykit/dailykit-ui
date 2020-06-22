import React from 'react'

import {
   StyledH1,
   StyledH2,
   StyledPara,
   StyledTitle,
   StyledSubTitle
} from './styled'

const H1 = props => <StyledH1>{props.children}</StyledH1>
const H2 = ({ children, ...props }) => (
   <StyledH2 {...props}>{children}</StyledH2>
)
const Para = props => <StyledPara>{props.children}</StyledPara>
const Title = props => <StyledTitle>{props.children}</StyledTitle>
const SubTitle = props => <StyledSubTitle>{props.children}</StyledSubTitle>

const Text = ({ as, children, ...props }) => {
   switch (as) {
      case 'h1':
         return <H1 {...props}>{children}</H1>
      case 'h2':
         return <H2 {...props}>{children}</H2>
      case 'p':
         return <Para {...props}>{children}</Para>
      case 'title':
         return <Title {...props}>{children}</Title>
      case 'subtitle':
         return <SubTitle {...props}>{children}</SubTitle>
      default:
         return 'No such type!'
   }
}

export default Text
