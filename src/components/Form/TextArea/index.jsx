import React from 'react'

import { Field } from '../styles'

const TextArea = ({ label, name, ...props }) => (
   <Field hasValue={props.value}>
      <textarea type='textarea' id={name} name={name} {...props}>
         {props.value}
      </textarea>
      <label htmlFor={name}>{label}</label>
   </Field>
)

export default TextArea
