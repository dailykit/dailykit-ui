import React from 'react'

import { Field } from '../styles'
import { LockIcon } from '../../../assets/icons'

const Number = ({
   label,
   name,
   hasReadAccess,
   hasWriteAccess,
   fallBackMessage,
   ...props
}) => {
   const title =
      hasWriteAccess === false || hasReadAccess === false
         ? fallBackMessage || "You don't have access to this field"
         : null
   return (
      <Field
         title={title}
         hasValue={props.value}
         hasReadAccess={hasReadAccess}
         hasWriteAccess={hasWriteAccess}
      >
         <input id={name} name={name} {...props} />
         <label htmlFor={name}>{label}</label>
         {(hasWriteAccess === false || hasReadAccess === false) && (
            <span className='locked'>
               <LockIcon />
            </span>
         )}
      </Field>
   )
}

export default Number
