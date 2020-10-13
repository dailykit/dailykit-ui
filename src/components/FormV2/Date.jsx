import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'
import { LockIcon } from '../../assets/icons'

export const Date = ({
   id,
   name,
   hasError,
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
         <Styles.Date
            id={id}
            name={name}
            type='date'
            hasError={hasError}
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

Date.propTypes = {
   hasError: PropTypes.bool,
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired
}
