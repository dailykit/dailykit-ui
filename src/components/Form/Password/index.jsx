import React from "react";

import { Field } from "../styles";

const Password = ({ label, name, hasError, ...props }) => (
  <Field hasValue={props.value}>
    <input type="password" id={name} name={name} {...props} />
    <label htmlFor={name}>{label}</label>
    {props.value.length > 0 && hasError && (
      <span data-type="error">{hasError}</span>
    )}
  </Field>
);

export default Password;
