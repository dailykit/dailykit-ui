import React from 'react'

import { ComboBox } from '@dailykit/ui'

export default {
   title: 'ComboBox'
}

export const Single = () => {
   const [options] = React.useState([
      { id: 1, title: 'Option1', description: 'This is option 1' },
      { id: 2, title: 'Option2', description: 'This is option 2' },
      { id: 3, title: 'Option3', description: 'This is option 3' },
      { id: 4, title: 'Option4', description: 'This is option 4' },
      { id: 5, title: 'Option5', description: 'This is option 5' },
      { id: 6, title: 'Option6', description: 'This is option 6' }
   ])
   const selectedOption = option => console.log(option)
   const searchedOption = option => console.log(option)
   return (
      <div>
         <ComboBox
            type='single'
            options={options}
            searchedOption={searchedOption}
            selectedOption={selectedOption}
            placeholder="type what you're looking for..."
         />
      </div>
   )
}

export const Multi = () => {
   const [options] = React.useState([
      { id: 1, title: 'Option1', description: 'This is option 1' },
      { id: 2, title: 'Option2', description: 'This is option 2' },
      { id: 3, title: 'Option3', description: 'This is option 3' },
      { id: 4, title: 'Option4', description: 'This is option 4' },
      { id: 5, title: 'Option5', description: 'This is option 5' },
      { id: 6, title: 'Option6', description: 'This is option 6' }
   ])
   const selectedOption = option => console.log(option)
   const searchedOption = option => console.log(option)
   return (
      <div>
         <ComboBox
            type='multi'
            options={options}
            searchedOption={searchedOption}
            selectedOption={selectedOption}
            placeholder="type what you're looking for..."
         />
      </div>
   )
}
