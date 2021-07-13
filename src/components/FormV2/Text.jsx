import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'
import { LockIcon, EditIcon } from '../../assets/icons'

export const Text = ({
   id,
   name,
   hasError,
   placeholder,
   hasReadAccess = true,
   hasWriteAccess = true,
   fallBackMessage = "You don't have access to this field",
   variant,
   disabled = false,
   onBlur,
   value,
   ...rest
}) => {
   const [isEditing, setIsEditing] = React.useState(false)
   return (
      <Styles.Field
         title={
            hasWriteAccess === false || hasReadAccess === false
               ? fallBackMessage
               : value
         }
         hasReadAccess={hasReadAccess}
         hasWriteAccess={hasWriteAccess}
         variant={variant}
         disabled={disabled}
         {...rest}
      >
         <Styles.Text
            onFocus={() => setIsEditing(true)}
            onBlur={(e) => {
               setIsEditing(false)
               onBlur?.(e)
            }}
            id={id}
            name={name}
            type='text'
            hasError={hasError}
            placeholder={placeholder}
            variant={variant}
            disabled={disabled}
            value = {value}
            {...rest}
         />

         {(hasWriteAccess === false || hasReadAccess === false) && (
            <span className='locked'>
               <LockIcon />
            </span>
         )}
         {(variant === 'revamp' || variant === 'revamp-sm') && !isEditing && (
            <span className='edit'>
               <EditIcon />
            </span>
         )}
      </Styles.Field>
   )
}

Text.propTypes = {
   hasError: PropTypes.bool,
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   placeholder: PropTypes.string.isRequired
}
