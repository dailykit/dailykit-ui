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
      <>
         <ButtonGroup align='left'>
            <TextButton type='solid' size='sm'>
               Solid Button
            </TextButton>
            <TextButton type='solid'>Solid Button</TextButton>
         </ButtonGroup>
         <br />
         <ButtonGroup align='left'>
            <TextButton type='outline' size='sm'>
               Outline Button
            </TextButton>
            <TextButton type='outline'>Outline Button</TextButton>
         </ButtonGroup>
         <br />
         <ButtonGroup align='left'>
            <TextButton type='ghost' size='sm'>
               Ghost Button
            </TextButton>
            <TextButton type='ghost'>Ghost Button</TextButton>
         </ButtonGroup>
      </>
   ))
   .add('Icon Button', () => (
      <>
         <ButtonGroup align='left'>
            <IconButton type='solid' size='sm'>
               <PlusIcon />
            </IconButton>
            <IconButton type='solid'>
               <PlusIcon />
            </IconButton>
         </ButtonGroup>
         <br />
         <ButtonGroup align='left'>
            <IconButton type='outline' size='sm'>
               <SearchIcon />
            </IconButton>
            <IconButton type='outline'>
               <SearchIcon />
            </IconButton>
         </ButtonGroup>
         <br />
         <ButtonGroup align='left'>
            <IconButton type='ghost' size='sm'>
               <SearchIcon />
            </IconButton>
            <IconButton type='ghost'>
               <SearchIcon />
            </IconButton>
         </ButtonGroup>
      </>
   ))
   .add('Combo Button', () => (
      <>
         <ButtonGroup align='left'>
            <ComboButton type='solid' size='sm'>
               <SearchIcon /> Search
            </ComboButton>
            <ComboButton type='solid'>
               <SearchIcon /> Search
            </ComboButton>
         </ButtonGroup>
         <br />
         <ButtonGroup align='left'>
            <ComboButton type='outline' size='sm'>
               Add Ingredient
               <PlusIcon />
            </ComboButton>
            <ComboButton type='outline'>
               Add Ingredient
               <PlusIcon />
            </ComboButton>
         </ButtonGroup>
         <br />
         <ButtonGroup align='left'>
            <ComboButton type='ghost' size='sm'>
               <ClearIcon />
               Clear Filters
            </ComboButton>
            <ComboButton type='ghost'>
               <ClearIcon />
               Clear Filters
            </ComboButton>
         </ButtonGroup>
      </>
   ))
