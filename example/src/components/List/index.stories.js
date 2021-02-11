import React from 'react'
import { storiesOf } from '@storybook/react'

import {
   ListHeader,
   ListItem,
   List,
   ListOptions,
   ListSearch,
   TextButton,
   TagGroup,
   Tag
} from '@dailykit/ui'
import { useSingleList, useMultiList } from '@dailykit/ui'

storiesOf('List', module)
   .add('SSL1', () => {
      // State for search input
      const [search, setSearch] = React.useState('')
      const options = React.useMemo(
         () => [
            { id: 1, title: 'Potato' },
            { id: 2, title: 'Tomato' },
            { id: 3, title: 'Onion' },
            { id: 4, title: 'Ginger' }
         ],
         []
      )

      const [list, current, selectOption] = useSingleList(options)

      return (
         <List>
            {Object.keys(current).length > 0 ? (
               <ListItem type='SSL1' title={current.title} />
            ) : (
               <ListSearch
                  onChange={value => setSearch(value)}
                  placeholder='type what you’re looking for...'
               />
            )}
            <ListHeader type='SSL1' label='Ingredient' />
            <ListOptions
               search={search}
               handleOnCreate={() => console.log(`Created ${search}`)}
            >
               {list
                  .filter(option => option.title.toLowerCase().includes(search))
                  .map(option => (
                     <ListItem
                        type='SSL1'
                        key={option.id}
                        title={option.title}
                        isActive={option.id === current.id}
                        onClick={() => selectOption('id', option.id)}
                     />
                  ))}
            </ListOptions>
         </List>
      )
   })
   .add('SSL2', () => {
      // State for search input
      const [search, setSearch] = React.useState('')
      const options = React.useMemo(
         () => [
            {
               id: 1,
               title: 'Ingredient',
               description: 'An app for managing ingredients'
            },
            {
               id: 2,
               title: 'Recipe',
               description: 'An app for managing recipes'
            },
            {
               id: 3,
               title: 'Inventory',
               description: 'An app for managing inventory'
            },
            {
               id: 4,
               title: 'Dishes',
               description: 'An app for managing Dishes'
            }
         ],
         []
      )

      const [list, current, selectOption] = useSingleList(options)
      return (
         <List>
            {Object.keys(current).length > 0 ? (
               <ListItem
                  type='SSL2'
                  content={{
                     title: current.title,
                     description: current.description
                  }}
               />
            ) : (
               <ListSearch
                  onChange={value => setSearch(value)}
                  placeholder='type what you’re looking for...'
               />
            )}
            <ListHeader type='SSL2' label='Apps' />
            <ListOptions>
               {list
                  .filter(option => option.title.toLowerCase().includes(search))
                  .map(option => (
                     <ListItem
                        type='SSL2'
                        key={option.id}
                        isActive={option.id === current.id}
                        onClick={() => selectOption('id', option.id)}
                        content={{
                           title: option.title,
                           description: option.description
                        }}
                     />
                  ))}
            </ListOptions>
         </List>
      )
   })
   .add('SSL22', () => {
      // State for search input
      const [search, setSearch] = React.useState('')
      const options = React.useMemo(
         () => [
            {
               id: 1,
               supplier: { title: 'Swiggy', img: '' },
               contact: { title: 'Ajay Singh', img: '' }
            },
            {
               id: 2,
               supplier: { title: 'Zomato', img: '' },
               contact: { title: 'Praveen Bisht', img: '' }
            },
            {
               id: 3,
               supplier: { title: 'Food Panda', img: '' },
               contact: { title: 'Sanjay Sharma', img: '' }
            },
            {
               id: 4,
               supplier: { title: 'Uber Eats', img: '' },
               contact: { title: 'Arjun Negi', img: '' }
            }
         ],
         []
      )

      const [list, current, selectOption] = useSingleList(options)
      return (
         <List>
            {Object.keys(current).length > 0 ? (
               <ListItem
                  type='SSL22'
                  content={{
                     supplier: current.supplier,
                     contact: current.contact
                  }}
               />
            ) : (
               <ListSearch
                  onChange={value => setSearch(value)}
                  placeholder='type what you’re looking for...'
               />
            )}
            <ListHeader
               type='SSL22'
               label={{ left: 'Contact', right: 'Supplier' }}
            />
            <ListOptions>
               {list
                  .filter(option =>
                     option.supplier.title.toLowerCase().includes(search)
                  )
                  .map(option => (
                     <ListItem
                        type='SSL22'
                        key={option.id}
                        isActive={option.id === current.id}
                        onClick={() => selectOption('id', option.id)}
                        content={{
                           supplier: option.supplier,
                           contact: option.contact
                        }}
                     />
                  ))}
            </ListOptions>
         </List>
      )
   })
   .add('MSL1', () => {
      // State for search input
      const [search, setSearch] = React.useState('')
      const options = React.useMemo(
         () => [
            { id: 1, title: 'Potato' },
            { id: 2, title: 'Tomato' },
            { id: 3, title: 'Ginger' },
            { id: 4, title: 'Onion' }
         ],
         []
      )

      const [list, selected, selectOption] = useMultiList(options)
      return (
         <List>
            <ListSearch
               onChange={value => setSearch(value)}
               placeholder='type what you’re looking for...'
            />
            {selected.length > 0 && (
               <TagGroup style={{ margin: '8px 0' }}>
                  {selected.map(option => (
                     <Tag
                        key={option.id}
                        title={option.title}
                        onClick={() => selectOption('id', option.id)}
                     >
                        {option.title}
                     </Tag>
                  ))}
               </TagGroup>
            )}
            <ListHeader type='MSL1' label='Ingredients' />
            <ListOptions
               search={search}
               handleOnCreate={() => console.log(`Created ${search}`)}
            >
               {list
                  .filter(option => option.title.toLowerCase().includes(search))
                  .map(option => (
                     <ListItem
                        type='MSL1'
                        key={option.id}
                        title={option.title}
                        onClick={() => selectOption('id', option.id)}
                        isActive={selected.find(item => item.id === option.id)}
                     />
                  ))}
            </ListOptions>
         </List>
      )
   })
   .add('MSL2', () => {
      // State for search input
      const [search, setSearch] = React.useState('')
      const options = React.useMemo(
         () => [
            {
               id: 1,
               title: 'Ingredient',
               description: 'An app for managing ingredients'
            },
            {
               id: 2,
               title: 'Recipe',
               description: 'An app for managing recipes'
            },
            {
               id: 3,
               title: 'Inventory',
               description: 'An app for managing inventory'
            },
            {
               id: 4,
               title: 'Dishes',
               description: 'An app for managing Dishes'
            }
         ],
         []
      )

      const [list, selected, selectOption] = useMultiList(options)
      return (
         <List>
            <ListSearch
               onChange={value => setSearch(value)}
               placeholder='type what you’re looking for...'
            />
            {selected.length > 0 && (
               <TagGroup style={{ margin: '8px 0' }}>
                  {selected.map(option => (
                     <Tag
                        key={option.id}
                        title={option.title}
                        onClick={() => selectOption('id', option.id)}
                     >
                        {option.title}
                     </Tag>
                  ))}
               </TagGroup>
            )}
            <ListHeader type='MSL2' label='Apps' />
            <ListOptions>
               {list
                  .filter(option => option.title.toLowerCase().includes(search))
                  .map(option => (
                     <ListItem
                        type='MSL2'
                        key={option.id}
                        content={{
                           title: option.title,
                           description: option.description
                        }}
                        onClick={() => selectOption('id', option.id)}
                        isActive={selected.find(item => item.id === option.id)}
                     />
                  ))}
            </ListOptions>
         </List>
      )
   })
   .add('MSL31', () => {
      // State for search input
      const [search, setSearch] = React.useState('')
      const options = React.useMemo(
         () => [
            {
               id: 1,
               img: '',
               title: 'Ketto Pizza',
               servings: [1, 2, 6, 8],
               cost: { amount: 1, currency: '$', unit: 'serving' }
            },
            {
               id: 2,
               img: '',
               title: 'Pasta',
               servings: [1, 2, 6],
               cost: { amount: 1.56, currency: '$', unit: 'serving' }
            },
            {
               id: 3,
               img: '',
               title: 'Chowmein',
               servings: [1, 2, 4],
               cost: { amount: 0.78, currency: '$', unit: 'serving' }
            }
         ],
         []
      )

      const [list, selected, selectOption] = useMultiList(options)
      return (
         <List>
            <ListSearch
               onChange={value => setSearch(value)}
               placeholder='type what you’re looking for...'
            />
            {selected.length > 0 && (
               <TagGroup style={{ margin: '8px 0' }}>
                  {selected.map(option => (
                     <Tag
                        key={option.id}
                        title={option.title}
                        onClick={() => selectOption('id', option.id)}
                     >
                        {option.title}
                     </Tag>
                  ))}
               </TagGroup>
            )}
            <ListHeader type='MSL31' label='Recipes' />
            <ListOptions>
               {list
                  .filter(option => option.title.toLowerCase().includes(search))
                  .map(option => (
                     <ListItem
                        type='MSL31'
                        content={{
                           img: option.img,
                           title: option.title,
                           servings: option.servings,
                           cost: option.cost
                        }}
                        onClick={() => selectOption('id', option.id)}
                        isActive={selected.find(item => item.id === option.id)}
                     />
                  ))}
            </ListOptions>
         </List>
      )
   })
   .add('MSL111', () => {
      // State for search input
      const [search, setSearch] = React.useState('')
      const options = React.useMemo(
         () => [
            {
               id: 1,
               img: '',
               title: 'Praveen Bisht',
               roles: ['Admin', 'Operator']
            },
            {
               id: 2,
               img: '',
               title: 'Arjun Singh',
               roles: ['Admin', 'Chef']
            },
            {
               id: 3,
               img: '',
               title: 'Ravi Sharma',
               roles: ['Admin']
            }
         ],
         []
      )

      const [list, selected, selectOption] = useMultiList(options)
      return (
         <List>
            <ListSearch
               onChange={value => setSearch(value)}
               placeholder='type what you’re looking for...'
            />
            {selected.length > 0 && (
               <TagGroup style={{ margin: '8px 0' }}>
                  {selected.map(option => (
                     <Tag
                        key={option.id}
                        title={option.title}
                        onClick={() => selectOption('id', option.id)}
                     >
                        {option.title}
                     </Tag>
                  ))}
               </TagGroup>
            )}
            <ListHeader
               type='MSL111'
               label={{ left: 'Name', right: 'Roles' }}
            />
            <ListOptions>
               {list
                  .filter(option => option.title.toLowerCase().includes(search))
                  .map(option => (
                     <ListItem
                        type='MSL111'
                        content={{
                           img: option.img,
                           title: option.title,
                           roles: option.roles
                        }}
                        onClick={() => selectOption('id', option.id)}
                        isActive={selected.find(item => item.id === option.id)}
                     />
                  ))}
            </ListOptions>
         </List>
      )
   })
   .add('MSL1101', () => {
      // State for search input
      const [search, setSearch] = React.useState('')
      const options = React.useMemo(
         () => [
            { id: 1, title: 'Ingredient App', icon: '' },
            { id: 2, title: 'Recipe App', icon: '' },
            { id: 3, title: 'Inventory App', icon: '' },
            { id: 4, title: 'Settings App', icon: '' }
         ],
         []
      )

      const [list, selected, selectOption] = useMultiList(options)
      return (
         <List>
            <ListSearch
               onChange={value => setSearch(value)}
               placeholder='type what you’re looking for...'
            />
            {selected.length > 0 && (
               <TagGroup style={{ margin: '8px 0' }}>
                  {selected.map(option => (
                     <Tag
                        key={option.id}
                        title={option.title}
                        onClick={() => selectOption('id', option.id)}
                     >
                        {option.title}
                     </Tag>
                  ))}
               </TagGroup>
            )}
            <ListHeader
               type='MSL1101'
               label={{ left: 'App', right: 'Action' }}
            />
            <ListOptions>
               {list
                  .filter(option => option.title.toLowerCase().includes(search))
                  .map(option => (
                     <ListItem
                        type='MSL1101'
                        content={{ icon: option.icon, title: option.title }}
                        onClick={() => selectOption('id', option.id)}
                        isActive={selected.find(item => item.id === option.id)}
                     >
                        <TextButton type='ghost'>CONFIGURE</TextButton>
                     </ListItem>
                  ))}
            </ListOptions>
         </List>
      )
   })
