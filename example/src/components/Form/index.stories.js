import React from 'react'

import { Text, Password, TextArea } from '@dailykit/ui'

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

export const TextField = () => {
   const [state, dispatch] = React.useReducer(reducers, initialState)

   const handleChange = (name, value) => {
      dispatch({ type: 'SET_FIELD', payload: { field: name, value } })
   }
   return (
         <Text
            label='Username'
            name='username'
            value={state.username.value}
            hasError={state.username.error}
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
   )
}

export const PasswordField = () => {
   const [state, dispatch] = React.useReducer(reducers, initialState)

   const handleChange = (name, value) => {
      dispatch({ type: 'SET_FIELD', payload: { field: name, value } })
   }
   return (
         <Password
            label='Password'
            name='password'
            value={state.password.value}
            hasError={state.password.error}
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
   )
}

export const TextAreaField = () => {
   const [state, dispatch] = React.useReducer(reducers, initialState)

   const handleChange = (name, value) => {
      dispatch({ type: 'SET_FIELD', payload: { field: name, value } })
   }
   return (
         <TextArea
            label='Text Area'
            name='textarea'
            rows='5'
            value={state.textarea.value}
            hasError={state.textarea.error}
            onChange={e => handleChange(e.target.name, e.target.value)}
         />
   )
}
