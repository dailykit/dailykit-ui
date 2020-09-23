import React from 'react'

import {
   StyledH1,
   StyledH2,
   StyledH3,
   StyledH4,
   StyledPara,
   StyledTitle,
   StyledSubTitle
} from './styled'

const H1 = props => <StyledH1>{props.children}</StyledH1>
const H2 = ({ children, ...props }) => (
   <StyledH2 {...props}>{children}</StyledH2>
)
const H3 = ({ children, ...props }) => (
   <StyledH3 {...props}>{children}</StyledH3>
)
const H4 = ({ children, ...props }) => (
   <StyledH4 {...props}>{children}</StyledH4>
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
      case 'h3':
         return <H3 {...props}>{children}</H3>
      case 'h4':
         return <H4 {...props}>{children}</H4>
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
