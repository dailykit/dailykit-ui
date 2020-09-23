import React from 'react'
import { storiesOf } from '@storybook/react'

import { Text } from '@dailykit/ui'

storiesOf('Text', module)
   .add('Headings', () => (
      <div>
         <Text as='h1'>Heading 1</Text>
         <br />
         <Text as='h2'>Heading 2</Text>
         <br />
         <Text as='h3'>Heading 3</Text>
         <br />
         <Text as='h4'>Heading 4</Text>
      </div>
   ))
   .add('Titles', () => (
      <div>
         <Text as='title'>Entity Title</Text>
         <Text as='subtitle'>Sub Title</Text>
      </div>
   ))
   .add('Paragraph', () => (
      <Text as='p'>
         This is a placeholder paragraph meant to be seen as an example for a
         paragraph that may or may not have multiple lines
      </Text>
   ))
