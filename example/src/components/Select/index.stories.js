import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select } from '@dailykit/ui'

storiesOf('Select', module)
   .add('Single', () => {
      const [option] = React.useState({ id: 1, title: 'Option 1' })
      const addOption = () => console.log('Clicked!')
      const removeOption = option => console.log(option)
      return (
         <Select
            option={option}
            addOption={addOption}
            placeholder='Add Title'
            removeOption={removeOption}
         />
      )
   })
   .add('Multi', () => {
      const [options] = React.useState([
         { id: 1, title: 'Option 1' },
         { id: 2, title: 'Option 2' },
         { id: 3, title: 'Option 3' }
      ])
      const addOption = () => console.log('Clicked!')
      const removeOption = option => console.log(option)
      return (
         <Select
            options={options}
            addOption={addOption}
            placeholder='Add Title'
            removeOption={removeOption}
         />
      )
   })
