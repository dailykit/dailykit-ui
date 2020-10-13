import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'
import { LockIcon } from '../../assets/icons'

export const Password = ({
   id,
   name,
   hasError,
   placeholder,
   hasReadAccess = true,
   hasWriteAccess = true,
   fallBackMessage = "You don't have access to this field",
   ...rest
}) => {
   const title =
      hasWriteAccess === false || hasReadAccess === false
         ? fallBackMessage
         : null
   return (
      <Styles.Field
         title={title}
         hasReadAccess={hasReadAccess}
         hasWriteAccess={hasWriteAccess}
      >
         <Styles.Text
            id={id}
            name={name}
            type='password'
            hasError={hasError}
            placeholder={placeholder}
            {...rest}
         />
         {(hasWriteAccess === false || hasReadAccess === false) && (
            <span className='locked'>
               <LockIcon />
            </span>
         )}
      </Styles.Field>
   )
}

Password.propTypes = {
   hasError: PropTypes.bool,
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   placeholder: PropTypes.string.isRequired
}
