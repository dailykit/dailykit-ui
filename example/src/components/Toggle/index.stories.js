import React from 'react'
import { storiesOf } from '@storybook/react'
import { Toggle } from '@dailykit/ui'

storiesOf('Toggle', module)
   .add('Checked', () => {
      const [checked, setChecked] = React.useState(true)
      return (
         <Toggle
            checked={checked}
            label='This is a label'
            setChecked={setChecked}
         />
      )
   })
   .add('Unchecked', () => {
      const [checked, setChecked] = React.useState(false)
      return (
         <Toggle
            checked={checked}
            label='This is a label'
            setChecked={setChecked}
         />
      )
   })
