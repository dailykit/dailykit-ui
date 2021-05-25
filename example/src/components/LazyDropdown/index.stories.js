import React from 'react'

import { LazyDropdown, Text, Spacer } from '@dailykit/ui'

export default {
   title: 'LazyDropdown'
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
         <LazyDropdown
            type='single'
            defaultValue={2}
            options={options}
            searchedOption={searchedOption}
            selectedOption={selectedOption}
            placeholder="type what you're looking for..."
            handleClick={() => {
               console.log('Fetch Data')
            }}
         />
         <br />
         <Text as='text1'>Default option</Text>
         <Spacer size='16px' />
         <LazyDropdown
            type='single'
            variant='revamp'
            defaultOption={{
               id: 3,
               title: 'Option3',
               description: 'This is option 3'
            }}
            addOption={() => console.log('Item added')}
            options={options}
            searchedOption={searchedOption}
            selectedOption={selectedOption}
            typeName='cuisine'
            handleClick={() => {
               console.log('Fetch Data')
            }}
         />
         <Spacer size='16px' />

         <Text as='text1'>Locked state</Text>
         <Spacer size='16px' />
         <LazyDropdown
            type='single'
            variant='revamp'
            defaultOption={{
               id: 3,
               title: 'Option3',
               description: 'This is option 3'
            }}
            addOption={() => console.log('Item added')}
            options={options}
            searchedOption={searchedOption}
            selectedOption={selectedOption}
            typeName='cuisine'
            readOnly={true}
            handleClick={() => {
               console.log('Fetch Data')
            }}
         />
         <br />
         <LazyDropdown
            type='single'
            variant='revamp'
            addOption={() => console.log('Item added')}
            options={optionsWithoutDescription}
            searchedOption={searchedOption}
            selectedOption={selectedOption}
            defaultName = 'Bangladeshi'
            isLoading = {true}
            typeName='cuisine'
            handleClick={() => {
               console.log('Fetch Data')
            }}
         />
         <br />
         <Text as='text1'>Disabled state</Text>
         <Spacer size='16px' />
         <LazyDropdown
            type='single'
            variant='revamp'
            disabled={true}
            addOption={() => console.log('Item added')}
            options={optionsWithoutDescription}
            searchedOption={searchedOption}
            selectedOption={selectedOption}
            typeName='cuisine'
            handleClick={() => {
               console.log('Fetch Data')
            }}
         />
      </div>
   )
}
