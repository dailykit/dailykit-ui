import React from 'react'

import { ComboBox } from '@dailykit/ui'

export default {
   title: 'ComboBox'
}

export const Single = () => {
   const [options] = React.useState([
      { id: 1, value: 'Option1', description: 'This is option 1' },
      { id: 2, value: 'Option2', description: 'This is option 2' },
      { id: 3, value: 'Option3', description: 'This is option 3' },
      { id: 4, value: 'Option4', description: 'This is option 4' },
      { id: 5, value: 'Option5', description: 'This is option 5' },
      { id: 6, value: 'Option6', description: 'This is option 6' }
   ])
   const selectedOption = option => {}
   return (
      <div>
         <ComboBox
            type='single'
            options={options}
            selectedOption={selectedOption}
            placeholder="type what you're looking for..."
         />
      </div>
   )
}

export const Multi = () => {
   const [options] = React.useState([
      { id: 1, value: 'Option1', description: 'This is option 1' },
      { id: 2, value: 'Option2', description: 'This is option 2' },
      { id: 3, value: 'Option3', description: 'This is option 3' },
      { id: 4, value: 'Option4', description: 'This is option 4' },
      { id: 5, value: 'Option5', description: 'This is option 5' },
      { id: 6, value: 'Option6', description: 'This is option 6' }
   ])
   const selectedOption = option => {}
   return (
      <div>
         <ComboBox
            type='multi'
            options={options}
            selectedOption={selectedOption}
            placeholder="type what you're looking for..."
         />
      </div>
   )
}
