import React from 'react'

import { Dropdown } from '@dailykit/ui'

export default {
   title: 'Dropdown'
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
   const [optionsWithoutDescription] = React.useState([
      { id: 1, title: 'Indian' },
      { id: 2, title: 'Bangladeshi' },
      { id: 3, title: 'Chinese' },
      { id: 4, title: 'Korean' },
      { id: 5, title: 'Spanish' },
      { id: 6, title: 'Russian' }
   ])
   const selectedOption = option => console.log(option)
   const searchedOption = option => console.log(option)
   return (
      <div>
         <Dropdown
            type='single'
            defaultValue={2}
            options={options}
            searchedOption={searchedOption}
            selectedOption={selectedOption}
            placeholder="type what you're looking for..."
         />
         <br />
         <Dropdown
            type='single'
            variant='revamp'
            addOption={() => console.log('Item added')}
            options={options}
            searchedOption={searchedOption}
            selectedOption={selectedOption}
            typeName='cuisine'
         />
         <br />
         <Dropdown
            type='single'
            variant='revamp'
            addOption={() => console.log('Item added')}
            options={optionsWithoutDescription}
            searchedOption={searchedOption}
            selectedOption={selectedOption}
            typeName='cuisine'
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
         <Dropdown
            type='multi'
            options={options}
            searchedOption={searchedOption}
            selectedOption={selectedOption}
            placeholder="type what you're looking for..."
         />
      </div>
   )
}

export const MultiWithDefaultOptions = () => {
   const [options] = React.useState([
      { id: 1, title: 'Option1', description: 'This is option 1' },
      { id: 2, title: 'Option2', description: 'This is option 2' },
      { id: 3, title: 'Option3', description: 'This is option 3' },
      { id: 4, title: 'Option4', description: 'This is option 4' },
      { id: 5, title: 'Option5', description: 'This is option 5' },
      { id: 6, title: 'Option6', description: 'This is option 6' }
   ])
   const defaultOptions = [
      { id: 4, title: 'Option4', description: 'This is option 4' },
      { id: 5, title: 'Option5', description: 'This is option 5' }
   ]
   const selectedOption = option => console.log(option)
   const searchedOption = option => console.log(option)
   return (
      <div>
         <Dropdown
            type='multi'
            options={options}
            defaultOptions={defaultOptions}
            searchedOption={searchedOption}
            selectedOption={selectedOption}
            placeholder="type what you're looking for..."
         />
      </div>
   )
}
export const MultiWithDefaultIds = () => {
   const [options] = React.useState([
      { id: 1, title: 'Option1', description: 'This is option 1' },
      { id: 2, title: 'Option2', description: 'This is option 2' },
      { id: 3, title: 'Option3', description: 'This is option 3' },
      { id: 4, title: 'Option4', description: 'This is option 4' },
      { id: 5, title: 'Option5', description: 'This is option 5' },
      { id: 6, title: 'Option6', description: 'This is option 6' }
   ])
   const defaultIds = [1, 4, 6]
   const selectedOption = option => console.log(option)
   const searchedOption = option => console.log(option)
   return (
      <div>
         <Dropdown
            type='multi'
            options={options}
            defaultIds={defaultIds}
            searchedOption={searchedOption}
            selectedOption={selectedOption}
            placeholder="type what you're looking for..."
         />
      </div>
   )
}
