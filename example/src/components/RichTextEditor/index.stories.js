import React from 'react'
import { storiesOf } from '@storybook/react'
//import { RichTextEditor } from '@dailykit/ui'
import RichTextEditor from '@dailykit/ui'

storiesOf('RichTextEditor')
   .add('RichTextEditor', () => {
      return (
          <RichTextEditor />
      )
   })