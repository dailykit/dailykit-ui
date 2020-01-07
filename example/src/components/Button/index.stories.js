import React from 'react'
import { storiesOf } from '@storybook/react'

import { TextButton, IconButton, ComboButton } from '@dailykit/ui'

import { PlusIcon, SearchIcon } from '../../assets/icons'

storiesOf('Button', module)
   .add('Text Button', () => (
      <div>
         <TextButton type='solid'>Solid Button</TextButton>
         <TextButton type='outline'>Outline Button</TextButton>
      </div>
   ))
   .add('Icon Button', () => (
      <div>
         <IconButton type='solid'>
            <PlusIcon />
         </IconButton>
         <IconButton type='outline'>
            <SearchIcon />
         </IconButton>
      </div>
   ))
   .add('Combo Button', () => (
      <div>
         <ComboButton type='solid'>
            <SearchIcon /> Search
         </ComboButton>
         <ComboButton type='outline'>
            Add Ingredient
            <PlusIcon />
         </ComboButton>
      </div>
   ))
