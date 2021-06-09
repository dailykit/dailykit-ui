import React from 'react'
import { storiesOf } from '@storybook/react'

import {
   TextButton,
   IconButton,
   ComboButton,
   ButtonGroup,
   DropdownButton,
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
            <TextButton type='solid' size='md'>
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
            <TextButton disabled type='solid'>
               Disabled
            </TextButton>
            <TextButton isLoading={true} type='solid'>
               Loading
            </TextButton>
         </ButtonGroup>
         <br />
         <ButtonGroup align='left'>
            <TextButton type='solid' variant='secondary' size='sm'>
               Solid Button
            </TextButton>
            <TextButton type='solid' variant='secondary'>
               Solid Button
            </TextButton>
            <TextButton
               type='solid'
               variant='secondary'
               hasAccess={false}
               fallBackMessage='you no go!'
            >
               Locked
            </TextButton>
            <TextButton disabled type='solid' variant='secondary'>
               Disabled
            </TextButton>
            <TextButton isLoading={true} type='solid' variant='secondary'>
               Loading
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
            <TextButton type='outline' disabled>
               Disabled
            </TextButton>
            <TextButton isLoading={true} type='outline'>
               Loading
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
            <TextButton type='ghost' disabled>
               Disabled
            </TextButton>
            <TextButton isLoading={true} type='ghost'>
               Loading
            </TextButton>
         </ButtonGroup>
      </>
   ))
   .add('Icon Button', () => (
      <>
         <ButtonGroup align='left'>
            <IconButton type='solid' size='sm'>
               <PlusIcon color='#fff' />
            </IconButton>
            <IconButton type='solid' size='md'>
               <PlusIcon color='#fff' />
            </IconButton>
            <IconButton type='solid'>
               <PlusIcon color='#fff' />
            </IconButton>
            <IconButton type='solid' hasAccess={false}>
               <PlusIcon color='#fff' />
            </IconButton>
            <IconButton type='solid' disabled>
               <PlusIcon color='#fff' />
            </IconButton>
            <IconButton isLoading={true} type='solid'>
               <PlusIcon color='#fff' />
            </IconButton>
         </ButtonGroup>
         <br />
         <ButtonGroup align='left'>
            <IconButton type='solid' variant='secondary' size='sm'>
               <PlusIcon color='#367BF5' />
            </IconButton>
            <IconButton type='solid' variant='secondary'>
               <PlusIcon color='#367BF5' />
            </IconButton>
            <IconButton type='solid' variant='secondary' hasAccess={false}>
               <PlusIcon color='#367BF5' />
            </IconButton>
            <IconButton type='solid' variant='secondary' disabled>
               <PlusIcon color='#367BF5' />
            </IconButton>
            <IconButton isLoading={true} type='solid' variant='secondary'>
               <PlusIcon color='#367BF5' />
            </IconButton>
         </ButtonGroup>
         <br />
         <ButtonGroup align='left'>
            <IconButton type='outline' size='sm'>
               <SearchIcon color='#367BF5' />
            </IconButton>
            <IconButton type='outline'>
               <SearchIcon color='#367BF5' />
            </IconButton>
            <IconButton type='outline' hasAccess={false}>
               <SearchIcon color='#367BF5' />
            </IconButton>
            <IconButton type='outline' disabled>
               <SearchIcon color='#367BF5' />
            </IconButton>
            <IconButton isLoading={true} type='outline'>
               <PlusIcon color='#367BF5' />
            </IconButton>
         </ButtonGroup>
         <br />
         <ButtonGroup align='left'>
            <IconButton type='ghost' size='sm'>
               <SearchIcon color='#367BF5' />
            </IconButton>
            <IconButton type='ghost'>
               <SearchIcon color='#367BF5' />
            </IconButton>
            <IconButton type='ghost' hasAccess={false}>
               <SearchIcon color='#367BF5' />
            </IconButton>
            <IconButton type='ghost' disabled>
               <SearchIcon color='#367BF5' />
            </IconButton>
            <IconButton isLoading={true} type='ghost'>
               <PlusIcon color='#367BF5' />
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
            <ComboButton type='solid' size='md'>
               <SearchIcon color='#fff' /> Search
            </ComboButton>
            <ComboButton type='solid'>
               <SearchIcon color='#fff' /> Search
            </ComboButton>
            <ComboButton type='solid' hasAccess={false}>
               <SearchIcon color='#fff' /> Search
            </ComboButton>
            <ComboButton type='solid' disabled>
               <SearchIcon color='#fff' /> Search
            </ComboButton>
            <ComboButton isLoading={true} type='solid'>
               <SearchIcon color='#fff' /> Search
            </ComboButton>
         </ButtonGroup>
         <br />
         <ButtonGroup align='left'>
            <ComboButton type='outline' size='sm'>
               Add Ingredient
               <PlusIcon color='#367BF5' />
            </ComboButton>
            <ComboButton type='outline'>
               Add Ingredient
               <PlusIcon color='#367BF5' />
            </ComboButton>
            <ComboButton type='outline' hasAccess={false}>
               Add Ingredient
               <PlusIcon color='#367BF5' />
            </ComboButton>
            <ComboButton type='outline' disabled>
               Add Ingredient
               <PlusIcon color='#367BF5' />
            </ComboButton>
            <ComboButton isLoading={true} type='outline'>
               <SearchIcon color='#fff' /> Search
            </ComboButton>
         </ButtonGroup>
         <br />
         <ButtonGroup align='left'>
            <ComboButton type='ghost' size='sm'>
               <ClearIcon color='#367BF5' />
               Clear Filters
            </ComboButton>
            <ComboButton type='ghost'>
               <ClearIcon color='#367BF5' />
               Clear Filters
            </ComboButton>
            <ComboButton type='ghost' hasAccess={false}>
               <ClearIcon color='#367BF5' />
               Clear Filters
            </ComboButton>
            <ComboButton type='ghost' disabled>
               <ClearIcon color='#367BF5' />
               Clear Filters
            </ComboButton>
            <ComboButton isLoading={true} type='ghost'>
               <SearchIcon color='#fff' /> Search
            </ComboButton>
         </ButtonGroup>
      </>
   ))
   .add('Dropdown Button', () => {
      const options = [
         {
            id: 1,
            title: 'Option1',
            handleOnClick: () => {
               console.log('option1')
            }
         },
         {
            id: 2,
            title: 'Option2',
            handleOnClick: () => {
               console.log('option2')
            }
         },
         {
            id: 3,
            title: 'Option3',
            handleOnClick: () => {
               console.log('option3')
            }
         },
         {
            id: 4,
            title: 'Option4',
            handleOnClick: () => {
               console.log('option4')
            }
         },
         {
            id: 5,
            title: 'Option5',
            handleOnClick: () => {
               console.log('option5')
            }
         },
         {
            id: 6,
            title: 'Option6',
            handleOnClick: () => {
               console.log('option6')
            }
         }
      ]
      return (
         <>
            <DropdownButton options={options} type='solid' size='sm'>
               Dropdown Button
            </DropdownButton>
         </>
      )
   })
