import React from 'react'
import PropTypes from 'prop-types'

import Styles from './styles'
import { LockIcon } from '../../assets/icons'

export const Number = ({
   id,
   name,
   hasError,
   placeholder,
   hasReadAccess = true,
   hasWriteAccess = true,
   fallBackMessage = "You don't have access to this field",
   ...props
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
         <Styles.Number
            id={id}
            name={name}
            type='number'
            hasError={hasError}
            placeholder={placeholder}
            pattern='/^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/'
            {...props}
         />
         {(hasWriteAccess === false || hasReadAccess === false) && (
            <span className='locked'>
               <LockIcon />
            </span>
         )}
      </Styles.Field>
   )
}

Number.propTypes = {
   hasError: PropTypes.bool,
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.number.isRequired,
   onChange: PropTypes.func.isRequired,
   placeholder: PropTypes.string.isRequired
}
