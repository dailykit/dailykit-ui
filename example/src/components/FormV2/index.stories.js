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
      const { meta, inputProps } = useField('', {
         validator: validateUsername,
         invokeOnBlur: e => console.log(e.target.value, "I'm out!")
      })

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
                  placeholder='Enter the username'
                  hasError={meta.isTouched && !meta.isValid}
                  {...inputProps}
               />
               {meta.isTouched &&
                  !meta.isValid &&
                  meta.errors.map((error, index) => (
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
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  placeholder='Enter the username'
                  {...inputProps}
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
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  placeholder='Enter the username'
                  {...inputProps}
               />
            </Form.Group>
         </>
      )
   })
   .add('Password', () => {
      const { inputProps } = useField('')

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
                  placeholder='Enter the password'
                  {...inputProps}
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
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  placeholder='Enter the password'
                  {...inputProps}
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
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  placeholder='Enter the password'
                  {...inputProps}
               />
            </Form.Group>
         </>
      )
   })
   .add('Number', () => {
      const { inputProps } = useField('', { type: 'number' })

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
                  placeholder='Enter your age'
                  {...inputProps}
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
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  placeholder='Enter your age'
                  {...inputProps}
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
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  placeholder='Enter your age'
                  {...inputProps}
               />
            </Form.Group>
         </>
      )
   })
   .add('Range', () => {
      const { inputProps: minInputProps } = useField('', { type: 'number' })
      const { inputProps: maxInputProps } = useField('', { type: 'number' })

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
                  {...minInputProps}
               />
               <Form.Number
                  id='max'
                  name='max'
                  placeholder='Enter your max'
                  {...maxInputProps}
               />
            </Form.Range>
         </Form.Group>
      )
   })
   .add('Toggle', () => {
      const { inputProps } = useField(false, { type: 'boolean' })

      return (
         <Form.Group>
            <Form.Toggle {...inputProps}>First time participant?</Form.Toggle>
         </Form.Group>
      )
   })
   .add('Stepper', () => {
      const [containers, setContainers] = React.useState(0)

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
                  value={containers}
                  placeholder='Enter the containers'
                  onChange={value => setContainers(parseFloat(value))}
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
                  value={containers}
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  placeholder='Enter the containers'
                  onChange={value => setContainers(parseFloat(value))}
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
                  value={containers}
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  placeholder='Enter the containers'
                  onChange={value => setContainers(parseFloat(value))}
               />
            </Form.Group>
         </>
      )
   })
   .add('Checkbox', () => {
      const { inputProps: termsInputProps } = useField(false, {
         type: 'boolean'
      })
      const { inputProps: subscribeInputProps } = useField(false, {
         type: 'boolean'
      })

      return (
         <Form.Group>
            <Form.Checkbox {...termsInputProps}>
               I agree to terms and conditions.
            </Form.Checkbox>
            <Spacer size='14px' />
            <Form.Checkbox {...subscribeInputProps}>
               Send me updates on new articles, videos, products, releases etc.
            </Form.Checkbox>
         </Form.Group>
      )
   })
   .add('Date', () => {
      const { inputProps } = useField('')

      return (
         <>
            <Text as='h3'>With Full Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='about' title='about'>
                  DOB
               </Form.Label>
               <Form.Date id='date' name='date' {...inputProps} />
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
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  {...inputProps}
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
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  {...inputProps}
               />
            </Form.Group>
         </>
      )
   })
   .add('Time', () => {
      const { inputProps } = useField('')

      return (
         <>
            <Text as='h3'>With Full Access</Text>
            <Spacer size='16px' />
            <Form.Group>
               <Form.Label htmlFor='about' title='about'>
                  Time
               </Form.Label>
               <Form.Time id='time' name='time' {...inputProps} />
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
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  {...inputProps}
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
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  {...inputProps}
               />
            </Form.Group>
         </>
      )
   })
   .add('Select', () => {
      const { inputProps } = useField('Indian')
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
                  placeholder='Choose your nationality'
                  {...inputProps}
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
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  placeholder='Choose your nationality'
                  {...inputProps}
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
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  placeholder='Choose your nationality'
                  {...inputProps}
               />
            </Form.Group>
         </>
      )
   })
   .add('Text Area', () => {
      const { inputProps } = useField('')

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
                  placeholder='Write about yourself'
                  {...inputProps}
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
                  hasReadAccess={true}
                  hasWriteAccess={false}
                  placeholder='Write about yourself'
                  {...inputProps}
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
                  hasReadAccess={false}
                  hasWriteAccess={false}
                  placeholder='Write about yourself'
                  {...inputProps}
               />
            </Form.Group>
         </>
      )
   })
   .add('Text w/ Select', () => {
      const { inputProps: weightProps } = useField('', { type: 'number' })
      const { inputProps: selectProps } = useField('gm')
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
                  placeholder='Enter your weight'
                  {...weightProps}
               />
               <Form.Select
                  id='unit'
                  name='unit'
                  options={options}
                  placeholder='Choose your unit'
                  {...selectProps}
               />
            </Form.TextSelect>
         </Form.Group>
      )
   })
