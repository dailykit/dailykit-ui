import React from 'react'
import { storiesOf } from '@storybook/react'
import { Toggle, Spacer } from '@dailykit/ui'

storiesOf('Toggle', module)
   .add('Checked', () => {
      const [checked, setChecked] = React.useState(true)
      return (
         <div style={{ width: '280px' }}>
            <Toggle
               checked={checked}
               label='Dark Mode'
               setChecked={setChecked}
            />
         </div>
      )
   })
   .add('Disabled', () => {
      const [checked] = React.useState(true)
      return (
         <div style={{ width: '280px' }}>
            <Toggle
               isDisabled
               checked={checked}
               setChecked={() => {}}
               label='A disabled toggle'
            />
         </div>
      )
   })
