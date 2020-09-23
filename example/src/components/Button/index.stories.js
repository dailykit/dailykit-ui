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
            <TextButton
               type='solid'
               hasAccess={false}
               fallBackMessage='you no go!'
            >
               Locked
            </TextButton>
         </ButtonGroup>
         <br />
         <ButtonGroup align='left'>
            <TextButton type='outline' size='sm'>
               Outline Button
            </TextButton>
            <TextButton type='outline'>Outline Button</TextButton>
            <TextButton type='outline' hasAccess={false}>
               Locked
            </TextButton>
         </ButtonGroup>
         <br />
         <ButtonGroup align='left'>
            <TextButton type='ghost' size='sm'>
               Ghost Button
            </TextButton>
            <TextButton type='ghost'>Ghost Button</TextButton>
            <TextButton type='ghost' hasAccess={false}>
               Locked
            </TextButton>
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
            <IconButton type='solid' hasAccess={false}>
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
            <IconButton type='outline' hasAccess={false}>
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
            <IconButton type='ghost' hasAccess={false}>
               <SearchIcon />
            </IconButton>
         </ButtonGroup>
      </>
   ))
   .add('Combo Button', () => (
      <>
         <ButtonGroup align='left'>
            <ComboButton type='solid' size='sm'>
               <SearchIcon color='#fff' /> Search
            </ComboButton>
            <ComboButton type='solid'>
               <SearchIcon color='#fff' /> Search
            </ComboButton>
            <ComboButton type='solid' hasAccess={false}>
               <SearchIcon color='#fff' /> Search
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
            <ComboButton type='outline' hasAccess={false}>
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
            <ComboButton type='ghost' hasAccess={false}>
               <ClearIcon />
               Clear Filters
            </ComboButton>
         </ButtonGroup>
      </>
   ))
