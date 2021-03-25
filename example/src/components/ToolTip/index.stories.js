import React from 'react'
import { storiesOf } from '@storybook/react'

import { ToolTip } from '@dailykit/ui'

const Wrapper = ({ children }) => {
   return (
      <div style={{ fontFamily: 'sans-serif', padding: '48px' }}>
         {children}
      </div>
   )
}

const DefaultBehaviour = () => {
   return (
      <Wrapper>
         This is a text{' '}
         <ToolTip content='I am the tooltip'>and this the tooltip</ToolTip>
      </Wrapper>
   )
}

const CustomToolTip = () => {
   return (
      <div>
         <h4 style={{ margin: 0 }}>I am custom content</h4>
         <p style={{ margin: 0 }}>With a lot of content</p>
      </div>
   )
}

const CustomContent = () => {
   return (
      <Wrapper>
         This is a text{' '}
         <ToolTip content={CustomToolTip}>and this the tooltip </ToolTip>
      </Wrapper>
   )
}

storiesOf('ToolTip')
   .add('default', DefaultBehaviour)
   .add('with custom content', CustomContent)
