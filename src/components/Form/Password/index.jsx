import React from 'react'

import { Field } from '../styles'

const Password = ({ label, name, ...props }) => (
   <Field hasValue={props.value}>
      <input type='password' id={name} name={name} {...props} />
      <label htmlFor={name}>{label}</label>
   </Field>
)

export default Password
