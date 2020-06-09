import React from 'react'

import { Field } from '../styles'

const Number = ({ label, name, ...props }) => (
   <Field hasValue={props.value}>
      <input id={name} name={name} {...props} />
      <label htmlFor={name}>{label}</label>
   </Field>
)

export default Number
