import React from "react";

import { Field } from "../styles";

const TextArea = ({ label, name, hasError, ...props }) => (
  <Field hasValue={props.value}>
    <textarea type="textarea" id={name} name={name} {...props}>
      {props.value}
    </textarea>
    <label htmlFor={name}>{label}</label>
    {props.value.length > 0 && hasError && (
      <span data-type="error">{hasError}</span>
    )}
  </Field>
);

export default TextArea;
