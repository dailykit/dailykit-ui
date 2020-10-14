import React from 'react'
import { storiesOf } from '@storybook/react'

import { Form, useField, Spacer, Text } from '@dailykit/ui'

const validateUsername = value => {
   const text = value.trim()
   let isValid = true
   let errors = []
   if (text.length < 3) {
      isValid = false
      errors = [...errors, 'Must have atleast two letters.']
   }
   const hasNumerics = new RegExp(/.*[0-9].*/g)
   if (hasNumerics.test(text)) {
      isValid = false
      errors = [...errors, 'Username must not contain numerics.']
   }
   return { isValid, errors }
}

storiesOf('Form v2', module)
   .add('Text', () => {
      const [state, dispatch] = React.useReducer(reducers, initialState)

      const onChange = e =>
         dispatch({
            type: 'SET_FIELD',
            payload: { field: 'username', value: e.target.value }
         })

      const onBlur = e => {
         dispatch({
            type: 'SET_ERRORS',
            payload: {
               field: 'username',
               value: {
                  isTouched: true,
                  errors: validateUsername(e.target.value).errors,
                  isValid: validateUsername(e.target.value).isValid
               }
            }
         })
      }

      return (
         <>
            <Text as='h3'>With Full Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='username' title='username'>
                  Username*
               </Form.Label>
               <Form.Text
                  id='username'
                  name='username'
                  onBlur={onBlur}
                  onChange={onChange}
                  value={state.username.value}
                  placeholder='Enter the username'
                  hasError={
                     state.username.meta.isTouched &&
                     !state.username.meta.isValid
                  }
               />
               {state.username.meta.isTouched &&
                  !state.username.meta.isValid &&
                  state.username.meta.errors.map((error, index) => (
                     <Form.Error key={index}>{error}</Form.Error>
                  ))}
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With Read Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='username' title='username'>
                  Username*
               </Form.Label>
               <Form.Text
                  id='username'
                  name='username'
                  onBlur={onBlur}
                  onChange={onChange}
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  value={state.username.value}
                  placeholder='Enter the username'
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With No Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='username' title='username'>
                  Username*
               </Form.Label>
               <Form.Text
                  id='username'
                  name='username'
                  onBlur={onBlur}
                  onChange={onChange}
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  value={state.username.value}
                  placeholder='Enter the username'
               />
            </Form.Group>
         </>
      )
   })
   .add('Password', () => {
      const [state, dispatch] = React.useReducer(reducers, initialState)

      const onChange = e =>
         dispatch({
            type: 'SET_FIELD',
            payload: { field: 'password', value: e.target.value }
         })

      return (
         <>
            <Text as='h3'>With Full Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='password' title='password'>
                  Password*
               </Form.Label>
               <Form.Password
                  id='password'
                  name='password'
                  onChange={onChange}
                  value={state.password.value}
                  placeholder='Enter the password'
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With Read Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='password' title='password'>
                  Password*
               </Form.Label>
               <Form.Password
                  id='password'
                  name='password'
                  onChange={onChange}
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  value={state.password.value}
                  placeholder='Enter the password'
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With No Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='password' title='password'>
                  Password*
               </Form.Label>
               <Form.Password
                  id='password'
                  name='password'
                  onChange={onChange}
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  value={state.password.value}
                  placeholder='Enter the password'
               />
            </Form.Group>
         </>
      )
   })
   .add('Number', () => {
      const [state, dispatch] = React.useReducer(reducers, initialState)

      const onChange = e =>
         dispatch({
            type: 'SET_FIELD',
            payload: { field: 'age', value: parseFloat(e.target.value) }
         })

      return (
         <>
            <Text as='h3'>With Full Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='age' title='age'>
                  Age*
               </Form.Label>
               <Form.Number
                  id='age'
                  name='age'
                  onChange={onChange}
                  value={state.age.value}
                  placeholder='Enter your age'
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With Read Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='age' title='age'>
                  Age*
               </Form.Label>
               <Form.Number
                  id='age'
                  name='age'
                  onChange={onChange}
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  value={state.age.value}
                  placeholder='Enter your age'
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With No Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='age' title='age'>
                  Age*
               </Form.Label>
               <Form.Number
                  id='age'
                  name='age'
                  onChange={onChange}
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  value={state.age.value}
                  placeholder='Enter your age'
               />
            </Form.Group>
         </>
      )
   })
   .add('Range', () => {
      const [state, dispatch] = React.useReducer(reducers, initialState)

      const onChange = (e, field) =>
         dispatch({
            type: 'SET_FIELD',
            payload: { field, value: parseFloat(e.target.value) }
         })

      return (
         <Form.Group>
            <Form.Label htmlFor='age' title='age'>
               Experience(in years)*
            </Form.Label>
            <Form.Range>
               <Form.Number
                  id='min'
                  name='min'
                  placeholder='Enter your min'
                  value={state.experience_min.value}
                  onChange={e => onChange(e, 'experience_min')}
               />
               <Form.Number
                  id='max'
                  name='max'
                  placeholder='Enter your max'
                  value={state.experience_max.value}
                  onChange={e => onChange(e, 'experience_max')}
               />
            </Form.Range>
         </Form.Group>
      )
   })
   .add('Toggle', () => {
      const [state, dispatch] = React.useReducer(reducers, initialState)

      const onChange = () =>
         dispatch({
            type: 'SET_FIELD',
            payload: { field: 'first_time', value: !state.first_time.value }
         })

      return (
         <Form.Group>
            <Form.Toggle
               name='first_time'
               onChange={onChange}
               value={state.first_time.value}
            >
               First time participant?
            </Form.Toggle>
         </Form.Group>
      )
   })
   .add('Stepper', () => {
      const [state, dispatch] = React.useReducer(reducers, initialState)

      const onChange = value =>
         dispatch({
            type: 'SET_FIELD',
            payload: { field: 'containers', value: parseFloat(value) }
         })

      return (
         <>
            <Text as='h3'>With Full Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='username' title='username'>
                  Containers
               </Form.Label>
               <Form.Stepper
                  id='containers'
                  name='containers'
                  value={state.containers.value}
                  placeholder='Enter the containers'
                  onChange={value => onChange(value)}
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With Read Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='username' title='username'>
                  Containers
               </Form.Label>
               <Form.Stepper
                  id='containers'
                  name='containers'
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  value={state.containers.value}
                  placeholder='Enter the containers'
                  onChange={value => onChange(value)}
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With Read Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='username' title='username'>
                  Containers
               </Form.Label>
               <Form.Stepper
                  id='containers'
                  name='containers'
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  value={state.containers.value}
                  placeholder='Enter the containers'
                  onChange={value => onChange(value)}
               />
            </Form.Group>
         </>
      )
   })
   .add('Checkbox', () => {
      const [state, dispatch] = React.useReducer(reducers, initialState)

      const onChange = field =>
         dispatch({
            type: 'SET_FIELD',
            payload: { field, value: !state[field].value }
         })

      return (
         <Form.Group>
            <Form.Checkbox
               name='t&c'
               value={state.t_and_c.value}
               onChange={() => onChange('t_and_c')}
            >
               I agree to terms and conditions.
            </Form.Checkbox>
            <Spacer size='14px' />
            <Form.Checkbox
               name='subscribe'
               value={state.subscribe.value}
               onChange={() => onChange('subscribe')}
            >
               Send me updates on new articles, videos, products, releases etc.
            </Form.Checkbox>
         </Form.Group>
      )
   })
   .add('Date', () => {
      const [state, dispatch] = React.useReducer(reducers, initialState)

      const onChange = e =>
         dispatch({
            type: 'SET_FIELD',
            payload: { field: 'date', value: e.target.value }
         })

      return (
         <>
            <Text as='h3'>With Full Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='about' title='about'>
                  DOB
               </Form.Label>
               <Form.Date
                  id='date'
                  name='date'
                  onChange={onChange}
                  value={state.date.value}
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With Read Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='about' title='about'>
                  DOB
               </Form.Label>
               <Form.Date
                  id='date'
                  name='date'
                  onChange={onChange}
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  value={state.date.value}
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With No Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='about' title='about'>
                  DOB
               </Form.Label>
               <Form.Date
                  id='date'
                  name='date'
                  onChange={onChange}
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  value={state.date.value}
               />
            </Form.Group>
         </>
      )
   })
   .add('Time', () => {
      const [state, dispatch] = React.useReducer(reducers, initialState)

      const onChange = e =>
         dispatch({
            type: 'SET_FIELD',
            payload: { field: 'time', value: e.target.value }
         })

      return (
         <>
            <Text as='h3'>With Full Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='about' title='about'>
                  Time
               </Form.Label>
               <Form.Time
                  id='time'
                  name='time'
                  onChange={onChange}
                  value={state.time.value}
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With Read Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='about' title='about'>
                  Time
               </Form.Label>
               <Form.Time
                  id='time'
                  name='time'
                  onChange={onChange}
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  value={state.time.value}
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With No Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='about' title='about'>
                  Time
               </Form.Label>
               <Form.Time
                  id='time'
                  name='time'
                  onChange={onChange}
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  value={state.time.value}
               />
            </Form.Group>
         </>
      )
   })
   .add('Select', () => {
      const [state, dispatch] = React.useReducer(reducers, initialState)

      const onChange = e =>
         dispatch({
            type: 'SET_FIELD',
            payload: { field: 'nationality', value: e.target.value }
         })

      const [options] = React.useState([
         { id: 1, title: 'Indian' },
         { id: 2, title: 'American' },
         { id: 3, title: 'Australian' }
      ])

      return (
         <>
            <Text as='h3'>With Full Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='nationality' title='nationality'>
                  Nationality
               </Form.Label>
               <Form.Select
                  id='nationality'
                  name='nationality'
                  options={options}
                  onChange={onChange}
                  value={state.nationality.value}
                  placeholder='Choose your nationality'
                  defaultValue={state.nationality.value}
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With Read Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='nationality' title='nationality'>
                  Nationality
               </Form.Label>
               <Form.Select
                  id='nationality'
                  name='nationality'
                  options={options}
                  onChange={onChange}
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  value={state.nationality.value}
                  placeholder='Choose your nationality'
                  defaultValue={state.nationality.value}
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With No Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='nationality' title='nationality'>
                  Nationality
               </Form.Label>
               <Form.Select
                  id='nationality'
                  name='nationality'
                  options={options}
                  onChange={onChange}
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  value={state.nationality.value}
                  placeholder='Choose your nationality'
                  defaultValue={state.nationality.value}
               />
            </Form.Group>
         </>
      )
   })
   .add('Text Area', () => {
      const [state, dispatch] = React.useReducer(reducers, initialState)

      const onChange = e =>
         dispatch({
            type: 'SET_FIELD',
            payload: { field: 'about', value: e.target.value }
         })

      return (
         <>
            <Text as='h3'>With Full Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='about' title='about'>
                  About
               </Form.Label>
               <Form.TextArea
                  id='about'
                  name='about'
                  onChange={onChange}
                  value={state.about.value}
                  placeholder='Write about yourself'
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With Read Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='about' title='about'>
                  About
               </Form.Label>
               <Form.TextArea
                  id='about'
                  name='about'
                  onChange={onChange}
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  value={state.about.value}
                  placeholder='Write about yourself'
               />
            </Form.Group>
            <Spacer size='24px' />
            <Text as='h3'>With No Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='about' title='about'>
                  About
               </Form.Label>
               <Form.TextArea
                  id='about'
                  name='about'
                  onChange={onChange}
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  value={state.about.value}
                  placeholder='Write about yourself'
               />
            </Form.Group>
         </>
      )
   })
   .add('Text w/ Select', () => {
      const [state, dispatch] = React.useReducer(reducers, initialState)

      const onChange = (e, field) =>
         dispatch({
            type: 'SET_FIELD',
            payload: {
               field,
               value:
                  field === 'weight'
                     ? parseFloat(e.target.value)
                     : e.target.value
            }
         })

      const [options] = React.useState([
         { id: 1, title: 'gm' },
         { id: 2, title: 'kg' },
         { id: 3, title: 'mm' }
      ])

      return (
         <Form.Group>
            <Form.Label htmlFor='weight' title='weight'>
               Weight*
            </Form.Label>
            <Form.TextSelect>
               <Form.Number
                  id='weight'
                  name='weight'
                  value={state.weight.value}
                  placeholder='Enter your weight'
                  onChange={e => onChange(e, 'weight')}
               />
               <Form.Select
                  id='unit'
                  name='unit'
                  options={options}
                  value={state.unit.value}
                  placeholder='Choose your unit'
                  defaultValue={state.unit.value}
                  onChange={e => onChange(e, 'unit')}
               />
            </Form.TextSelect>
         </Form.Group>
      )
   })

const initialState = {
   username: {
      value: '',
      meta: {
         errors: [],
         isValid: false,
         isTouched: false
      }
   },
   password: {
      value: ''
   },
   age: {
      value: 0
   },
   experience_min: {
      value: 0
   },
   experience_max: {
      value: 0
   },
   first_time: {
      value: true
   },
   containers: {
      value: ''
   },
   t_and_c: {
      value: false
   },
   subscribe: {
      value: true
   },
   dob: {
      value: ''
   },
   date: {
      value: ''
   },
   time: {
      value: ''
   },
   nationality: {
      value: 'American'
   },
   about: {
      value: ''
   },
   weight: {
      value: ''
   },
   unit: {
      value: 'kg'
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
      case 'SET_ERRORS':
         return {
            ...state,
            [payload.field]: {
               ...state[payload.field],
               meta: payload.value
            }
         }
      default:
         return state
   }
}
