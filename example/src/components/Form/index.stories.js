import React from 'react'

import {
   Input,
   RadioGroup,
   HelperText,
   SearchBox,
   Text,
   Number,
   Spacer
} from '@dailykit/ui'

export default {
   title: 'Form'
}

const initialState = {
   username: {
      value: '',
      error: ''
   },
   age: {
      value: '',
      error: ''
   },
   password: {
      value: '',
      error: ''
   },
   textarea: {
      value: '',
      error: ''
   }
}

const reducers = (state, { type, payload }) => {
   switch (type) {
      case 'SET_FIELD':
         return {
            ...state,
            [payload.field]: {
               ...state[payload.field],
               value: payload.value
            }
         }
      case 'SET_FIELD_ERROR':
         return {
            ...state,
            [payload.field]: {
               ...state[payload.field],
               error: payload
            }
         }
      case 'CLEAR_FIELD_ERROR':
         return {
            ...state,
            [payload.field]: {
               ...state[payload.field],
               error: ''
            }
         }
      default:
         return state
   }
}

export const Textual = () => {
   const [state, dispatch] = React.useReducer(reducers, initialState)

   const handleChange = (name, value) => {
      dispatch({ type: 'SET_FIELD', payload: { field: name, value } })
   }
   return (
      <div>
         <Text as='title'>With Full Access</Text>
         <Spacer size='8px' />
         <Input
            type='text'
            label='Username'
            name='username'
            hasReadAccess={true}
            hasWriteAccess={true}
            value={state.username.value}
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
         <HelperText type='hint' message='Fill in your username here' />
         <br />
         <Text as='title'>With Read Access</Text>
         <Spacer size='8px' />
         <Input
            type='text'
            label='Username'
            name='username'
            hasReadAccess={true}
            hasWriteAccess={false}
            fallBackMessage='You shall not pass!'
            value={state.username.value}
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
         <br />
         <Text as='title'>With No Access</Text>
         <Spacer size='8px' />
         <Input
            type='text'
            label='Username'
            name='username'
            hasReadAccess={false}
            hasWriteAccess={false}
            fallBackMessage='You shall not pass!'
            value={state.username.value}
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
      </div>
   )
}

export const Numeric = () => {
   const [state, dispatch] = React.useReducer(reducers, initialState)

   const handleChange = (name, value) => {
      dispatch({ type: 'SET_FIELD', payload: { field: name, value } })
   }
   return (
      <div>
         <Text as='title'>With Full Access</Text>
         <Input
            type='number'
            label='Age'
            name='age'
            hasReadAccess={true}
            hasWriteAccess={true}
            value={state.age.value}
            fallBackMessage='You shall not pass!'
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
         <HelperText type='hint' message='Fill in your age here' />
         <br />
         <Text as='title'>With Read Access</Text>
         <Spacer size='8px' />
         <Input
            type='number'
            label='Age'
            name='age'
            hasReadAccess={true}
            hasWriteAccess={false}
            value={state.age.value}
            fallBackMessage='You shall not pass!'
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
         <br />
         <Text as='title'>With No Access</Text>
         <Spacer size='8px' />
         <Input
            type='number'
            label='Age'
            name='age'
            hasReadAccess={false}
            hasWriteAccess={false}
            value={state.age.value}
            fallBackMessage='You shall not pass!'
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
      </div>
   )
}

export const Password = () => {
   const [state, dispatch] = React.useReducer(reducers, initialState)

   const handleChange = (name, value) => {
      dispatch({ type: 'SET_FIELD', payload: { field: name, value } })
   }
   return (
      <>
         <Text as='title'>With Full Access</Text>
         <Input
            type='password'
            label='Password'
            name='password'
            hasReadAccess={true}
            hasWriteAccess={true}
            value={state.password.value}
            fallBackMessage='You shall not pass!'
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
         <br />
         <Text as='title'>With Read Access</Text>
         <Spacer size='8px' />
         <Input
            type='password'
            label='Password'
            name='password'
            hasReadAccess={true}
            hasWriteAccess={false}
            value={state.password.value}
            fallBackMessage='You shall not pass!'
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
         <br />
         <Text as='title'>With No Access</Text>
         <Spacer size='8px' />
         <Input
            type='password'
            label='Password'
            name='password'
            hasReadAccess={false}
            hasWriteAccess={false}
            value={state.password.value}
            fallBackMessage='You shall not pass!'
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
      </>
   )
}

export const TextArea = () => {
   const [state, dispatch] = React.useReducer(reducers, initialState)

   const handleChange = (name, value) => {
      dispatch({ type: 'SET_FIELD', payload: { field: name, value } })
   }
   return (
      <>
         <Text as='title'>With Full Access</Text>
         <Spacer size='8px' />
         <Input
            type='textarea'
            label='Text Area'
            name='textarea'
            rows='5'
            value={state.textarea.value}
            hasReadAccess={true}
            hasWriteAccess={true}
            fallBackMessage='You shall not pass!'
            value={state.textarea.value}
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
         <br />
         <Text as='title'>With Read Access</Text>
         <Spacer size='8px' />
         <Input
            type='textarea'
            label='Text Area'
            name='textarea'
            rows='5'
            hasReadAccess={true}
            hasWriteAccess={false}
            fallBackMessage='You shall not pass!'
            value={state.textarea.value}
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
         <br />
         <Text as='title'>With No Access</Text>
         <Spacer size='8px' />
         <Input
            type='textarea'
            label='Text Area'
            name='textarea'
            rows='5'
            hasReadAccess={false}
            hasWriteAccess={false}
            fallBackMessage='You shall not pass!'
            value={state.textarea.value}
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
      </>
   )
}

export const RadioButtons = () => {
   const [options] = React.useState([
      { id: 1, title: 'Option 1' },
      { id: 2, title: 'Option 2' },
      { id: 3, title: 'Option 3' }
   ])

   return (
      <RadioGroup
         options={options}
         active={2}
         onChange={option => console.log(option)}
      />
   )
}

export const SearchBoxField = () => {
   const [search, setSearch] = React.useState('')

   return (
      <>
         <Text as='title'>With Full Access</Text>
         <SearchBox
            placeholder='Search'
            value={search}
            hasReadAccess={true}
            hasWriteAccess={true}
            fallBackMessage='You shall not pass!'
            onChange={e => setSearch(e.target.value)}
         />
         <br />
         <Text as='title'>With Read Access</Text>
         <Spacer size='8px' />
         <SearchBox
            placeholder='Search'
            value={search}
            hasReadAccess={true}
            hasWriteAccess={false}
            fallBackMessage='You shall not pass!'
            onChange={e => setSearch(e.target.value)}
         />
         <br />
         <Text as='title'>With No Access</Text>
         <Spacer size='8px' />
         <SearchBox
            placeholder='Search'
            value={search}
            hasReadAccess={false}
            hasWriteAccess={false}
            fallBackMessage='You shall not pass!'
            onChange={e => setSearch(e.target.value)}
         />
      </>
   )
}
