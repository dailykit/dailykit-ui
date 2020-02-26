import React from 'react'

import { Input, RadioGroup, TextAndSelect, HelperText } from '@dailykit/ui'

export default {
   title: 'Form'
}

const initialState = {
   username: {
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

export const Text = () => {
   const [state, dispatch] = React.useReducer(reducers, initialState)

   const handleChange = (name, value) => {
      dispatch({ type: 'SET_FIELD', payload: { field: name, value } })
   }
   return (
      <div>
         <Input
            type='text'
            label='Username'
            name='username'
            value={state.username.value}
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
         <HelperText type='hint' message='Fill in your username here' />
      </div>
   )
}

export const Password = () => {
   const [state, dispatch] = React.useReducer(reducers, initialState)

   const handleChange = (name, value) => {
      dispatch({ type: 'SET_FIELD', payload: { field: name, value } })
   }
   return (
      <Input
         type='password'
         label='Password'
         name='password'
         value={state.password.value}
         onChange={e => handleChange(e.target.name, e.target.value)}
      />
   )
}

export const TextArea = () => {
   const [state, dispatch] = React.useReducer(reducers, initialState)

   const handleChange = (name, value) => {
      dispatch({ type: 'SET_FIELD', payload: { field: name, value } })
   }
   return (
      <Input
         type='textarea'
         label='Text Area'
         name='textarea'
         rows='5'
         value={state.textarea.value}
         onChange={e => handleChange(e.target.name, e.target.value)}
      />
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

export const TextAndSelectField = () => {
   const [options] = React.useState([
      { id: 1, title: 'gms' },
      { id: 2, title: 'kgs' },
      { id: 3, title: 'lbs' }
   ])

   return (
      <div>
         <TextAndSelect
            value=''
            name='quantity'
            label='Quantity'
            options={options}
            onChange={val => console.log(val)}
         />
         <HelperText type='error' message='Entered text must be a number' />
      </div>
   )
}
