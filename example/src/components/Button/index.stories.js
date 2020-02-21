import React from 'react'
import { storiesOf } from '@storybook/react'

import {
   TextButton,
   IconButton,
   ComboButton,
   ButtonGroup,
   PlusIcon,
   SearchIcon,
   ClearIcon
} from '@dailykit/ui'

storiesOf('Button', module)
   .add('Text Button', () => (
      <ButtonGroup align='left'>
         <TextButton type='solid'>Solid Button</TextButton>
         <TextButton type='outline'>Outline Button</TextButton>
         <TextButton type='ghost'>Ghost Button</TextButton>
      </ButtonGroup>
   ))
   .add('Icon Button', () => (
      <ButtonGroup align='left'>
         <IconButton type='solid'>
            <PlusIcon />
         </IconButton>
         <IconButton type='outline'>
            <SearchIcon />
         </IconButton>
         <IconButton type='ghost'>
            <SearchIcon />
         </IconButton>
      </ButtonGroup>
   ))
   .add('Combo Button', () => (
      <ButtonGroup align='left'>
         <ComboButton type='solid'>
            <SearchIcon /> Search
         </ComboButton>
         <ComboButton type='outline'>
            Add Ingredient
            <PlusIcon />
         </ComboButton>
         <ComboButton type='ghost'>
            <ClearIcon />
            Clear Filters
         </ComboButton>
      </ButtonGroup>
   ))
